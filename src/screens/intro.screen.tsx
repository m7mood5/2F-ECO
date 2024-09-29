/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {SafeAreaView} from 'react-native';
import LoginOptions from '../components/organisms/LoginOptions';
import DetailsView from '../components/organisms/Details';
const IntroScreen: React.FC = () => {
  return (
    <>
      <SafeAreaView
        style={{flex:1}}>
          <DetailsView/>
      </SafeAreaView>
    </>
  );
};
export default IntroScreen;
