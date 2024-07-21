import { zodResolver } from '@hookform/resolvers/zod';
import { useColorScheme } from 'nativewind';
import { useForm } from 'react-hook-form';
import { Pressable, Text, View } from 'react-native';

import { AppScreenProps } from '@/Routes';
import { Box, CustomButton, FormPasswordInput, FormTextInput, Icon } from '@/components';
import { RegisterScheema, registerScheema } from '@/schemas';
import { colors } from '@/theme/colors';

export function EditProfileScreen({ navigation }: AppScreenProps<'EditProfileScreen'>) {
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
  });

  const { colorScheme } = useColorScheme();

  const iconColor = colorScheme === 'dark' ? colors.gray.bgLight : colors.gray.bg;

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSaveChanges(data: RegisterScheema) {
    console.log(data);
  }

  return (
    <>
      <Box>
        <Pressable
          className="h-6 w-6 items-center justify-center rounded-xl bg-white p-6 shadow-sm dark:bg-glassDark"
          onPress={handleGoBack}>
          <Icon icon="ArrowLeft" size={22} color={iconColor} />
        </Pressable>

        <View className="flex-1">
          <View className="items-cente mt-7 rounded-xl bg-white p-4 shadow-sm dark:bg-glassDark">
            <Text className="mb-4 text-2xl font-bold text-blue-500">Dados pessoais</Text>

            <View className="gap-4">
              <FormTextInput control={control} name="name" placeholder="Nome" />
              <FormTextInput control={control} name="lastName" placeholder="Sobrenome" />
              <FormTextInput control={control} name="birthDate" placeholder="Data de Nascimento" />
              <FormTextInput control={control} name="email" placeholder="E-mail" />
            </View>
          </View>

          <View className="items-cente mt-7 rounded-xl bg-white p-4 shadow-sm dark:bg-glassDark">
            <Text className="mb-4 text-2xl font-bold text-blue-500">Senha</Text>

            <View className="gap-4">
              <FormPasswordInput control={control} name="password" placeholder="Senha" />
              <FormPasswordInput
                control={control}
                name="confirmPassword"
                placeholder="Confirmar Senha"
              />
            </View>
          </View>
        </View>

        <CustomButton title="Salvar alterações" onPress={handleSubmit(handleSaveChanges)} />
      </Box>
    </>
  );
}
