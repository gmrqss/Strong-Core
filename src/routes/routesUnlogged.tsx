import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, Icon} from 'react-native-elements';

import LoginPage from '../components/LoginPage';
import RoutesLogged from './routesLogged';

const Stack = createStackNavigator();

const RoutesUnlogged = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen 
      name="Principal" 
      component={RoutesLogged} 
      options={{
        title: "Strong Core", 
        headerTitleAlign: 'center', 
        headerTintColor: '#FFF', 
        headerStyle:{
          backgroundColor: 'rgb(41, 201, 161)'
        }, 
        headerTitleStyle:{
          fontWeight: 'bold'
        }, 
        headerRight: () => (
           <Icon style={{marginRight: 15}}
                name="exit-outline"
                type="ionicon"
                color='#FFF'
            />
        ),
    }} />
    </Stack.Navigator>
  );
}

export default RoutesUnlogged;