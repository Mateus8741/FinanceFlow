import { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';

import { Box, HeaderData, ResumeCard } from '@/components';
import { usePaymentTotals } from '@/service';

export function ResumeScreen() {
  const { income, outcome, refetch } = usePaymentTotals();

  useLayoutEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <Box>
      <HeaderData title="Relatório" subtitle="detalhado" />

      <View className="mt-2">
        <Text className="mb-2 text-lg font-bold text-green-800">Resumo de entrada</Text>

        <ResumeCard type="Pix" value={income.pix} />
        <ResumeCard type="Crédito" value={income.credit} />
        <ResumeCard type="Débito" value={income.debit} />
        <ResumeCard type="Dinheiro" value={income.cash} />
      </View>

      <View className="mt-2">
        <Text className="mb-2 text-lg font-bold text-red-500">Resumo de saída</Text>

        <ResumeCard type="Pix" value={outcome.pix} />
        <ResumeCard type="Crédito" value={outcome.credit} />
        <ResumeCard type="Débito" value={outcome.debit} />
        <ResumeCard type="Dinheiro" value={outcome.cash} />
      </View>
    </Box>
  );
}
