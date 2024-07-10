import { ScrollView, View } from 'react-native';

import { Box, Header, MoneyCard, MyBills, MyCards } from '@/components';

export function HomeScreen() {
  return (
    <Box>
      <Header />

      <ScrollView
        className="-mb-7 flex-1 px-1"
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{ paddingBottom: 20 }}>
        <MoneyCard cardType="total" value={1000} />

        <View className="mt-3 flex-row justify-between">
          <MoneyCard cardType="income" value={1000} />
          <MoneyCard cardType="outcome" value={1000} />
        </View>

        <MyCards />

        <MyBills />
      </ScrollView>
    </Box>
  );
}
