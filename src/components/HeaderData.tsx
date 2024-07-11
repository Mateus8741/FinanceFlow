import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useColorScheme } from 'nativewind';
import { Text, View } from 'react-native';

import { Icon } from './Icons/CustonIcons';

import { colors } from '@/theme/colors';

interface HeaderDataProps {
  title: string;
  subtitle: string;
}

export function HeaderData({ title, subtitle }: HeaderDataProps) {
  const { colorScheme } = useColorScheme();

  const color = colorScheme === 'dark' ? colors.white : colors.gray.bg;

  const formattedMonth = format(new Date(), 'MMMM', { locale: ptBR });

  const year = new Date().getFullYear();

  return (
    <View className="flex-row items-center justify-between pb-3">
      <View>
        <Text className="text-sm text-gray-500 dark:text-white">{title}</Text>
        <Text className="-mt-2 text-lg font-bold text-gray-500 dark:text-white">{subtitle}</Text>
      </View>

      <View className="flex-row items-center gap-x-2">
        <View className="flex-row items-center">
          <Text className="text-sm capitalize text-gray-500 dark:text-white">
            {formattedMonth}.{' '}
          </Text>
          <Text className="text-lg font-bold text-gray-500 dark:text-white">{year}</Text>
        </View>

        <Icon icon="Calendar" size={24} color={color} />
      </View>
    </View>
  );
}
