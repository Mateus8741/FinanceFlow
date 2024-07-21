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

  function handleNavigate(route: string) {
    switch (route) {
      case 'Editar perfil':
        navigate('EditProfileScreen');
        break;

      case 'Fale conosco':
        navigate('ContactScreen');
        break;
    }
  }

  return (
    <View className="items-cente mt-7 rounded-xl bg-white p-4 shadow-sm dark:bg-glassDark">
      {dataMenuProfile.map((item, i) => (
        <View key={item.group}>
          <Text className="text-center text-2xl font-bold text-blue-500">{item.group}</Text>

          <View className="mt-4 gap-3">
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

      <Text className="my-4 text-center text-2xl font-bold text-blue-500">Tema</Text>

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
  );
}
