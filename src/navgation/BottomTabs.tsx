import React from 'react';
import BottomNavBar from './BottomTabsBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IntroScreen from '../screens/intro.screen';
import {NavigationContainer} from '@react-navigation/native';
import AccountScreen from '../screens/Account.screen';

const Tab = createBottomTabNavigator();
const options = {
  headerShown: false,
  tabBarVisible: false,
};
const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={options}
      tabBar={props => <BottomNavBar {...props} />}>
      <Tab.Screen name="Home" component={IntroScreen} />
      <Tab.Screen name="Odyssey" component={IntroScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
);

export default TabNavigator;
