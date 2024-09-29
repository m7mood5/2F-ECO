import React, {useContext, useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {CBtn, InputField} from '../../atoms';
import {UserLockIcon, UserPassIcon} from '../../../global/icons';
import {colors, verticalScale} from '../../../global/theme';
import {CommonActions} from '@react-navigation/native';
import {setUserAction} from '../../../store';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useAppDispatch} from '../../../hooks/useRedux.hooks';
import {useAppNavigation} from '../../../hooks';
import {ToastContext} from '../../../context';
import useAuth from '../../../hooks/useAuth.hooks';
import authStyle from './auth.style';

const DetailsView = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const {showToast} = useContext(ToastContext);
  
  // Input states for email, password, height, weight, and birthday
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [height, setHeight] = useState<string>('');  // Height field
  const [weight, setWeight] = useState<string>('');  // Weight field
  const [birthday, setBirthday] = useState<string>('');  // Birthday field
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    currentUser,
    userError,
  } = useAuth();

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      if (!email || !password || !height || !weight || !birthday) {
        showToast(t('Please fill all the fields.'), 'alert');
        return;
      }

      const signInMethods = await auth().fetchSignInMethodsForEmail(email);
      if (signInMethods.length > 0) {
        await signInWithEmailAndPassword(email, password);
        showToast(t('Login successful!'), 'success');
      } else {
        await createUserWithEmailAndPassword(email, password);
        showToast(t('Registration successful!'), 'success');
      }
    } catch (err: any) {
      showToast(t('Login or registration failed: ') + err.message, 'alert');
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

//   useEffect(() => {
//     if (currentUser) {
//       checkUserData(currentUser);
//     } else if (userError !== null) {
//       setIsLoading(false);
//       showToast(userError, 'alert');
//     }
//   }, [currentUser, userError]);

  const checkUserData = async currentUser => {
    const userDocument = await firestore()
      .collection('users')
      .doc(currentUser?.uid)
      .get();
    setIsLoading(false);
    if (userDocument.data() !== undefined) {
      const data = {
        uid: currentUser?.uid,
        email: userDocument.data()?.email,
        height: userDocument.data()?.height,  // Add height to the user data
        weight: userDocument.data()?.weight,  // Add weight to the user data
        birthday: userDocument.data()?.birthday,  // Add birthday to the user data
      };
      dispatch(setUserAction(data));
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Tabs'}],
        }),
      );
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Details'}],
        }),
      );
    }
  };

  return (
    <View style={authStyle.Container}>
      {/* Email Input */}
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
      
      {/* Password Input */}
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

      {/* Height Input */}
      <View style={[authStyle.FormInput, {marginBottom: verticalScale(10)}]}>
        <Text style={authStyle.Label}>{t('Height (cm)')}</Text>
        <InputField
          placeholder={t('Enter your height in cm')}
          keyboardType={'numeric'}
          value={height}
          onChangeText={setHeight}
        />
      </View>

      {/* Weight Input */}
      <View style={[authStyle.FormInput, {marginBottom: verticalScale(10)}]}>
        <Text style={authStyle.Label}>{t('Weight (kg)')}</Text>
        <InputField
          placeholder={t('Enter your weight in kg')}
          keyboardType={'numeric'}
          value={weight}
          onChangeText={setWeight}
        />
      </View>

      {/* Birthday Input */}
      <View style={[authStyle.FormInput, {marginBottom: verticalScale(10)}]}>
        <Text style={authStyle.Label}>{t('Birthday')}</Text>
        <InputField
          placeholder={t('Enter your birthday (YYYY-MM-DD)')}
          value={birthday}
          onChangeText={setBirthday}
        />
      </View>

      {/* Forgot Password */}
      <View style={authStyle.FormForget}>
        <Pressable style={authStyle.FormForgetBtn} onPress={() => {}}>
          <Text style={authStyle.FormForgetBtnText}>
            {t('Forgot password?')}
          </Text>
        </Pressable>
      </View>

      {/* Login/Submit Button */}
      <View style={authStyle.FormBtn}>
        <CBtn
          size="large"
          text={t('Login')}
          onPress={handleLogin}
          loading={isLoading}
          disabled={isLoading || !email || !password || !height || !weight || !birthday}
        />
      </View>
    </View>
  );
};
export default DetailsView;
