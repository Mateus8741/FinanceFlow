import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

import { AppTabScreenProps } from '@/Routes';
import defaultProfile from '@/assets/defaultProfile.jpeg';
import { Box, Icon, TextInput, ThemeSelect } from '@/components';
import { useThemeChanger } from '@/service';
import { colors } from '@/theme/colors';

export function ProfileScreen({ navigation }: AppTabScreenProps<'ProfileScreen'>) {
  const { handleThemeChange } = useThemeChanger();
  const [selectedTheme, setSelectedTheme] = useState('system');

  const handleThemeSelect = (theme: 'light' | 'dark' | 'system') => {
    setSelectedTheme(theme);
    handleThemeChange(theme);
  };

  function handleEditProfile() {
    navigation.navigate('EditProfileScreen');
  }

  function handleLogOut() {
    console.log('log out');
  }

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
        <View className="mb-4 flex-row items-center justify-between">
          <View className="h-[35px] w-[35px]" />

          <Text className="text-center text-xl font-bold text-blue-500">Perfil</Text>

          <Pressable
            className="items-center justify-center rounded-xl bg-red-200 p-2 dark:bg-red-900"
            onPress={handleLogOut}>
            <Icon icon="LogOut" size={22} color={colors.red[500]} />
          </Pressable>
        </View>

        <View className="items-center justify-center rounded-xl bg-white p-4 shadow-sm dark:bg-glassDark">
          <Image source={hasImage ? { uri } : defaultProfile} className="h-32 w-32 rounded-full" />

          <Text className="mt-3 text-xl font-bold text-blue-500">Alterar foto</Text>
        </View>

        <View className="items-cente mt-7 rounded-xl bg-white p-4 shadow-sm dark:bg-glassDark">
          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-2xl font-bold text-blue-500">Dados pessoais</Text>

            <Pressable
              className="items-center justify-center rounded-xl bg-blue-200 p-2 dark:bg-blue-700"
              onPress={handleEditProfile}>
              <Icon icon="Pencil" size={22} color={colors.blue[500]} />
            </Pressable>
          </View>

          <View className="gap-4">
            <TextInput placeholder="Nome" value="Mateus Tavares" editable={false} />
            <TextInput placeholder="Data" value="01/01/2000" editable={false} />
            <TextInput placeholder="E-mail" value="teste@t.com" editable={false} />
          </View>
        </View>

        {/* <View className="items-cente mt-7 rounded-xl bg-white p-4 shadow-sm dark:bg-glassDark">
          <Text className="mb-4 text-2xl font-bold text-blue-500">Senha</Text>

          <TextInput placeholder="Senha" value="*****************" editable={false} />
        </View> */}

        <View className="items-cente mt-7 rounded-xl bg-white p-4 shadow-sm dark:bg-glassDark">
          <Text className="mb-4 text-2xl font-bold text-blue-500">Escolher tema</Text>

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
