import { useColorScheme } from 'nativewind';
import { ImageBackground, Text, View } from 'react-native';

import BlurFormDark from '@/assets/BlurFormDark.png';
import BlurFormLight from '@/assets/BlurFormLight.png';
import { Box, CustomButton, PasswordInput, TextInput } from '@/components';

export function LoginScreen() {
  const { colorScheme } = useColorScheme();

  const BlurFormColor = colorScheme === 'dark' ? BlurFormDark : BlurFormLight;

  return (
    <Box blur>
      <View className="flex-1 justify-center">
        <View className="overflow-hidden rounded-lg">
          <ImageBackground
            source={BlurFormColor}
            resizeMode="cover"
            className="rounded-full px-6 py-7">
            <Text className="mb-4 text-center text-5xl font-bold">Login</Text>
            <Text className="mb-5 text-center text-lg text-gray-400 dark:text-gray-300">
              Entre e controle suas finaças
            </Text>

            <View className="mt-6 gap-y-5">
              <TextInput placeholder="E-mail" />
              <PasswordInput placeholder="Senha" />
            </View>

            <Text className="my-6 text-right font-bold text-blue-500">Esqueceu a senha?</Text>

            <CustomButton title="Entrar" />
          </ImageBackground>
        </View>
      </View>
    </Box>
  );
}
