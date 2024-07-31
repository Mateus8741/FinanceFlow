import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Alert, Text, View } from 'react-native';

import { AppScreenProps } from '@/Routes';
import { useUpdateProfile } from '@/api';
import { BackButton, Box, CustomButton, FormPasswordInput } from '@/components';
import { UpdateScheema, updateScheema } from '@/schemas';

export function ChangePasswordScreen({ navigation }: AppScreenProps<'ChangePasswordScreen'>) {
  const { update, isPending } = useUpdateProfile();

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm({
    resolver: zodResolver(updateScheema),

    defaultValues: {
      password: '',
      confirmPassword: '',
    },

    mode: 'onChange',
  });

  function handleUpdatePassword({ password, confirmPassword }: UpdateScheema) {
    if (password !== confirmPassword) {
      return Alert.alert('As senhas não coincidem');
    }

    update({ password });
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
        isLoading={isPending}
      />
    </Box>
  );
}
