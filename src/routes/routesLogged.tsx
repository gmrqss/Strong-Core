import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../components/HomePage';
import Profile from '../components/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function RoutesLogged({navigation}){
    return(
      
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Perfil') {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
              } else if (route.name === 'Lista') {
                  iconName = focused ? 'list' : 'list-outline';
              } else if (route.name === 'Adicionar') {
                iconName = focused ? 'add-circle' : 'add-circle-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'rgb(41, 201, 161)',
            inactiveTintColor: 'gray',
          }}
        >
            <Tab.Screen name="Home" component={Main} />
            <Tab.Screen name="Perfil" component={Profile} />
        </Tab.Navigator>
        
    );
}