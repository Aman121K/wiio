import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import StackNavigation from './src/Navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}
export default App;
