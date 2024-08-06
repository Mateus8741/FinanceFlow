import { useColorScheme } from 'nativewind';
import { Fragment } from 'react';
import { Text, View } from 'react-native';

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

  const currentValuePerBank = useCurrentValuePerBank(cards!, transaction!);

  const { colorScheme } = useColorScheme();

  const colorIcon = colorScheme === 'dark' ? colors.white : colors.black;

  return (
    <View className="mt-5 rounded-xl bg-white px-4 py-5 shadow-sm dark:bg-gray-800">
      <View className="mb-3 flex-row items-center gap-2 border-b-[0.5px] border-gray-300  pb-1.5">
        <Icon icon="CreditCard" size={24} color={colorIcon} />

        <Text className="text-lg text-black dark:text-white">meus cartões</Text>
      </View>

      {/* {isLoading && (
        <View className="flex-1 animate-spin items-center justify-center">
          <Icon icon="LoaderPinwheel" size={32} color={colors.blue[500]} />
        </View>
      )}

      {cards ? (
        cards.map((item) => (
          <Fragment key={item.id}>
            <Card
              currentValue={currentValuePerBank![item.bank_name!] || 0}
              totalValue={item.limit!}
              dueDate={item.validity!}
              accountName={item.bank_name!}
            />

            <View className="mt-2 h-px bg-gray-200 dark:bg-gray-700" />
          </Fragment>
        ))
      ) : (
        <AddCardButton />
      )} */}

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
