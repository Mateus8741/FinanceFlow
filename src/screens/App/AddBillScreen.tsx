import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, Text, View } from 'react-native';

import {
  Box,
  CusstomCheckbox,
  CustomButton,
  FormPickerSelect,
  FormTextInput,
  TextInput,
  TransitionTypeButton,
} from '@/components';
import { useUserStorage } from '@/contexts';
import { AddBillSchema, addBillSchema } from '@/schemas';
import { colors } from '@/theme/colors';
import { formatCurrencyOnDigiting, listBanks } from '@/utils';

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
  const { user } = useUserStorage();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(addBillSchema),

    defaultValues: {
      bank: '',
      transactionName: '',
      value: '',
    },

    mode: 'onChange',
  });

  const [selectedType, setSelectedType] = useState<'income' | 'outcome' | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<{ id: number; text: string } | null>(null);

  async function handleAddBill(datas: AddBillSchema) {
    reset();
    setSelectedType(null);
    setSelectedPayment(null);
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
          <FormPickerSelect
            control={control}
            name="bank"
            items={listBanks}
            label="Banco"
            placeholder="Selecione o banco"
            onValueChange={() => {}}
          />

          <FormTextInput
            control={control}
            name="transactionName"
            label="Nome da transação"
            placeholder="Insira o nome da transação"
          />

          <Controller
            control={control}
            name="value"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={`R$ ${value}`}
                onBlur={onBlur}
                keyboardType="numeric"
                onChangeText={(value) => onChange(formatCurrencyOnDigiting(value))}
                label="Valor"
                placeholder="Insira o valor"
              />
            )}
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
                  onPress={() => setSelectedPayment(item)}
                />

                <Text className="mt-2 text-base font-bold text-black dark:text-white">
                  {item.text}
                </Text>
              </View>
            ))}
          </View>
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
