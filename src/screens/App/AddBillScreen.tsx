import { useState } from 'react';
import { Text, View } from 'react-native';

import { Box, CusstomCheckbox, TextInput } from '@/components';
import { colors } from '@/theme/colors';

const data = [
  {
    id: 0,
    text: 'Pix',
  },
  {
    id: 1,
    text: 'Crédito',
  },
  {
    id: 2,
    text: 'Débito',
  },
  {
    id: 3,
    text: 'Dinheiro',
  },
];

export function AddBillScreen() {
  const [selectedTable, setSelectedTable] = useState<any>();

  return (
    <Box>
      <View className="flex-1 justify-center gap-6">
        <TextInput label="Banco" placeholder="Insira o nome do banco" />

        <TextInput label="Transação" placeholder="Insira o nome da transação" />

        <TextInput label="Income/Outcome" placeholder="Income or Outcome" />

        <Text className="text-lg font-bold text-black dark:text-white">Tipo de pagamento</Text>

        <View className="flex-row justify-around">
          {data.map((item) => (
            <View key={item.id} className="items-center justify-center">
              <CusstomCheckbox
                fillColor={
                  selectedTable && selectedTable.id === item.id ? colors.white : colors.blue[300]
                }
                isChecked={selectedTable === item}
                onPress={() => {
                  setSelectedTable(item);
                  console.log(item);
                }}
              />

              <Text className="mt-2 text-base font-bold text-black dark:text-white">
                {item.text}
              </Text>
            </View>
          ))}
        </View>

        <TextInput label="Valor" placeholder="Insira o valor" />

        <TextInput label="Data" placeholder="Insira a data" />
      </View>
    </Box>
  );
}
