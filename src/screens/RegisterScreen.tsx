import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import { ImageBackground, Pressable, Text, View } from 'react-native';

import BlurFormDark from '@/assets/BlurFormDark.png';
import BlurFormLight from '@/assets/BlurFormLight.png';
import { Box, CustomButton, PasswordInput, TextInput } from '@/components';
import { OrView } from '@/components/OrView';
import { colors } from '@/theme/colors';

export function RegisterScreen() {
  const { colorScheme } = useColorScheme();

  const BlurFormColor = colorScheme === 'dark' ? BlurFormDark : BlurFormLight;

  return (
    <Box blur>
      <View className="flex-1 justify-center">
        <View className="overflow-hidden rounded-lg">
          <ImageBackground
            source={BlurFormColor}
            resizeMode="cover"
            className="rounded-full px-6 py-7">
            <Text className="mb-4 text-center text-5xl font-bold dark:text-white">Registrar</Text>
            <Text className="dark:text-gray-200 text-center text-lg text-gray-400">
              Crie uma conta e continue
            </Text>

            <View className="my-6 gap-y-5">
              <TextInput placeholder="Nome" />
              <TextInput placeholder="Sobrenome" />
              <TextInput placeholder="E-mail" />
              <TextInput
                placeholder="Data de nascimento"
                rightComponent={
                  <MaterialCommunityIcons
                    name="calendar-account-outline"
                    size={16}
                    color={colors.gray[400]}
                    opacity={0.5}
                  />
                }
              />
              <PasswordInput placeholder="Senha" />
            </View>

            <CustomButton title="Entrar" />

            <OrView />

            <View className="flex-row items-center justify-center gap-x-2">
              <Text className="dark:text-gray-200 text-center text-gray-400">
                Já tem uma conta?
              </Text>
              <Pressable>
                <Text className="text-center font-bold text-blue-500">Fazer login</Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>
      </View>
    </Box>
  );
}
