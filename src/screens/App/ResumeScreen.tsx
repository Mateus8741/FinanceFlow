import { FlatList } from 'react-native';

import { Box, HeaderData, ResumeCard } from '@/components';
import { usePaymentTotals } from '@/service';

export function ResumeScreen() {
  const { cash, credit, debit, pix } = usePaymentTotals();

  return (
    <Box>
      <HeaderData title="Relatório" subtitle="detalhado" />

      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <ResumeCard type="Pix" value={1320} />}
      />

      <ResumeCard type="Pix" value={pix} />
      <ResumeCard type="Crédito" value={credit} />
      <ResumeCard type="Débito" value={debit} />
      <ResumeCard type="Dinheiro" value={cash} />
    </Box>
  );
}
