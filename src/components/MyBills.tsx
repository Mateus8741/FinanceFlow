import { useColorScheme } from 'nativewind';
import { Text, View } from 'react-native';

import { BillCard } from './BillCard';
import { Icon } from './Icons/CustonIcons';

import { colors } from '@/theme/colors';

export function MyBills() {
  const { colorScheme } = useColorScheme();

  const colorIcon = colorScheme === 'dark' ? colors.white : colors.black;

  return (
    <View className="mt-5 rounded-xl bg-white px-4 py-5 shadow-sm dark:bg-gray-800">
      <View className="mb-3 flex-row items-center gap-2 border-b-[0.5px] border-gray-300  pb-1.5">
        <Icon icon="Receipt" size={24} color={colorIcon} />

        <Text className="text-lg text-black dark:text-white">minhas faturas</Text>
      </View>

      <BillCard />
    </View>
  );
}
