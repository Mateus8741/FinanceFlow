import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { FlatList, RefreshControl } from 'react-native';

import { useGetTransactions } from '@/api';
import { Box, HeaderData, TransactionCard } from '@/components';

export function TransactionScreen() {
  const { transaction, isLoading, refetch } = useGetTransactions();

  useFocusEffect(() => {
    refetch();
  });

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
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}
      />
    </Box>
  );
}
