/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

const {Screen, Navigator} = createStackNavigator();
import TabNavigator from './BottomTabs';
import {View} from 'react-native';
// import {SheetProvider} from 'react-native-actions-sheet';
// import '../actionsheets/sheets';
import IntroScreen from '../screens/intro.screen';

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
        {/* <SheetProvider> */}
        <Navigator screenOptions={options}>
          <Screen name="Tabs" component={TabNavigator} />
          <Screen name="Home" component={IntroScreen} />
        </Navigator>
        {/* </SheetProvider> */}
      </View>
    </NavigationContainer>
  );
};

export default AppNavigation;
