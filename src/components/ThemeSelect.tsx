import { Pressable, PressableProps, Text } from 'react-native';

import { Icon } from './Icons/CustonIcons';

import { colors } from '@/theme/colors';

interface ThemeSelectProps extends PressableProps {
  label: string;
  selectedTheme?: string;
  themeValue?: string;
}

export function ThemeSelect({ label, selectedTheme, themeValue, ...props }: ThemeSelectProps) {
  const isSelected = selectedTheme === themeValue;

  return (
    <Pressable className="flex-row items-center justify-between gap-x-2" hitSlop={10} {...props}>
      <Text className="text-lg font-bold text-black dark:text-white">{label}</Text>

      {isSelected && <Icon icon="Check" size={25} color={colors.blue[500]} />}
    </Pressable>
  );
}
