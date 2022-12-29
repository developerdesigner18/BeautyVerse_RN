import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../customer/screens/SplashScreen/SplashScreen';
import LoginScreen from '../customer/screens/SplashScreen/AuthScreens/LoginScreen';
import RegistrationScreen from '../customer/screens/SplashScreen/AuthScreens/RegistrationScreen';
import ResetPass from '../customer/screens/SplashScreen/AuthScreens/ResetPass';
import ForgotPass from '../customer/screens/SplashScreen/AuthScreens/ForgotPass';
import {BusinessStack} from './BusinessStack';
import {CustomerStack} from './CustomerStack';

const Stack = createNativeStackNavigator();

export function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <Stack.Screen name="ResetPass" component={ResetPass} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
        <Stack.Screen name="business" component={BusinessStack} />
        <Stack.Screen name="customer" component={CustomerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
