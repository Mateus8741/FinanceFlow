import { useState } from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { Box, Chart, HeaderData, ResumeCard } from '@/components';
import { usePaymentTotals } from '@/service';
import { colors } from '@/theme/colors';

const { width } = Dimensions.get('window');
const paddingHorizontal = 16;
const indicatorWidth = width / 2 - 2 * paddingHorizontal;

export function ResumeScreen() {
  const { income, outcome } = usePaymentTotals();

  const [listType, setListType] = useState<'income' | 'outcome'>('income');

  const indicatorPosition = useSharedValue(0);

  const handlePress = (type: 'income' | 'outcome') => {
    setListType(type);
    indicatorPosition.value = withTiming(type === 'income' ? 0 : width / 2, { duration: 300 });
  };

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorPosition.value }],
  }));

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

      <View
        className="relative flex-row"
        style={{
          position: 'relative',
        }}>
        <Pressable
          onPress={() => handlePress('income')}
          className="flex-1 items-center justify-center py-2">
          <Text>Entrada</Text>
        </Pressable>

        <Pressable
          onPress={() => handlePress('outcome')}
          className="flex-1 items-center justify-center py-2">
          <Text>Saída</Text>
        </Pressable>

        <Animated.View
          style={[
            {
              position: 'absolute',
              bottom: -2,
              width: indicatorWidth,
              height: 2,
              backgroundColor: colors.blue[500],
            },
            indicatorStyle,
          ]}
        />
      </View>

      <Chart data={incoming} />
      {/* <Chart data={outcoming} /> */}

      <View className="flex-row gap-x-4">
        <View className="flex-1">
          <Text className="mb-2 text-lg font-bold text-green-500">Entrada</Text>

          <ResumeCard type="Pix" value={income.pix} isOutcome={false} />
          <ResumeCard type="Crédito" value={income.credit} isOutcome={false} />
          <ResumeCard type="Débito" value={income.debit} isOutcome={false} />
          <ResumeCard type="Dinheiro" value={income.cash} isOutcome={false} />
        </View>

        {/* <View className="flex-1">
          <Text className="mb-2 text-lg font-bold text-red-500">Saída</Text>

          <ResumeCard type="Pix" value={outcome.pix} />
          <ResumeCard type="Crédito" value={outcome.credit} />
          <ResumeCard type="Débito" value={outcome.debit} />
          <ResumeCard type="Dinheiro" value={outcome.cash} />
        </View> */}
      </View>
    </Box>
  );
}
