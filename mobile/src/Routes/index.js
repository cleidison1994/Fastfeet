import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useSelector} from 'react-redux';
import SignIn from '~/pages/SignIn';
import Dashboard from './DeliveryRoutes/delivery.routes';
import Profile from '~/pages/Profile';

const Tab = createBottomTabNavigator();
const Auth = createStackNavigator();

const Route = () => {
  const signed = useSelector(state => state.auth.signed);

  return signed ? (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#7159c1',
        activeBackgroundColor: '#fff',
        labelStyle: {
          fontSize: 14,
        },
        inactiveTintColor: '#999',
        style: {
          backgroundColor: '#fff',
          height: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({color}) => (
            <Icon name="dehaze" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({color}) => (
            <Icon name="person-outline" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  ) : (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Auth.Screen name="SignIn" component={SignIn} />
    </Auth.Navigator>
  );
};

export default Route;
