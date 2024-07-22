import { zodResolver } from '@hookform/resolvers/zod';
import { useColorScheme } from 'nativewind';
import { useForm } from 'react-hook-form';
import { ImageBackground, Text, View } from 'react-native';

import { useResetPassword } from '@/api';
import BlurFormDark from '@/assets/BlurFormDark.png';
import BlurFormLight from '@/assets/BlurFormLight.png';
import { Box, CustomButton, FormTextInput } from '@/components';
import { ForgotPasswordSchema, forgotPasswordSchema } from '@/schemas';

export function ForgotScreen() {
  const { reset, isPending } = useResetPassword();

  const { colorScheme } = useColorScheme();

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),

    defaultValues: {
      email: '',
    },

    mode: 'onChange',
  });

  const BlurFormColor = colorScheme === 'dark' ? BlurFormDark : BlurFormLight;

  function handleForgotPassword({ email }: ForgotPasswordSchema) {
    reset({ email });
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
              <FormTextInput control={control} name="email" placeholder="E-mail" />
            </View>

            <CustomButton
              title="Recuperar senha"
              onPress={handleSubmit(handleForgotPassword)}
              isDisabled={!isValid || !isDirty}
              isLoading={isPending}
            />
          </ImageBackground>
        </View>
      </View>
    </Box>
  );
}
