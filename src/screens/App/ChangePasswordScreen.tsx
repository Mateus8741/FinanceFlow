import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

import { AppScreenProps } from '@/Routes';
import { BackButton, Box, CustomButton, FormPasswordInput } from '@/components';
import { ChangePasswordSchema, updateScheema } from '@/schemas';

export function ChangePasswordScreen({ navigation }: AppScreenProps<'ChangePasswordScreen'>) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm({
    resolver: zodResolver(updateScheema),

    defaultValues: {
      password: '',
      confirmPassword: '',
    },

    mode: 'onChange',
  });

  function handleUpdatePassword({ password, confirmPassword }: ChangePasswordSchema) {
    if (password === confirmPassword) {
      console.log(password);
      reset();
      navigation.goBack();
    }
  }

  return (
    <Box>
      <BackButton />

      <View className="flex-1">
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

      <CustomButton
        title="Mudar senha"
        onPress={handleSubmit(handleUpdatePassword)}
        isDisabled={!isDirty || !isValid}
      />
    </Box>
  );
}
