import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';

import { AppScreenProps } from '@/Routes';
import { useAddCreditCard, useGetCards } from '@/api';
import { BackButton, Box, CustomButton, FormPickerSelect, TextInput } from '@/components';
import { useUserStorage } from '@/contexts';
import { addCardSchema, AddCardSchema } from '@/schemas';
import { formatBirthDate, formatCurrencyOnDigiting, listBanks, parseCurrency } from '@/utils';

export function AddCardScreen({ navigation }: AppScreenProps<'AddCardScreen'>) {
  const { user } = useUserStorage();
  const { addCard, isPending } = useAddCreditCard();
  const { refetch } = useGetCards();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm<AddCardSchema>({
    resolver: zodResolver(addCardSchema),

    defaultValues: {
      bank_name: '',
      validity: '',
      limit: '',
    },

    mode: 'onSubmit',
  });

  function handleAddCard(data: AddCardSchema) {
    addCard({
      card_id: user?.user_metadata.id || '',
      bank_name: data.bank_name,
      validity: data.validity,
      limit: parseCurrency(data.limit),
    });

    reset();

    refetch();

    navigation.goBack();
  }

  return (
    <Box>
      <BackButton />

      <ScrollView
        className="mt-7 flex-1"
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 20,
        }}>
        <View className="justify-center gap-6">
          <FormPickerSelect
            control={control}
            name="bank_name"
            items={listBanks}
            label="Banco"
            placeholder="Selecione o banco"
            onValueChange={() => {}}
          />

          <Controller
            control={control}
            name="validity"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={value}
                onBlur={onBlur}
                maxLength={5}
                keyboardType="numeric"
                onChangeText={(value) => onChange(formatBirthDate(value))}
                label="Data de validade"
                placeholder="Insira a data de validade"
              />
            )}
          />

          <Controller
            control={control}
            name="limit"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={`R$ ${value}`}
                onBlur={onBlur}
                keyboardType="numeric"
                onChangeText={(value) => onChange(formatCurrencyOnDigiting(value))}
                label="Limite do seu cartão"
                placeholder="Insira o limite do seu cartão"
              />
            )}
          />
        </View>
      </ScrollView>

      <CustomButton
        title="Adicionar cartão"
        onPress={handleSubmit(handleAddCard)}
        isDisabled={!isDirty || !isValid}
        isLoading={isPending}
      />
    </Box>
  );
}
