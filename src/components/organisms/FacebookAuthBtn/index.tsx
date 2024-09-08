import React, {FC} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import styleOptions from './fbSocial.style';
import {useTranslation} from 'react-i18next';
import {FacebookIcon} from '../../../global/icons';
import {colors, scale} from '../../../global/theme';

const FacebookAuthBtn: FC = ({setIsLoading, otherProviderCredential}) => {
  // const navigation = useAppNavigation();
  const {t} = useTranslation();
  // const dispatch = useAppDispatch();
  // const {showToast} = useContext(ToastContext);
  // const [userId, setUserId] = useState<string | null>(null);
  // const [signError, setSignError] = useState<string | null>(null);

  // const getFacebookEmail = () => {
  //   return new Promise(resolve => {
  //     const infoRequest = new GraphRequest(
  //       '/me?fields=email',
  //       null,
  //       (error, result) => {
  //         if (error) {
  //           console.log('Error fetching data: ' + error.toString());
  //           resolve(null);
  //           return;
  //         }

  //         resolve(result.email);
  //       },
  //     );
  //     new GraphRequestManager().addRequest(infoRequest).start();
  //   });
  // };

  // const onFBButtonPress = async () => {
  //   let facebookCredential;
  //   setIsLoading(true);
  //   const result = await LoginManager.logInWithPermissions([
  //     'public_profile',
  //     'email',
  //   ]);

  //   if (result.isCancelled) {
  //     setIsLoading(false);
  //     setSignError(t('Facebook Sign-In failed. please try again later'));
  //     throw 'Something went wrong obtaining access token';
  //   }
  //   const data = await AccessToken.getCurrentAccessToken();
  //   if (!data) {
  //     setIsLoading(false);
  //     setSignError(t('Facebook Sign-In failed. please try again later'));
  //     throw 'Something went wrong obtaining access token';
  //   }
  //   try {
  //     facebookCredential = auth.FacebookAuthProvider.credential(
  //       data.accessToken,
  //     );
  //     const firebaseUserCredential = await auth().signInWithCredential(
  //       facebookCredential,
  //     );
  //     setUserId(firebaseUserCredential?.user?.uid);
  //   } catch (error) {
  //     if (
  //       error.code &&
  //       error.code === 'auth/account-exists-with-different-credential'
  //     ) {
  //       const email = await getFacebookEmail();
  //       if (email) {
  //         const providers = await auth().fetchSignInMethodsForEmail(email);
  //         if (providers[0] === 'google.com') {
  //           setIsLoading(false);
  //           handleDiffrentProvider(facebookCredential, email, 'google.com');
  //         }
  //       }
  //     } else {
  //       setIsLoading(false);
  //       setSignError(t('Facebook Sign-In failed. please try again later'));
  //       console.error({error});
  //     }
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
      <View style={[styleOptions.OptionItem, styleOptions.OptionFb]}>
        <View style={styleOptions.OptionItemIcon}>
          <FacebookIcon
            width={scale(28)}
            height={scale(28)}
            color={colors.white}
          />
        </View>
        <View style={styleOptions.OptionItemContent}>
          <Text style={styleOptions.OptionItemText}>
            {t('Continue with Facebook')}
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
export default FacebookAuthBtn;
