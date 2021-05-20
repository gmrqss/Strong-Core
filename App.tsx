import React from 'react';
import RoutesUnlogged from './src/routes/routesUnlogged';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <RoutesUnlogged/>
    </NavigationContainer>
  );
}
