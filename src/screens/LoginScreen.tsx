import { Text, View } from 'react-native';

import { Blur } from '@/components/Blur';

export function LoginScreen() {
  return (
    <Blur>
      <View className="flex-1 items-center justify-center">
        <Text>Login</Text>
      </View>
    </Blur>
  );
}
