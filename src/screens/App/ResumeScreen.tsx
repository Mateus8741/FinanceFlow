import { useState } from 'react';
import { Text, View } from 'react-native';

import { Box, Chart, HeaderData, ResumeCard, SelectResume } from '@/components';
import { usePaymentTotals } from '@/service';
import { colors } from '@/theme/colors';

export function ResumeScreen() {
  const { income, outcome } = usePaymentTotals();

  const [listType, setListType] = useState<'income' | 'outcome'>('income');

  const incoming = [
    { x: 'Crédito', y: income.credit, color: colors.yellow },
    { x: 'Débito', y: income.debit, color: colors.red[350] },
    { x: 'Dinheiro', y: income.cash, color: colors.green[500] },
    // { x: 'Pix', y: income.pix, color: colors.blue[500] },
  ];

  const outcoming = [
    { x: 'Crédito', y: outcome.credit, color: colors.yellow },
    // { x: 'Débito', y: outcome.debit, color: colors.red[350] },
    { x: 'Dinheiro', y: outcome.cash, color: colors.green[500] },
    // { x: 'Pix', y: outcome.pix, color: colors.blue[500] },
  ];

  return (
    <Box>
      <HeaderData title="Relatório" subtitle="detalhado" />

      <SelectResume setListType={setListType} />

      {listType === 'income' ? (
        <>
          <Chart data={incoming} />

          <View className="flex-row gap-x-4">
            <View className="flex-1">
              <Text className="mb-2 text-lg font-bold text-green-500">Entrada</Text>

              <ResumeCard type="Pix" value={income.pix} isOutcome={false} />
              <ResumeCard type="Crédito" value={income.credit} isOutcome={false} />
              <ResumeCard type="Débito" value={income.debit} isOutcome={false} />
              <ResumeCard type="Dinheiro" value={income.cash} isOutcome={false} />
            </View>
          </View>
        </>
      ) : (
        <>
          <Chart data={outcoming} />

          <View className="flex-1">
            <Text className="mb-2 text-lg font-bold text-red-500">Saída</Text>

            <ResumeCard type="Pix" value={outcome.pix} />
            <ResumeCard type="Crédito" value={outcome.credit} />
            <ResumeCard type="Débito" value={outcome.debit} />
            <ResumeCard type="Dinheiro" value={outcome.cash} />
          </View>
        </>
      )}
    </Box>
  );
}
