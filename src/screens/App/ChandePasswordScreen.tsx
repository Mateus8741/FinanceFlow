import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

import { Box, FormPasswordInput } from '@/components';
import { updateScheema } from '@/schemas';

export function ChangePasswordScreen() {
  const { control } = useForm({
    resolver: zodResolver(updateScheema),

    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  return (
    <Box>
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
    </Box>
  );
}
