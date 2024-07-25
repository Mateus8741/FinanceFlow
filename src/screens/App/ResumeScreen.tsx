import { Text, View } from 'react-native';
import { VictoryPie } from 'victory-native';

import { Box, HeaderData, ResumeCard } from '@/components';
import { usePaymentTotals } from '@/service';
import { colors } from '@/theme/colors';

export function ResumeScreen() {
  const { income, outcome } = usePaymentTotals();

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

      <View className="flex-row justify-between">
        <VictoryPie
          height={200}
          width={170}
          data={incoming}
          colorScale={incoming.map((d) => d.color)}
          innerRadius={30}
          radius={80}
          labelRadius={({ innerRadius }) => Number(innerRadius) + 10}
          labels={({ datum }) => `${(datum.y / 100).toFixed(0)}%`}
          style={{
            labels: {
              fill: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            },
          }}
        />

        <VictoryPie
          height={200}
          width={170}
          data={outcoming}
          colorScale={outcoming.map((d) => d.color)}
          innerRadius={30}
          radius={80}
          labelRadius={({ innerRadius }) => Number(innerRadius) + 10}
          labels={({ datum }) => `${(datum.y / 100).toFixed(0)}%`}
          style={{
            labels: {
              fill: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            },
          }}
        />
      </View>

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
