import { useColorScheme } from 'nativewind';
import { Text, View } from 'react-native';

import { Icon } from './Icons/CustonIcons';

import { colors } from '@/theme/colors';

export function Card() {
  const { colorScheme } = useColorScheme();

  const colorIcon = colorScheme === 'dark' ? colors.white : colors.black;

  return (
    <View className="flex-row items-center gap-3">
      <View className="h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
        <Icon icon="Landmark" size={22} color={colorIcon} />
      </View>

      <View className="gap-2">
        <Text className="text-md font-bold text-black dark:text-white">Nubank</Text>
        <Text className="text-md text-black dark:text-white">R$ 1.200,00</Text>
      </View>

      <View className="bg-gray-250 mb-1 h-3 flex-1 self-end rounded-full dark:bg-gray-700">
        <View className="h-3 rounded-full bg-green-500" style={{ width: '25%' }} />
      </View>

      <View className="gap-y-2">
        <View className="flex-row gap-x-1">
          <Text className="text-md text-black dark:text-white">vence</Text>
          <Text className="text-md font-bold text-black dark:text-white">16/05</Text>
        </View>

        <Text className="text-md text-black dark:text-white">R$ 3.200,00</Text>
      </View>
    </View>
  );
}
