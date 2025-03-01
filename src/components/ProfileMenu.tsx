import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { Icon } from './Icons/CustonIcons';
import { ThemeSelect } from './ThemeSelect';

import { useThemeChanger } from '@/service';
import { colors } from '@/theme/colors';
import { dataMenuProfile } from '@/utils';

export function ProfileMenu() {
  const { navigate } = useNavigation<any>();

  const { handleThemeChange } = useThemeChanger();
  const [selectedTheme, setSelectedTheme] = useState('system');

  const handleThemeSelect = (theme: 'light' | 'dark' | 'system') => {
    setSelectedTheme(theme);
    handleThemeChange(theme);
  };

  function handleLogOut() {
    console.log('logout');
  }

  function handleNavigate(route: string) {
    switch (route) {
      case 'Editar perfil':
        navigate('EditProfileScreen');
        break;

      case 'Fale conosco':
        navigate('ContactScreen');
        break;

      case 'Mudar senha':
        navigate('ChangePasswordScreen');
        break;
    }
  }

  return (
    <View className="items-cente mt-7 rounded-xl bg-white px-4 pb-6 shadow-sm dark:bg-glassDark">
      {dataMenuProfile.map((item, i) => (
        <View key={item.group}>
          <Text className="mt-6 text-start text-3xl font-bold text-blue-500">{item.group}</Text>

          <View className="gap-3">
            {item.items.map((subitem, j) => (
              <Pressable
                key={subitem.name}
                className="flex-row items-center justify-between"
                onPress={() => handleNavigate(subitem.name)}>
                <Text className="text-lg font-semibold text-black dark:text-white">
                  {subitem.name}
                </Text>

                <View className="items-center justify-center rounded-xl bg-blue-200 p-2 dark:bg-blue-700">
                  <Icon icon={subitem.icon as any} size={22} color={colors.blue[500]} />
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      ))}

      <Text className="my-6 text-start text-3xl font-bold text-blue-500">Tema</Text>

      <View className="gap-y-4 ">
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

      <View className="my-6 border-b border-gray-100 dark:border-gray-500" />

      <Pressable className="flex-row items-center justify-between" onPress={handleLogOut}>
        <Text className="text-lg font-semibold text-black dark:text-white">Sair</Text>

        <View className="items-center justify-center rounded-xl bg-red-200 p-2 dark:bg-red-900">
          <Icon icon="LogOut" size={25} color={colors.red[500]} />
        </View>
      </Pressable>
    </View>
  );
}
