import { Text, View } from 'react-native';

import { Box, HeaderData, ResumeCard } from '@/components';
import { usePaymentTotals } from '@/service';

export function ResumeScreen() {
  const { income, outcome } = usePaymentTotals();

  return (
    <Box>
      <HeaderData title="Relatório" subtitle="detalhado" />

      <View className="flex-row gap-x-4">
        <View className="flex-1">
          <Text className="mb-2 text-lg font-bold text-green-500">Entrada</Text>

          <ResumeCard type="Pix" value={income.pix} isOutcome={false} />
          <ResumeCard type="Crédito" value={income.credit} isOutcome={false} />
          <ResumeCard type="Débito" value={income.debit} isOutcome={false} />
          <ResumeCard type="Dinheiro" value={income.cash} isOutcome={false} />
        </View>

        <View className="flex-1">
          <Text className="mb-2 text-lg font-bold text-red-500">Saída</Text>

          <ResumeCard type="Pix" value={outcome.pix} />
          <ResumeCard type="Crédito" value={outcome.credit} />
          <ResumeCard type="Débito" value={outcome.debit} />
          <ResumeCard type="Dinheiro" value={outcome.cash} />
        </View>
      </View>
    </Box>
  );
}
