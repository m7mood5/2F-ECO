import React, {useContext, useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import authStyle from './auth.style';
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

const EmailAuth = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const {showToast} = useContext(ToastContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
      if (!email || !password) {
        showToast(t('Please enter your E-mail and Password.'), 'alert');
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
  useEffect(() => {
    if (currentUser) {
      checkUserData(currentUser);
    } else if (userError !== null) {
      setIsLoading(false);
      showToast(userError, 'alert');
    }
  }, [currentUser, userError]);

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
        gender: userDocument.data()?.gender,
        defaultAvatar: userDocument.data()?.defaultAvatar,
        avatar: userDocument.data()?.avatar,
        firstName: userDocument.data()?.firstname,
        lastName: userDocument.data()?.lastname,
        location: userDocument.data()?.location,
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
        <Pressable style={authStyle.FormForgetBtn} onPress={() => {}}>
          <Text style={authStyle.FormForgetBtnText}>
            {t('Forgot password?')}
          </Text>
        </Pressable>
      </View>
      <View style={authStyle.FormBtn}>
        <CBtn
          size="large"
          text={t('Login')}
          onPress={handleLogin}
          loading={isLoading}
          disabled={isLoading || !email || !password}
        />
      </View>
    </View>
  );
};
export default EmailAuth;
