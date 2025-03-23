import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

import { useUserStorage } from '@/contexts/useUserStorage';

export function Routes() {
  const { user } = useUserStorage();

  return (
    <NavigationContainer>
      {user?.user_metadata.id ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
