import { Image, Pressable, ScrollView, Text, View } from 'react-native';

import { useLogOutUser } from '@/api';
import { Box, Icon, ProfileMenu } from '@/components';
import { useUserStorage } from '@/contexts';
import { colors } from '@/theme/colors';

export function ProfileScreen() {
  const { user } = useUserStorage();
  const { logout } = useLogOutUser();

  function handleLogOut() {
    logout();
  }

  // const uri = 'https://avatars.githubusercontent.com/u/39889384?v=4';
  const name = `${user?.user_metadata.first_name}+${user?.user_metadata.last_name}`;
  const uri = `https://ui-avatars.com/api/?name=${name}&background=random`;
  const fullName = `${user?.user_metadata.first_name} ${user?.user_metadata.last_name}`;

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

          <Pressable
            className="items-center justify-center rounded-xl bg-red-200 p-2 dark:bg-red-900"
            onPress={handleLogOut}>
            <Icon icon="LogOut" size={22} color={colors.red[500]} />
          </Pressable>
        </View>

        <View className="items-center justify-center rounded-xl bg-white p-4 shadow-sm dark:bg-glassDark">
          <Image source={{ uri }} alt="avatar" className="h-32 w-32 rounded-full" />

          {/* <Text className="mt-3 text-xl font-bold text-blue-500">Alterar foto</Text> */}
          <Text className="mt-3 text-xl font-bold text-blue-500">{fullName}</Text>
        </View>

        <ProfileMenu />
      </ScrollView>
    </Box>
  );
}
