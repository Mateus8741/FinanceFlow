import { useColorScheme } from 'nativewind';
import { ImageBackground, Text, View } from 'react-native';

import BlurFormDark from '@/assets/BlurFormDark.png';
import BlurFormLight from '@/assets/BlurFormLight.png';
import { Box, CustomButton, TextInput } from '@/components';

export function ForgotScreen() {
  const { colorScheme } = useColorScheme();

  const BlurFormColor = colorScheme === 'dark' ? BlurFormDark : BlurFormLight;

  function handleForgotPassword() {
    console.log('Forgot Password');
  }

  return (
    <Box blur>
      <View className="flex-1 justify-center">
        <View className="overflow-hidden rounded-lg">
          <ImageBackground
            source={BlurFormColor}
            resizeMode="cover"
            className="rounded-full px-6 py-7">
            <Text className="mb-4 text-center text-5xl font-bold dark:text-white">Recuperar</Text>
            <Text className="text-center text-lg text-gray-400 dark:text-gray-200">
              Informe seu e-mail para recuperar a senha
            </Text>

            <View className="my-6 gap-y-5">
              <TextInput placeholder="E-mail" />
            </View>

            <CustomButton title="Recuperar senha" onPress={handleForgotPassword} />
          </ImageBackground>
        </View>
      </View>
    </Box>
  );
}
