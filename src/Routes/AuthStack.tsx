import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ForgotScreen, LoginScreen, RegisterScreen } from '@/screens';

export type AuthStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ForgotScreen: undefined;
};

export function AuthStack() {
  const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

  return (
    <Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Screen name="LoginScreen" component={LoginScreen} />
      <Screen name="RegisterScreen" component={RegisterScreen} />
      <Screen name="ForgotScreen" component={ForgotScreen} />
    </Navigator>
  );
}
