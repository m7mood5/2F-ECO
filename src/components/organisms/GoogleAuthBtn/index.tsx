import React from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import styleOptions from './googleSocial.style';
import {useTranslation} from 'react-i18next';
import {GoogleIcon} from '../../../global/icons';
import {colors, scale} from '../../../global/theme';

const GoogleAuthBtn = ({setIsLoading, otherProviderCredential}) => {
  const {t} = useTranslation();
  // const navigation = useAppNavigation();
  // const dispatch = useAppDispatch();
  // const {showToast} = useContext(ToastContext);
  // const [userId, setUserId] = useState<string | null>(null);
  // const [signError, setSignError] = useState<string | null>(null);

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '1075537144770-fajiecp3g9imifs6m3k2t1hn62lkfeu3.apps.googleusercontent.com',
  //   });
  // }, []);

  // const onGoogleButtonPress = async () => {
  //   setIsLoading(true);
  //   try {
  //     await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  //     const {idToken} = await GoogleSignin.signIn();
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //     const firebaseUserCredential = await auth().signInWithCredential(
  //       googleCredential,
  //     );
  //     if (otherProviderCredential) {
  //       await auth().currentUser.linkWithCredential(otherProviderCredential);
  //     }
  //     setUserId(firebaseUserCredential?.user?.uid);
  //   } catch (error) {
  //     setIsLoading(false);
  //     setSignError(t('Google Sign-In failed. please try again later'));
  //   }
  // };

  // const checkUserData = async userId => {
  //   const userDocument = await firestore()
  //     .collection('users')
  //     .doc(userId)
  //     .get();
  //   setIsLoading(false);
  //   if (userDocument.data() !== undefined) {
  //     const data = {
  //       uid: userId,
  //       email: userDocument.data()?.email,
  //       jobtitle: userDocument.data()?.jobtitle,
  //       defaultAvatar: userDocument.data()?.defaultAvatar,
  //       avatar: userDocument.data()?.avatar,
  //       firstName: userDocument.data()?.firstname,
  //       lastName: userDocument.data()?.lastname,
  //     };
  //     dispatch(setUserAction(data));
  //     navigation.dispatch(
  //       CommonActions.reset({
  //         index: 1,
  //         routes: [{name: 'Tabs'}],
  //       }),
  //     );
  //   } else {
  //     navigation.dispatch(
  //       CommonActions.reset({
  //         index: 1,
  //         routes: [{name: 'ContinueRegister'}],
  //       }),
  //     );
  //   }
  // };

  // useEffect(() => {
  //   if (userId) {
  //     checkUserData(userId);
  //   } else if (signError !== null) {
  //     setIsLoading(false);
  //     showToast(signError, 'alert');
  //   }
  // }, [userId, signError]);

  return (
    <TouchableNativeFeedback onPress={() => {}}>
      <View style={[styleOptions.OptionItem, styleOptions.OptionGoogle]}>
        <View style={styleOptions.OptionItemIcon}>
          <GoogleIcon width={scale(24)} height={scale(24)} />
        </View>
        <View style={styleOptions.OptionItemContent}>
          <Text
            style={[styleOptions.OptionItemText, {color: colors.primaryDark}]}>
            {t('Continue with Google')}
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
export default GoogleAuthBtn;
