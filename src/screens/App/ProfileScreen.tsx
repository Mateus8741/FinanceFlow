import { Image, Pressable, ScrollView, Text, View } from 'react-native';

import { AppTabScreenProps } from '@/Routes';
import defaultProfile from '@/assets/defaultProfile.jpeg';
import { Box, Icon, ProfileMenu } from '@/components';
import { colors } from '@/theme/colors';

export function ProfileScreen({ navigation }: AppTabScreenProps<'ProfileScreen'>) {
  function handleLogOut() {
    console.log('log out');
  }

  const hasImage = true;

  const uri = 'https://avatars.githubusercontent.com/u/39889384?v=4';

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
        <View className="mb-4 flex-row items-center justify-between">
          <View className="h-[35px] w-[35px]" />

          <Text className="text-center text-xl font-bold text-blue-500">Perfil</Text>

          <Pressable
            className="items-center justify-center rounded-xl bg-red-200 p-2 dark:bg-red-900"
            onPress={handleLogOut}>
            <Icon icon="LogOut" size={22} color={colors.red[500]} />
          </Pressable>
        </View>

        <View className="items-center justify-center rounded-xl bg-white p-4 shadow-sm dark:bg-glassDark">
          <Image source={hasImage ? { uri } : defaultProfile} className="h-32 w-32 rounded-full" />

          <Text className="mt-3 text-xl font-bold text-blue-500">Alterar foto</Text>
        </View>

        <ProfileMenu />
      </ScrollView>
    </Box>
  );
}
