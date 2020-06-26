/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import '~/config/ReactotronConfig';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {setNavigator} from '~/services/navigationServices';
import Routes from '~/Routes';
import {store, persistor} from './store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer ref={setNavigator}>
          <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
