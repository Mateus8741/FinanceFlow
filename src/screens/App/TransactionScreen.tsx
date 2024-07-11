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
            type={item.type as any}
            data={item}
            key={item.billingTitle + item.name + item.date + item.value + item.payment}
          />
        )}
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
