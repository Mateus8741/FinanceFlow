import { Box, TextInput } from '@/components';

export function AddBillScreen() {
  return (
    <Box>
      <TextInput placeholder="Insira o nome do banco" />

      <TextInput placeholder="Insira o nome da transação" />

      <TextInput placeholder="Income or Outcome" />

      <TextInput placeholder="pix, débito, crédito ou dinheiro" />

      <TextInput placeholder="Insira o valor" />

      <TextInput placeholder="Insira a data" />
    </Box>
  );
}
