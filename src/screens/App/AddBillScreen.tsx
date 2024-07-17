import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, Text, View } from 'react-native';

import {
  Box,
  CusstomCheckbox,
  CustomButton,
  FormTextInput,
  TransitionTypeButton,
} from '@/components';
import { AddBillSchema, addBillSchema } from '@/schemas';
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
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(addBillSchema),

    defaultValues: {
      bank: '',
      transactionName: '',
      value: '',
    },

    mode: 'onSubmit',
  });

  const [selectedType, setSelectedType] = useState<'income' | 'outcome' | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<{ id: number; text: string } | null>(null);

  function handleAddBill(data: AddBillSchema) {
    console.log(data);
  }

  return (
    <Box>
      <ScrollView
        className="-mb-7 flex-1 px-1"
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 20,
        }}>
        <View className="flex-1 justify-center gap-6">
          <FormTextInput
            control={control}
            name="bank"
            label="Banco"
            placeholder="Insira o nome do banco"
          />

          <FormTextInput
            control={control}
            name="transactionName"
            label="Nome da transação"
            placeholder="Insira o nome da transação"
          />

          <Text className="text-lg font-bold text-black dark:text-white">Tipo de transação</Text>

          <View className="flex-row gap-x-4">
            <TransitionTypeButton
              type="income"
              selected={selectedType === 'income'}
              onPress={() => setSelectedType('income')}
            />
            <TransitionTypeButton
              type="outcome"
              selected={selectedType === 'outcome'}
              onPress={() => setSelectedType('outcome')}
            />
          </View>

          <Text className="text-lg font-bold text-black dark:text-white">Tipo de pagamento</Text>

          <View className="flex-row justify-around">
            {data.map((item) => (
              <View key={item.id} className="items-center justify-center">
                <CusstomCheckbox
                  fillColor={
                    selectedPayment && selectedPayment.id === item.id
                      ? colors.white
                      : colors.blue[300]
                  }
                  isChecked={selectedPayment === item}
                  onPress={() => {
                    setSelectedPayment(item);
                    console.log(item);
                  }}
                />

                <Text className="mt-2 text-base font-bold text-black dark:text-white">
                  {item.text}
                </Text>
              </View>
            ))}
          </View>

          <FormTextInput
            control={control}
            name="value"
            label="Valor"
            placeholder="Insira o valor"
          />
        </View>
      </ScrollView>

      <CustomButton
        title="Adicionar"
        onPress={handleSubmit(handleAddBill)}
        isLoading={isSubmitting}
        isDisabled={!selectedType || !selectedPayment || !isDirty || !isValid}
      />
    </Box>
  );
}
