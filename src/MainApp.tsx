/* eslint-disable react-native/no-inline-styles */
import {StatusBar} from 'react-native';
import React from 'react';
import {I18nextProvider, useTranslation} from 'react-i18next';
import i18n from './i18n';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import AuthLayout from './components/organisms/AuthLayout';
import EmailAuth from './components/organisms/EmailAuth';
import {colors} from './global/theme';
import IntroScreen from './screens/intro.screen';
import ScrollView from './components/organisms/ScrollView';
import AppNavigation from './navgation';
import TabNavigator from './navgation/BottomTabs';

const MainApp = () => {
  const {t} = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NativeBaseProvider>
          <SafeAreaProvider>
            <StatusBar
              barStyle="light-content"
              backgroundColor={colors.primary}
            />
            {/* <AuthLayout
              title={t('Continue with Email')}
              subTitle={t(
                "We will sign you up, and if you already have an account, we'll log you in.",
              )}
              withBack>
              <EmailAuth />
            </AuthLayout> */}
            {/* <IntroScreen /> */}
            {/* <ScrollView/> */}
            {/* <AppNavigation initialScreen="Home" /> */}
            <TabNavigator />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </GestureHandlerRootView>
    </I18nextProvider>
  );
};

export default MainApp;
