import 'react-native-gesture-handler';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import '~/config/ReactotronConfig';

import { store, persistor } from './store';
import Routes from './routes';

// import { Container } from './styles';

export default function src() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor="#FFF" />
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
