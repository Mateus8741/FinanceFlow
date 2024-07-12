import { FlatList } from 'react-native';

import { Box, HeaderData, ResumeCard } from '@/components';

export function ResumeScreen() {
  return (
    <Box>
      <HeaderData title="Relatório" subtitle="detalhado" />

      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <ResumeCard title="Saldo" value={1320} />}
      />
    </Box>
  );
}
