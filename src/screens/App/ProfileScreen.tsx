import { Image, Text, View } from 'react-native';

import { Box, TextInput } from '@/components';

export function ProfileScreen() {
  return (
    <Box>
      <Text className="mb-4 text-center text-xl font-bold text-black dark:text-white">Perfil</Text>

      <View className="items-center justify-center rounded-xl bg-white p-4 shadow-sm dark:bg-glassDark">
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          className="h-32 w-32 rounded-full"
        />

        <Text className="mt-3 text-xl font-bold text-blue-500">Alterar foto</Text>
      </View>

      <View className="items-cente mt-7 rounded-xl bg-white p-4 shadow-sm dark:bg-glassDark">
        <Text className="mb-4 text-2xl font-bold text-blue-500">Dados pessoais</Text>

        <View className="gap-4">
          <TextInput placeholder="Nome" value="Mateus Tavares" />
          <TextInput placeholder="Data" value="01/01/2000" />
          <TextInput placeholder="E-mail" value="teste@t.com" />
        </View>
      </View>

      <View className="items-cente mt-7 rounded-xl bg-white p-4 shadow-sm dark:bg-glassDark">
        <Text className="mb-4 text-2xl font-bold text-blue-500">Senha</Text>

        <TextInput placeholder="Senha" value="*****************" />
      </View>

      <Text className="mt-6 text-center text-xl font-bold text-blue-500">Editar perfil</Text>
    </Box>
  );
}
