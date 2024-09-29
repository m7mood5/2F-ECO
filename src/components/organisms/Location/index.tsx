/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useContext} from 'react';
import {View, Dimensions, PermissionsAndroid, Platform} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useAppNavigation} from '../../../hooks';
import {useAppDispatch, useAppSelector} from '../../../hooks/useRedux.hooks';
import {ToastContext} from '../../../context';
import useAuth from '../../../hooks/useAuth.hooks';
import {setUserAction} from '../../../store';
import {CBtn} from '../../atoms';
import formStyle from './location';
import {colors} from '../../../global/theme';
import useUser from '../../../hooks/useUser.hooks';
import Geolocation from '@react-native-community/geolocation';

// Define Location type
interface Location {
  latitude: number;
  longitude: number;
}

const {width, height} = Dimensions.get('window');

// Request location permission
const requestLocationPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else {
    // iOS permissions can be handled differently, if necessary
    return true; // Assuming permission is granted for iOS (requires additional setup)
  }
};

const LocationView = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const {showToast} = useContext(ToastContext);
  const {t} = useTranslation();
  const {currentUser} = useAuth();
  const {createUser} = useUser();

  // Initialize state with type
  const [location, setLocation] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const userInfo = useAppSelector(state => state.user.data);

  // Get current location automatically
  useEffect(() => {
    const getCurrentLocation = async () => {
      const hasPermission = await requestLocationPermission();
      if (hasPermission) {
        Geolocation.getCurrentPosition(
          position => {
            const {latitude, longitude} = position.coords;
            setLocation({latitude, longitude});
          },
          error => {
            console.log(error);
            showToast(t('Unable to retrieve location'), 'alert');
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        showToast(t('Location permission denied'), 'alert');
      }
    };
    getCurrentLocation();
  }, []);

  const handleLocationSelect = (e: {nativeEvent: {coordinate: Location}}) => {
    setLocation(e.nativeEvent.coordinate);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    if (location) {
      try {
        const userData = {
          location,
          email: currentUser?.email,
          gender: userInfo?.gender,
          defaultAvatar: userInfo?.defaultAvatar,
          avatar: userInfo?.avatar,
          firstName: userInfo?.firstName,
          lastName: userInfo?.lastName,
        };
        await createUser(currentUser?.uid, userData);
        setIsLoading(false);
        showToast(t('Location saved successfully!'), 'success');

        const data = {
          uid: currentUser?.uid,
          email: currentUser?.email,
          location,
          gender: userInfo?.gender,
          defaultAvatar: userInfo?.defaultAvatar,
          avatar: userInfo?.avatar,
          firstName: userInfo?.firstName,
          lastName: userInfo?.lastName,
        };
        dispatch(setUserAction(data));
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Tabs'}],
          }),
        );
      } catch (error) {
        setIsLoading(false);
        showToast(t('An error occurred. Please try again later.'), 'alert');
      }
    } else {
      setIsLoading(false);
      showToast(t('Please select your location to continue.'), 'alert');
    }
  };

  return (
    <View style={formStyle.Container}>
      {/* Google Places Search Bar */}
      <GooglePlacesAutocomplete
        placeholder={t('Search for a location')}
        fetchDetails={true}
        onPress={(data, details = null) => {
          if (details) {
            const {lat, lng} = details.geometry.location;
            setLocation({latitude: lat, longitude: lng});
          } else {
            showToast(t('Location details not found'), 'alert');
          }
        }}
        query={{
          key: 'AIzaSyDuVoCwaGHaDtm30HmX3jsm9M6Wu3sWYDo', // Replace with your API Key
          language: 'en',
        }}
        styles={{
          textInputContainer: {
            width: '100%',
          },
          textInput: {
            height: 44,
            color: colors.primaryDark,
            fontSize: 16,
          },
        }}
      />

      {/* Full-screen Map */}
      <MapView
        style={{width, height}}
        region={
          location
            ? {
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }
            : undefined
        }
        onPress={handleLocationSelect}
        showsUserLocation={true}
        showsMyLocationButton={true}>
        {location && (
          <Marker coordinate={location} title={t('Your Location')} />
        )}
      </MapView>

      {/* Confirm Button */}
      <View style={formStyle.FormBtn}>
        <CBtn
          size="large"
          text={t('Confirm')}
          onPress={handleSubmit}
          loading={isLoading}
        />
      </View>
    </View>
  );
};

export default LocationView;
