/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import sheetStyle from './sheet.style';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {useTranslation} from 'react-i18next';
import {ToastContext} from '../../context';
import {CBtn, InputField} from '../../components/atoms';
import {colors} from '../../global/theme';
import {UserLockIcon, UserPassIcon} from '../../global/icons';
import auth from '@react-native-firebase/auth';
import useAuth from '../../hooks/useAuth.hooks';
import {useAppDispatch} from '../../hooks/useRedux.hooks';
import {useAppNavigation} from '../../hooks';
import {CommonActions} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {setUserAction} from '../../store';

function LoginForm() {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const {showToast} = useContext(ToastContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  // const [success, setSuccess] = useState(false);
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
        // Show toast for missing email or password
        showToast(t('Please enter your E-mail and Password.'), 'alert');
        return; // Stop execution if inputs are invalid
      }

      // Check if user exists by fetching sign-in methods for the provided email
      const signInMethods = await auth().fetchSignInMethodsForEmail(email);

      if (signInMethods.length > 0) {
        // User exists, sign in
        await signInWithEmailAndPassword(email, password);

        showToast(t('Login successful!'), 'success'); // Show success toast for login
      } else {
        // User does not exist, create a new account
        await createUserWithEmailAndPassword(email, password);
        showToast(t('Registration successful!'), 'success'); // Show success toast for registration
      }

      // Hide the login form after success
      SheetManager.hide('LoginForm');
    } catch (err: any) {
      // Show toast with the error message if login or registration fails
      showToast(t('Login or registration failed: ') + err.message, 'alert');
      setError(err.message);
    } finally {
      // Set loading state to false after operation is complete
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
        jobtitle: userDocument.data()?.jobtitle,
        defaultAvatar: userDocument.data()?.defaultAvatar,
        avatar: userDocument.data()?.avatar,
        firstName: userDocument.data()?.firstname,
        lastName: userDocument.data()?.lastname,
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
    <ActionSheet
      id="LoginForm"
      isModal={false}
      zIndex={9}
      gestureEnabled={true}
      indicatorStyle={sheetStyle.indicatorStyle}
      containerStyle={sheetStyle.containerStyle}
      useBottomSafeAreaPadding={true}>
      <View style={sheetStyle.sheetWrapper}>
        <View style={sheetStyle.Title}>
          <Text style={sheetStyle.TitleText}>{t('Login')}</Text>
        </View>
        <View style={sheetStyle.Body}>
          <View style={sheetStyle.FormInput}>
            <Text style={sheetStyle.Label}>{t('Email')}</Text>
            <InputField
              keyboardType={'email-address'}
              placeholder={t('example@example.com')}
              value={email}
              onChangeText={setEmail}
              inputIcon={
                <UserPassIcon
                  width={24}
                  height={24}
                  color={colors.primaryDark}
                />
              }
            />
          </View>
          <View style={sheetStyle.FormInput}>
            <Text style={sheetStyle.Label}>{t('Password')}</Text>
            <InputField
              keyboardType={'default'}
              placeholder={t('********')}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              inputIcon={
                <UserLockIcon
                  width={24}
                  height={24}
                  color={colors.primaryDark}
                />
              }
            />
          </View>
          <View style={sheetStyle.FormBtn}>
            <CBtn
              size="large"
              text={t('Login')}
              onPress={handleLogin}
              loading={isLoading}
              disabled={isLoading || !email || !password}
            />
          </View>
          {error && (
            <Text style={{color: colors.error, marginTop: 10}}>{error}</Text>
          )}
        </View>
      </View>
    </ActionSheet>
  );
}

export default LoginForm;
