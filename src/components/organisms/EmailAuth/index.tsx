import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import authStyle from './auth.style';
// import {CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import { CBtn, InputField } from '../../atoms';
import { UserLockIcon, UserPassIcon } from '../../../global/icons';
import { colors, verticalScale } from '../../../global/theme';

const EmailAuth = () => {
  const {t} = useTranslation();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogin = async () => {
//     setIsLoading(true);
//     if (!email || !password) {
//       setIsLoading(false);
//       showToast(t('Please enter your E-mail and Password.'), 'alert');
//     } else {
//       const signInMethods = await auth().fetchSignInMethodsForEmail(email);
//       if (signInMethods.length > 0) {
//         await signInWithEmailAndPassword(email, password);
//       } else {
//         await createUserWithEmailAndPassword(email, password);
//       }
//     }
//   };

//   useEffect(() => {
//     if (currentUser) {
//       checkUserData(currentUser);
//     } else if (userError !== null) {
//       setIsLoading(false);
//       showToast(userError, 'alert');
//     }
//   }, [currentUser, userError]);

//   const checkUserData = async currentUser => {
//     const userDocument = await firestore()
//       .collection('users')
//       .doc(currentUser?.uid)
//       .get();
//     setIsLoading(false);
//     if (userDocument.data() !== undefined) {
//       const data = {
//         uid: currentUser?.uid,
//         email: userDocument.data()?.email,
//         jobtitle: userDocument.data()?.jobtitle,
//         defaultAvatar: userDocument.data()?.defaultAvatar,
//         avatar: userDocument.data()?.avatar,
//         firstName: userDocument.data()?.firstname,
//         lastName: userDocument.data()?.lastname,
//       };
//       dispatch(setUserAction(data));
//       navigation.dispatch(
//         CommonActions.reset({
//           index: 1,
//           routes: [{name: 'Tabs'}],
//         }),
//       );
//     } else {
//       navigation.dispatch(
//         CommonActions.reset({
//           index: 1,
//           routes: [{name: 'ContinueRegister'}],
//         }),
//       );
//     }
//   };
  return (
    <View style={authStyle.Container}>
      <View style={authStyle.FormInput}>
        <Text style={authStyle.Label}>{t('E-mail')}</Text>
        <InputField
          keyboardType={'email-address'}
          placeholder={t('Please enter your Email')}
          inputIcon={
            <UserPassIcon width={24} height={24} color={colors.primaryDark} />
          }
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={[authStyle.FormInput, {marginBottom: verticalScale(10)}]}>
        <Text style={authStyle.Label}>{t('Password')}</Text>
        <InputField
          placeholder={t('Please enter your Password')}
          isSecure
          inputIcon={
            <UserLockIcon width={24} height={24} color={colors.primaryDark} />
          }
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={authStyle.FormForget}>
        <Pressable
          style={authStyle.FormForgetBtn}
          onPress={() => {}}>
          <Text style={authStyle.FormForgetBtnText}>
            {t('Forgot password?')}
          </Text>
        </Pressable>
      </View>
      <View style={authStyle.FormBtn}>
        <CBtn
          size="large"
          text={t('Continue')}
          onPress={()=>{}}
        />
      </View>
    </View>
  );
};
export default EmailAuth;
