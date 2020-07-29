import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Entrada from '../pantallas/entrada';
import Completorio from '../pantallas/completorio';
import ListaOraciones from '../pantallas/listaoraciones';



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      tabBarOptions={{
        activeTintColor: 'black',
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Entrada}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-variant" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Completas"
        component={Completorio}
        options={{
          tabBarLabel: 'Completas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="church" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Oraciones"
        component={ListaOraciones}
        options={{
          tabBarLabel: 'Oraciones',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted-triangle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function TabFooter() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}