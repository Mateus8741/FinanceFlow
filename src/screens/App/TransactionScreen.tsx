import React from 'react';
import { FlatList } from 'react-native';

import { useGetTransactions } from '@/api';
import { Box, HeaderData, TransactionCard } from '@/components';

export function TransactionScreen() {
  const { transaction, isLoading } = useGetTransactions();

  return (
    <Box>
      <HeaderData title="Suas transações" subtitle="mensais" />

      <FlatList
        data={transaction}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TransactionCard
            type={item.transacion_type as 'income' | 'outcome'}
            billingTitle={item.bank_name!}
            name={item.transaction_name!}
            date={item.created_at}
            value={item.value!}
            payment={item.payment_type!}
          />
        )}
        className="-mb-7 flex-1 px-1"
        contentContainerStyle={{ paddingTop: 20 }}
        showsVerticalScrollIndicator={false}
        refreshing={isLoading}
      />
    </Box>
  );
}

const transactions = [
  {
    type: 'income',
    billingTitle: 'Inter',
    name: 'Compra sofá',
    date: '12/09/2021',
    value: 1000,
    payment: 'cartão de crédito',
  },
  {
    type: 'outcome',
    billingTitle: 'Inter',
    name: 'Compra sofá',
    date: '12/09/2021',
    value: 1000,
    payment: 'pix',
  },
  {
    type: 'income',
    billingTitle: 'Bradesco',
    name: 'Compra sofá',
    date: '12/09/2021',
    value: 1000,
    payment: 'cartão de débito',
  },
];
