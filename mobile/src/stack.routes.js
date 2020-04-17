import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '~/pages/Dashboard';
import DeliveryDetails from '~/pages/Details/DeliveryDetails';
import Problems from '~/pages/Details/Problems';
import ViewProblems from '~/pages/Details/ViewProblems';
import ConfirmDelivery from '~/pages/Details/ConfirmDelivery';

const Stack = createStackNavigator();

Icon.loadFont();

export default function DeliveryStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#fff',
        headerLeftContainerStyle: {
          marginLeft: 10,
          fontSize: 14,
        },
      }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen
        name="DeliveryDetails"
        component={DeliveryDetails}
        options={{
          headerTitle: 'Detalhes da encomenda',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Problems"
        component={Problems}
        options={{
          headerTitle: 'Informar um problema',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="ViewProblems"
        component={ViewProblems}
        options={{
          headerTitle: 'Visualizar problemas',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={{
          headerTitle: 'Confirmar Entrega',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
