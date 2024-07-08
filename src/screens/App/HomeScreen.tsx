import { Box, Header, MoneyCard } from '@/components';

export function HomeScreen() {
  return (
    <Box>
      <Header />

      <MoneyCard cardType="total" value={1000} />
    </Box>
  );
}
