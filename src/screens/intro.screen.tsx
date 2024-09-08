import React from 'react';
import {SafeAreaView} from 'react-native';
import LoginOptions from '../components/organisms/LoginOptions';

const IntroScreen: React.FC = () => {
  return (
    <>
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {/* <LoginOptions /> */}
      </SafeAreaView>
    </>
  );
};
export default IntroScreen;
