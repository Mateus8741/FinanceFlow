import { ScrollView, View } from 'react-native';

import { Box, Header, MoneyCard, MyBills, MyCards } from '@/components';
import { useTransactionCalc } from '@/service';

export function HomeScreen() {
  const { income, total, outcome } = useTransactionCalc();

  return (
    <Box>
      <Header />

      <ScrollView
        className="-mb-7 flex-1 px-1"
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{ paddingBottom: 20 }}>
        <MoneyCard cardType="total" value={total!} />

        <View className="mt-3 flex-row gap-4">
          <MoneyCard cardType="income" value={income!} />
          <MoneyCard cardType="outcome" value={outcome!} />
        </View>

        <MyCards />

        <MyBills />
      </ScrollView>
    </Box>
  );
}
