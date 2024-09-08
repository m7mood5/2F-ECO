import React from 'react';
import BottomNavBar from './BottomTabsBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IntroScreen from '../screens/intro.screen';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const options = {
  headerShown: false,
  tabBarVisible: false,
};
const TabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={options}
      tabBar={props => <BottomNavBar {...props} />}>
      <Tab.Screen name="Home" component={IntroScreen} />
      <Tab.Screen name="Templates" component={IntroScreen} />
      <Tab.Screen name="Account" component={IntroScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default TabNavigator;
