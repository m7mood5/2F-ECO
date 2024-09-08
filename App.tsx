import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainApp from './src/MainApp';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <MainApp />
    </SafeAreaProvider>
  );
}

export default App;
