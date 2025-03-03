import { zodResolver } from '@hookform/resolvers/zod';
import { useColorScheme } from 'nativewind';
import { useForm } from 'react-hook-form';
import { ImageBackground, Pressable, Text, View } from 'react-native';

import { AuthScreenProps } from '@/Routes';
import BlurFormDark from '@/assets/BlurFormDark.png';
import BlurFormLight from '@/assets/BlurFormLight.png';
import { Box, CustomButton, FormPasswordInput, FormTextInput } from '@/components';
import { OrView } from '@/components/OrView';
import { login } from '@/database/services';
import { loginScheema, LoginScheema } from '@/schemas';

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm({
    resolver: zodResolver(loginScheema),

    defaultValues: {
      email: '',
      password: '',
    },

    mode: 'onSubmit',
  });

  const { colorScheme } = useColorScheme();

  const BlurFormColor = colorScheme === 'dark' ? BlurFormDark : BlurFormLight;

  async function handleLogin(data: LoginScheema) {
    console.log(data);
    await login(data.email, data.password);
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

            <View className="my-6 gap-y-5">
              <FormTextInput control={control} name="email" placeholder="E-mail" />
              <FormPasswordInput control={control} name="password" placeholder="Senha" />
            </View>

            <Pressable onPress={forgotPassword}>
              <Text className="my-6 text-right font-bold text-blue-500">Esqueceu a senha?</Text>
            </Pressable>

            <CustomButton
              title="Entrar"
              onPress={handleSubmit(handleLogin)}
              isDisabled={!isDirty || !isValid}
              isLoading={false}
            />

            <OrView
              title="Ainda não tem uma conta?"
              subTitle="Cadastre-se"
              onPress={goToRegister}
            />
          </ImageBackground>
        </View>
      </View>
    </Box>
  );
}
