import React from 'react';
import { FlatList } from 'react-native';

import { Box, HeaderData, TransactionCard } from '@/components';

export function TransactionScreen() {
  return (
    <Box>
      <HeaderData title="Suas transações" subtitle="mensais" />

      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TransactionCard
            type={item.type as 'income' | 'outcome'}
            billingTitle={item.billingTitle}
            name={item.name}
            date={item.date}
            value={item.value}
            payment={item.payment}
          />
        )}
        className="-mb-7 flex-1 px-1"
        contentContainerStyle={{ paddingTop: 20 }}
        showsVerticalScrollIndicator={false}
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
