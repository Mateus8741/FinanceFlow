import { View } from 'react-native';

import { Box, Header, MoneyCard, MyCards } from '@/components';

export function HomeScreen() {
  return (
    <Box>
      <Header />

      <MoneyCard cardType="total" value={1000} />

      <View className="mt-3 flex-row justify-between">
        <MoneyCard cardType="income" value={1000} />
        <MoneyCard cardType="outcome" value={1000} />
      </View>

      <MyCards />
    </Box>
  );
}
