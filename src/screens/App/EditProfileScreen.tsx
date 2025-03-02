import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

import { AppScreenProps } from '@/Routes';
import { BackButton, Box, CustomButton, FormTextInput } from '@/components';
import { useUserStorage } from '@/contexts';
import { UpdateScheema, updateScheema } from '@/schemas';

export function EditProfileScreen({ navigation }: AppScreenProps<'EditProfileScreen'>) {
  const { user } = useUserStorage();

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm({
    resolver: zodResolver(updateScheema),

    defaultValues: {
      first_name: user?.user_metadata.first_name,
      last_name: user?.user_metadata.last_name,
      email: user?.user_metadata.email,
      birth_date: user?.user_metadata.birth_date,
    },

    mode: 'onChange',
  });

  function handleSaveChanges(data: UpdateScheema) {
    console.log(data);
  }

  return (
    <Box>
      <BackButton />

      <View className="flex-1">
        <View className="items-cente mt-7 rounded-xl bg-white p-4 shadow-sm dark:bg-glassDark">
          <Text className="mb-4 text-2xl font-bold text-blue-500">Dados pessoais</Text>

          <View className="gap-4">
            <FormTextInput control={control} name="first_name" placeholder="Nome" />
            <FormTextInput control={control} name="last_name" placeholder="Sobrenome" />
            <FormTextInput control={control} name="birth_date" placeholder="Data de Nascimento" />
            <FormTextInput control={control} name="email" placeholder="E-mail" />
          </View>
        </View>
      </View>

      <CustomButton
        title="Salvar alterações"
        onPress={handleSubmit(handleSaveChanges)}
        isDisabled={!isDirty || !isValid}
      />
    </Box>
  );
}
