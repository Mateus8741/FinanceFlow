import { useColorScheme } from 'nativewind';
import { Text, View } from 'react-native';

import { BillCard } from './BillCard';
import { Icon } from './Icons/CustonIcons';
import { Loading } from './Loading';

import { colors } from '@/theme/colors';
import { useCurrentValuePerBank } from '@/utils';

export function MyBills() {
  const { colorScheme } = useColorScheme();
  const cards = [];
  const isLoading = false;
  const transaction = [];

  const currentValuePerBank = useCurrentValuePerBank(cards, transaction);

  const colorIcon = colorScheme === 'dark' ? colors.white : colors.black;

  return (
    <View className="mt-5 rounded-xl bg-white px-4 py-5 shadow-sm dark:bg-gray-800">
      <View className="mb-3 flex-row items-center gap-2 border-b-[0.5px] border-gray-300  pb-1.5">
        <Icon icon="Receipt" size={24} color={colorIcon} />

        <Text className="flex-1 text-lg text-black dark:text-white">minhas faturas</Text>

        {cards ? (
          <Text className="text-sm text-gray-400 dark:text-gray-300">{cards.length} faturas</Text>
        ) : (
          <Text className="text-sm text-gray-400 dark:text-gray-300">0 faturas</Text>
        )}
      </View>

      {isLoading ? (
        <Loading />
      ) : (
        cards?.map((item) => (
          <BillCard
            key={item.id}
            accountName={item.bank_name!}
            totalValue={item.limit!}
            currentValue={currentValuePerBank[item.bank_name!] || 0}
            dueDate={item.validity!}
          />
        ))
      )}
    </View>
  );
}
