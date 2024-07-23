import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, Text, View } from 'react-native';

import {
  Box,
  CusstomCheckbox,
  CustomButton,
  FormTextInput,
  TextInput,
  TransitionTypeButton,
} from '@/components';
import { useUserStorage } from '@/contexts';
import { AddBillSchema, addBillSchema } from '@/schemas';
import { colors } from '@/theme/colors';
import { formatCurrencyOnDigiting, parseCurrency } from '@/utils';
import { supabase } from '@/utils/supabase';

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
    formState: { isSubmitting, isDirty, isValid, isSubmitSuccessful },
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
    if (isSubmitSuccessful) {
      reset();
      setSelectedType(null);
      setSelectedPayment(null);
    }

    const { data, error } = await supabase.from('Bills').insert({
      bill_id: user?.user_metadata.id || '',
      bank_name: datas.bank,
      transaction_name: datas.transactionName,
      value: parseCurrency(datas.value),
      transacion_type: selectedType,
      payment_type: selectedPayment?.text,
    });

    if (error) {
      console.log('erro ao inserir dados', error);
    } else {
      console.log('dados inseridos com sucesso', data);
    }
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
