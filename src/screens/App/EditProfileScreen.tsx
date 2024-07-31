import { zodResolver } from '@hookform/resolvers/zod';
import { useColorScheme } from 'nativewind';
import { useForm } from 'react-hook-form';
import { Pressable, Text, View } from 'react-native';

import { AppScreenProps } from '@/Routes';
import { useUpdateProfile } from '@/api';
import { Box, CustomButton, FormTextInput, Icon } from '@/components';
import { useUserStorage } from '@/contexts';
import { UpdateScheema, updateScheema } from '@/schemas';
import { colors } from '@/theme/colors';

export function EditProfileScreen({ navigation }: AppScreenProps<'EditProfileScreen'>) {
  const { user } = useUserStorage();
  const { update, isPending } = useUpdateProfile();
  const { colorScheme } = useColorScheme();

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

  const iconColor = colorScheme === 'dark' ? colors.gray.bgLight : colors.gray.bg;

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSaveChanges(data: UpdateScheema) {
    update({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      birth_date: data.birth_date,
    });
  }

  return (
    <>
      <Box>
        <Pressable
          className="h-6 w-6 items-center justify-center rounded-xl bg-white p-6 shadow-sm dark:bg-glassDark"
          onPress={handleGoBack}>
          <Icon icon="ArrowLeft" size={22} color={iconColor} />
        </Pressable>

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
          isLoading={isPending}
        />
      </Box>
    </>
  );
}
