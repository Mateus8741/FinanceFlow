import { useColorScheme } from 'nativewind';
import { ImageBackground, Pressable, Text, View } from 'react-native';

import { AuthScreenProps } from '@/Routes';
import BlurFormDark from '@/assets/BlurFormDark.png';
import BlurFormLight from '@/assets/BlurFormLight.png';
import { Box, CustomButton, PasswordInput, TextInput } from '@/components';
import { OrView } from '@/components/OrView';

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
  const { colorScheme } = useColorScheme();

  const BlurFormColor = colorScheme === 'dark' ? BlurFormDark : BlurFormLight;

  function handleLogin() {
    console.log('Login');
  }

  function forgotPassword() {
    navigation.navigate('ForgotScreen');
  }

  function goToRegister() {
    navigation.navigate('RegisterScreen');
  }

  return (
    <Box blur scrollable>
      <View className="flex-1 justify-center">
        <View className="overflow-hidden rounded-lg">
          <ImageBackground
            source={BlurFormColor}
            resizeMode="cover"
            className="rounded-full px-6 py-7">
            <Text className="mb-4 text-center text-5xl font-bold dark:text-white">Login</Text>
            <Text className="text-center text-lg text-gray-400 dark:text-gray-200">
              Entre e controle suas finaças
            </Text>

            <View className="mt-6 gap-y-5">
              <TextInput placeholder="E-mail" />
              <PasswordInput placeholder="Senha" />
            </View>

            <Pressable onPress={forgotPassword}>
              <Text className="my-6 text-right font-bold text-blue-500">Esqueceu a senha?</Text>
            </Pressable>

            <CustomButton title="Entrar" onPress={handleLogin} />

            <OrView />

            <View className="flex-row items-center justify-center gap-x-1">
              <Text className="text-center text-gray-400 dark:text-gray-200">
                Não tem uma conta?
              </Text>
              <Pressable onPress={goToRegister}>
                <Text className="text-center font-bold text-blue-500">Cadastre-se</Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>
      </View>
    </Box>
  );
}
