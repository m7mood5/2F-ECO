import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainApp from './src/MainApp';
import {Provider} from 'react-redux';
import { store } from './src/store';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <MainApp />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
