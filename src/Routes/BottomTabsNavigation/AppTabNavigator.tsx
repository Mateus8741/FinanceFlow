import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { AppTabBar } from './AppTabBar';

import {
  AddBillScreen,
  HomeScreen,
  ProfileScreen,
  ResumeScreen,
  TransactionScreen,
} from '@/screens';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  TransactionScreen: undefined;
  ResumeScreen: undefined;
  AddBillScreen: undefined;
};

function renderTabBar(props: BottomTabBarProps) {
  return <AppTabBar {...props} />;
}

export function AppTabNavigator() {
  const { Navigator, Screen } = createBottomTabNavigator<AppTabBottomTabParamList>();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={renderTabBar}>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="TransactionScreen" component={TransactionScreen} />
      <Screen name="AddBillScreen" component={AddBillScreen} />
      <Screen name="ResumeScreen" component={ResumeScreen} />
      <Screen name="ProfileScreen" component={ProfileScreen} />
    </Navigator>
  );
}
