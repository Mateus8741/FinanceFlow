/* eslint-disable @typescript-eslint/no-namespace */
// import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
// import { CompositeScreenProps } from '@react-navigation/native';

// import { AppStackParamList } from './AppStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AuthStackParamList } from './AuthStack';
// import { AppTabBottomTabParamList } from './BottomTabsNavigation/AppTabNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList {}
  }
}

// export type AppScreenProps<RouteName extends keyof AppStackParamList> = NativeStackScreenProps<
//   AppStackParamList,
//   RouteName
// >;

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> = NativeStackScreenProps<
  AuthStackParamList,
  RouteName
>;

// export type AppTabScreenProps<RouteName extends keyof AppTabBottomTabParamList> =
//   CompositeScreenProps<
//     BottomTabScreenProps<AppTabBottomTabParamList, RouteName>,
//     NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
//   >;
