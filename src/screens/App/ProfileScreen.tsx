import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import defaultProfile from '@/assets/defaultProfile.jpeg';
import { Box, TextInput, ThemeSelect } from '@/components';
import { useThemeChanger } from '@/service';

export function ProfileScreen() {
  const { handleThemeChange } = useThemeChanger();
  const [selectedTheme, setSelectedTheme] = useState('system');

  const handleThemeSelect = (theme: 'light' | 'dark' | 'system') => {
    setSelectedTheme(theme);
    handleThemeChange(theme);
  };

  const hasImage = true;

  const uri = 'https://avatars.githubusercontent.com/u/39889384?v=4';

  return (
    <Box>
      <ScrollView
        className="-mb-7 flex-1 px-1"
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 20,
        }}>
        <Text className="mb-4 text-center text-xl font-bold text-black dark:text-white">
          Perfil
        </Text>

        <View className="items-center justify-center rounded-xl bg-white p-4 shadow-sm dark:bg-glassDark">
          <Image source={hasImage ? { uri } : defaultProfile} className="h-32 w-32 rounded-full" />

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

        <View className="items-cente mt-7 rounded-xl bg-white p-4 shadow-sm dark:bg-glassDark">
          <Text className="mb-4 text-2xl font-bold text-blue-500">Dados pessoais</Text>

          <View className="gap-y-4">
            <ThemeSelect
              label="Cores do sistema"
              selectedTheme={selectedTheme}
              themeValue="system"
              onPress={() => handleThemeSelect('system')}
            />
            <ThemeSelect
              label="Modo claro"
              selectedTheme={selectedTheme}
              themeValue="light"
              onPress={() => handleThemeSelect('light')}
            />
            <ThemeSelect
              label="Modo escuro"
              selectedTheme={selectedTheme}
              themeValue="dark"
              onPress={() => handleThemeSelect('dark')}
            />
          </View>
        </View>

        <Text className="mt-6 text-center text-xl font-bold text-blue-500">Editar perfil</Text>
      </ScrollView>
    </Box>
  );
}
