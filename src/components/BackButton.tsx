import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import { Pressable } from 'react-native';

import { Icon } from './Icons/CustonIcons';

import { colors } from '@/theme/colors';

export function BackButton() {
  const { goBack } = useNavigation();
  const { colorScheme } = useColorScheme();
  const iconColor = colorScheme === 'dark' ? colors.gray.bgLight : colors.gray.bg;

  function handleGoBack() {
    goBack();
  }

  return (
    <Pressable
      className="h-6 w-6 items-center justify-center rounded-xl bg-white p-6 shadow-sm dark:bg-glassDark"
      onPress={handleGoBack}>
      <Icon icon="ArrowLeft" size={22} color={iconColor} />
    </Pressable>
  );
}
