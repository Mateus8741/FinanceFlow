import { BlurView } from 'expo-blur';
import { Text, View } from 'react-native';

import { Box, CustomButton, PasswordInput, TextInput } from '@/components';
import { colors } from '@/theme/colors';

export function LoginScreen() {
  return (
    <Box blur>
      <View className="flex-1 justify-center">
        <BlurView
          intensity={100}
          tint="light"
          className="overflow-hidden rounded-lg border border-white bg-white px-6 py-7"
          style={{ backgroundColor: colors.glassLight }}>
          <Text className="mb-4 text-center text-5xl font-bold">Login</Text>
          <Text className="mb-5 text-center text-lg text-gray-400 dark:bg-orange">
            Entre e controle suas finaças
          </Text>

          <View className="mt-6 gap-y-5">
            <TextInput placeholder="E-mail" />
            <PasswordInput placeholder="Senha" />
          </View>

          <Text className="my-6 text-right font-bold text-blue-500">Esqueceu a senha?</Text>

          <CustomButton title="Entrar" />
        </BlurView>
      </View>
    </Box>
  );
}
