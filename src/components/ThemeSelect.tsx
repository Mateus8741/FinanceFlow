import { Pressable, PressableProps, Text, View } from 'react-native';

import { Icon } from './Icons/CustonIcons';

import { colors } from '@/theme/colors';

interface ThemeSelectProps extends PressableProps {
  label: string;
  selectedTheme?: string;
  themeValue?: string;
}

export function ThemeSelect({ label, selectedTheme, themeValue, ...props }: ThemeSelectProps) {
  const isSelected = selectedTheme === themeValue;

  const iconBySelectedTheme: { [key: string]: string } = {
    light: 'Sun',
    dark: 'Moon',
    system: 'Settings',
  };

  const selectedIcon = themeValue ? iconBySelectedTheme[themeValue] : '';

  return (
    <Pressable className="flex-row items-center justify-between gap-x-2" hitSlop={10} {...props}>
      <Text className="text-lg font-bold text-black dark:text-white">{label}</Text>

      <View className="flex-row items-center gap-x-2">
        {isSelected && <Icon icon="Check" size={25} color={colors.blue[500]} />}

        <View className="items-center justify-center rounded-xl bg-blue-200 p-2 dark:bg-blue-700">
          <Icon icon={selectedIcon as any} size={25} color={colors.blue[500]} />
        </View>
      </View>
    </Pressable>
  );
}
