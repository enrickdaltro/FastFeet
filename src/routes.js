import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}
