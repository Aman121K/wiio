import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../Screens/Auth/Signin';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Scan from '../Screens/Scan';
import Splash from '../Screens/Auth/Splash';
import Welcome from '../Screens/Auth/Welcome';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="Scan" component={Scan} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
export default StackNavigation;