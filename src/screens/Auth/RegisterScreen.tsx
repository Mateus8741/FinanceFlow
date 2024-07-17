import { MaterialCommunityIcons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useColorScheme } from 'nativewind';
import { Controller, useForm } from 'react-hook-form';
import { ImageBackground, Pressable, Text, View } from 'react-native';

import { AuthScreenProps } from '@/Routes';
import BlurFormDark from '@/assets/BlurFormDark.png';
import BlurFormLight from '@/assets/BlurFormLight.png';
import { Box, CustomButton, FormPasswordInput, FormTextInput, TextInput } from '@/components';
import { OrView } from '@/components/OrView';
import { registerScheema, RegisterScheema } from '@/schemas';
import { colors } from '@/theme/colors';

function formatBirthDate(value: string) {
  // Remove qualquer caractere que não seja número
  value = value.replace(/\D/g, '');

  if (value.length > 2) {
    value = value.slice(0, 2) + '/' + value.slice(2);
  }
  if (value.length > 5) {
    value = value.slice(0, 5) + '/' + value.slice(5, 9);
  }
  return value;
}

export function RegisterScreen({ navigation }: AuthScreenProps<'RegisterScreen'>) {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(registerScheema),

    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      birthDate: '',
      password: '',
      confirmPassword: '',
    },

    mode: 'onChange',
  });

  const { colorScheme } = useColorScheme();

  const BlurFormColor = colorScheme === 'dark' ? BlurFormDark : BlurFormLight;

  function handleRegister(data: RegisterScheema) {
    console.log(data);
  }

  function goToLogin() {
    navigation.goBack();
  }

  return (
    <Box blur scrollable>
      <View className="flex-1 justify-center">
        <View className="overflow-hidden rounded-lg">
          <ImageBackground
            source={BlurFormColor}
            resizeMode="cover"
            className="rounded-full px-6 py-7">
            <Text className="mb-4 text-center text-5xl font-bold dark:text-white">Registrar</Text>
            <Text className="text-center text-lg text-gray-400 dark:text-gray-200">
              Crie uma conta e continue
            </Text>

            <View className="my-6 gap-y-5">
              <FormTextInput control={control} name="name" placeholder="Nome" />
              <FormTextInput control={control} name="lastName" placeholder="Sobrenome" />
              <FormTextInput
                control={control}
                name="email"
                placeholder="E-mail"
                keyboardType="email-address"
              />

              <Controller
                control={control}
                name="birthDate"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Data de nascimento"
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(formatBirthDate(value))}
                    value={value}
                    keyboardType="numeric"
                    maxLength={10}
                    rightComponent={
                      <MaterialCommunityIcons
                        name="calendar-account-outline"
                        size={24}
                        color={colors.gray[400]}
                        opacity={0.5}
                      />
                    }
                  />
                )}
              />

              <FormPasswordInput control={control} name="password" placeholder="Senha" />
              <FormPasswordInput
                control={control}
                name="confirmPassword"
                placeholder="Confirmar senha"
              />
            </View>

            <CustomButton title="Entrar" onPress={handleSubmit(handleRegister)} />

            <OrView />

            <View className="flex-row items-center justify-center gap-x-1">
              <Text className="text-center text-gray-400 dark:text-gray-200">
                Já tem uma conta?
              </Text>
              <Pressable onPress={goToLogin}>
                <Text className="text-center font-bold text-blue-500">Fazer login</Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>
      </View>
    </Box>
  );
}
