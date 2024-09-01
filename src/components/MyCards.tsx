import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import { Fragment } from 'react';
import { Pressable, Text, View } from 'react-native';

import { AddCardButton } from './AddCardButton';
import { Card } from './Card';
import { Icon } from './Icons/CustonIcons';
import { Loading } from './Loading';

import { useGetCards, useGetTransactions } from '@/api';
import { colors } from '@/theme/colors';
import { useCurrentValuePerBank } from '@/utils';

export function MyCards() {
  const { cards, isLoading } = useGetCards();
  const { transaction } = useGetTransactions();
  const { navigate } = useNavigation<any>();

  const currentValuePerBank = useCurrentValuePerBank(cards!, transaction!);

  const { colorScheme } = useColorScheme();

  const colorIcon = colorScheme === 'dark' ? colors.white : colors.black;

  function addCard() {
    navigate('AddCardScreen');
  }

  return (
    <View className="mt-5 rounded-xl bg-white px-4 py-5 shadow-sm dark:bg-gray-800">
      <View className="mb-3 flex-row items-center gap-2 border-b-[0.5px] border-gray-300  pb-1.5">
        <View className="flex-1 flex-row gap-x-3">
          <Icon icon="CreditCard" size={24} color={colorIcon} />

          <Text className="text-lg text-black dark:text-white">meus cartões</Text>
        </View>

        {cards ? (
          <Text className="text-sm text-gray-400 dark:text-gray-300">{cards.length} cartões</Text>
        ) : (
          <Text className="text-sm text-gray-400 dark:text-gray-300">0 cartões</Text>
        )}

        {cards?.length! > 0 && (
          <Pressable className="rounded-full bg-blue-500 p-1" onPress={addCard}>
            <Icon icon="Plus" size={20} color={colors.white} />
          </Pressable>
        )}
      </View>

      {isLoading ? (
        <Loading />
      ) : cards ? (
        cards.map((item) => (
          <Fragment key={item.id}>
            <Card
              currentValue={currentValuePerBank[item.bank_name!] || 0}
              totalValue={item.limit!}
              dueDate={item.validity!}
              accountName={item.bank_name!}
            />

            <View className="mt-2 h-px bg-gray-200 dark:bg-gray-700" />
          </Fragment>
        ))
      ) : (
        <AddCardButton />
      )}
    </View>
  );
}
