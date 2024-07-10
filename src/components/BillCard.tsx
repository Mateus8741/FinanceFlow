import { useColorScheme } from 'nativewind';
import { Text, View } from 'react-native';

import { Icon } from './Icons/CustonIcons';

import { colors } from '@/theme/colors';

export function BillCard() {
  const { colorScheme } = useColorScheme();

  const colorIcon = colorScheme === 'dark' ? colors.white : colors.black;

  return (
    <View className="mt-2.5 rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
      <View className="flex-row items-center gap-2">
        <Icon icon="Receipt" size={24} color={colorIcon} />

        <Text className="text-lg text-black dark:text-white">Fatura atual</Text>
      </View>

      <View className="mt-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg text-black dark:text-white">R$ 500,00</Text>
          <Text className="text-sm text-gray-400 dark:text-gray-600">Vencimento 10/10</Text>
        </View>

        <View className="mt-3 h-px bg-gray-200 dark:bg-gray-700" />

        <View className="mt-3 flex-row items-center justify-between">
          <Text className="text-sm text-gray-400 dark:text-gray-600">Limite total</Text>
          <Text className="text-sm text-gray-400 dark:text-gray-600">R$ 1000,00</Text>
        </View>
      </View>
    </View>
  );
}
