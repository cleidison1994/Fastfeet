import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Details from '~/pages/Dashboard/Details';
import Confirm from '~/pages/Dashboard/Confirm';
import ListProblem from '~/pages/Dashboard/ListProblem';
import Problem from '~/pages/Dashboard/Problem';
import Dashboard from '~/pages/Dashboard';

const Delivery = createStackNavigator();

const DeliveryRoutes = () => {
  return (
    <Delivery.Navigator>
      <Delivery.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Delivery.Screen
        name="Details"
        component={Details}
        options={{
          headerTitle: 'Detalhes da encomenda',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTitleStyle: {fontWeight: 'bold'},
          headerTintColor: '#fff',
          headerLeftContainerStyle: {
            left: 10,
          },
        }}
      />
      <Delivery.Screen
        name="Problem"
        component={Problem}
        options={{
          headerTitle: 'Informar problema',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTitleStyle: {fontWeight: 'bold'},
          headerTintColor: '#fff',
          headerLeftContainerStyle: {
            left: 10,
          },
        }}
      />
      <Delivery.Screen
        name="ListProblem"
        component={ListProblem}
        options={{
          headerTitle: 'Visualizar problema',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTitleStyle: {fontWeight: 'bold'},
          headerTintColor: '#fff',
          headerLeftContainerStyle: {
            left: 10,
          },
        }}
      />
      <Delivery.Screen
        name="Confirm"
        component={Confirm}
        options={{
          headerTitle: 'Confirmar entrega',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTitleStyle: {fontWeight: 'bold'},
          headerTintColor: '#fff',
          headerLeftContainerStyle: {
            left: 10,
          },
        }}
      />
    </Delivery.Navigator>
  );
};

export default DeliveryRoutes;
