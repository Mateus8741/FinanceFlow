import { useColorScheme } from 'nativewind';
import { Pressable, Text, View } from 'react-native';

import { AppScreenProps } from '@/Routes';
import { Box, CustomButton, Icon, TextInput } from '@/components';
import { colors } from '@/theme/colors';

export function EditProfileScreen({ navigation }: AppScreenProps<'EditProfileScreen'>) {
  const { colorScheme } = useColorScheme();

  const iconColor = colorScheme === 'dark' ? colors.gray.bgLight : colors.gray.bg;

  function handleGoBack() {
    navigation.goBack();
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
              <TextInput placeholder="Nome" />
              <TextInput placeholder="Sobrenome" />
              <TextInput placeholder="E-mail" />
            </View>
          </View>

          <View className="items-cente mt-7 rounded-xl bg-white p-4 shadow-sm dark:bg-glassDark">
            <Text className="mb-4 text-2xl font-bold text-blue-500">Senha</Text>

            <View className="gap-4">
              <TextInput placeholder="Senha" />
              <TextInput placeholder="Confirmar Senha" />
            </View>
          </View>
        </View>

        <CustomButton title="Salvar alterações" />
      </Box>
    </>
  );
}
