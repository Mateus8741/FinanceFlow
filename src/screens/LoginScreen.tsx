import { ImageBackground, Text, View } from 'react-native';

import Blur from '@/assets/BlurView.png';

export function LoginScreen() {
  return (
    <ImageBackground className="flex-1" source={Blur}>
      <View className="flex-1 items-center justify-center">
        <Text>Login</Text>
      </View>
    </ImageBackground>
  );
}
