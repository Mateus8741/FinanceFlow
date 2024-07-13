import { View } from 'react-native';

import { Box, TextInput } from '@/components';

export function AddBillScreen() {
  return (
    <Box>
      <View className="flex-1 justify-center gap-6">
        <TextInput label="Banco" placeholder="Insira o nome do banco" />

        <TextInput label="Transação" placeholder="Insira o nome da transação" />

        <TextInput label="Income/Outcome" placeholder="Income or Outcome" />

        <TextInput label="Tipo de pagamento" placeholder="pix, débito, crédito ou dinheiro" />

        <TextInput label="Valor" placeholder="Insira o valor" />

        <TextInput label="Data" placeholder="Insira a data" />
      </View>
    </Box>
  );
}
