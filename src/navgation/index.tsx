/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import TabNavigator from './BottomTabs';
import IntroScreen from '../screens/intro.screen'; // Adjust the path based on your structure
import WelcomeScreen from '../screens/Welcome.screen';
import Login from '../screens/Login.screen';
import {SheetProvider} from 'react-native-actions-sheet';
import '../actionSheets/index';
import {View} from 'react-native';
import Details from '../screens/Details.screen';
import LoginWithEmail from '../screens/EmailLogin.screen';
import MapScreen from '../screens/Map.screen';

const {Screen, Navigator} = createStackNavigator();

type navigationProps = {
  initialScreen: string;
};

const AppNavigation = ({initialScreen}: navigationProps) => {
  const options = {
    headerShown: false,
    tabBarVisible: false,
    ...TransitionPresets.SlideFromRightIOS,
  };

  return (
    <NavigationContainer>
      <View style={{flex: 1, height: '100%'}}>
        <SheetProvider>
          <Navigator screenOptions={options} initialRouteName={initialScreen}>
            <Screen name="Tabs" component={TabNavigator} />
            <Screen name="Welcome" component={WelcomeScreen} />
            <Screen name="Intro" component={IntroScreen} />
            <Screen name="Login" component={Login} />
            <Screen name="EmailLogin" component={LoginWithEmail} />
            <Screen name="Details" component={Details} />
            <Screen name="Location" component={MapScreen} />
          </Navigator>
        </SheetProvider>
      </View>
    </NavigationContainer>
  );
};

export default AppNavigation;
