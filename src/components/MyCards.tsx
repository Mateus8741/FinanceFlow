import { useColorScheme } from 'nativewind';
import { FlatList, Text, View } from 'react-native';

import { Card } from './Card';
import { Icon } from './Icons/CustonIcons';

import { colors } from '@/theme/colors';

export function MyCards() {
  const { colorScheme } = useColorScheme();

  const colorIcon = colorScheme === 'dark' ? colors.white : colors.black;

  return (
    <View className="mt-5 rounded-xl bg-white px-4 py-5 shadow-sm dark:bg-gray-800">
      <View className="mb-3 flex-row items-center gap-2 border-b-[0.5px] border-gray-300  pb-1.5">
        <Icon icon="CreditCard" size={24} color={colorIcon} />

        <Text className="text-lg text-black dark:text-white">meus cartões</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            currentValue={item.currentValue}
            totalValue={item.totalValue}
            dueDate={item.dueDate}
            accountName={item.accountName}
          />
        )}
        ItemSeparatorComponent={() => <View className="mt-2 h-px bg-gray-200 dark:bg-gray-700" />}
      />
    </View>
  );
}

const data = [
  {
    id: 1,
    currentValue: 500,
    totalValue: 1000,
    dueDate: '10/10',
    accountName: 'Cartão',
  },
  {
    id: 2,
    currentValue: 600,
    totalValue: 1000,
    dueDate: '10/10',
    accountName: 'Cartão',
  },
  {
    id: 3,
    currentValue: 1000,
    totalValue: 1000,
    dueDate: '10/10',
    accountName: 'Cartão',
  },
];
