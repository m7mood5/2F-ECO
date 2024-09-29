/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {I18nManager, StatusBar} from 'react-native';
import auth from '@react-native-firebase/auth';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import {colors, scale} from './global/theme';
import AppNavigation from './navgation';
import NetInfo from '@react-native-community/netinfo';
import {ToastProvider} from './context';
import {WifiIcon} from './global/icons'; // Check if correctly exported
import ToastMessage from './components/atoms/ToastMessage'; // Ensure the path is correct
import {useAppDispatch} from './hooks/useRedux.hooks';
import {setUserAction} from './store';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainApp = () => {
  const dispatch = useAppDispatch();
  const [initialScreen, setInitialScreen] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean | null>(true);
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  useEffect(() => {
    const userSubscriber = auth().onAuthStateChanged(onAuthStateChanged);
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubscribe;
      userSubscriber;
    };
  }, []);

  useEffect(() => {
    if (!loadingUser) {
      getAppData();
    }
  }, [loadingUser]);

  // get app data
  const getAppData = async () => {
    const selectLang = await AsyncStorage.getItem('selected_lang');
    if (selectLang === null) {
      setInitialScreen('Welcome');
    } else if (user !== null) {
      i18n.changeLanguage(selectLang);
      if (selectLang === 'ar') {
        I18nManager.allowRTL(true);
        await I18nManager.forceRTL(true);
      }
      const userDocument = await firestore()
        .collection('users')
        .doc(user?.uid)
        .get();
      if (userDocument.data() !== undefined) {
        const data = {
          uid: user?.uid,
          email: userDocument.data()?.email,
          gender: userDocument.data()?.gender,
          defaultAvatar: userDocument.data()?.defaultAvatar,
          avatar: userDocument.data()?.avatar,
          firstName: userDocument.data()?.firstname,
          lastName: userDocument.data()?.lastname,
          location: userDocument.data()?.location,
        };
        dispatch(setUserAction(data));
        setInitialScreen('Tabs');
      } else {
        setInitialScreen('Details');
      }
    } else {
      i18n.changeLanguage(selectLang);
      if (selectLang === 'ar') {
        I18nManager.allowRTL(true);
        await I18nManager.forceRTL(true);
      }
      setInitialScreen('Welcome');
    }
  };

  // check if the user is logged in or not
  const onAuthStateChanged = async user => {
    setUser(user);
    setLoadingUser(false);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NativeBaseProvider>
          <SafeAreaProvider>
            <StatusBar
              barStyle="light-content"
              backgroundColor={colors.primary}
            />
            <ToastProvider>
              {isConnected === false && (
                <ToastMessage
                  visible={!isConnected}
                  message="Oops! No internet Connection"
                  status="info"
                  icon={
                    <WifiIcon
                      width={scale(26)}
                      height={scale(26)}
                      color={colors.white}
                    />
                  }
                />
              )}
            </ToastProvider>
            {initialScreen && <AppNavigation initialScreen={initialScreen} />}
            </SafeAreaProvider>
        </NativeBaseProvider>
      </GestureHandlerRootView>
    </I18nextProvider>
  );
};

export default MainApp;
