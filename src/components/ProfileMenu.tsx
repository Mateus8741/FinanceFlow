import { Text, View } from 'react-native';

import { Icon } from './Icons/CustonIcons';

import { colors } from '@/theme/colors';

export function ProfileMenu() {
  return (
    <View className="items-cente mt-7 rounded-xl bg-white p-4 shadow-sm dark:bg-glassDark">
      <Text className="text-2xl font-bold text-blue-500">Menu</Text>

      <View className="gap-4">
        <View className="flex-row items-center justify-between">
          <Text className="font-semibold text-blue-500">Editar perfil</Text>

          <View className="items-center justify-center rounded-xl bg-blue-200 p-2 dark:bg-blue-700">
            <Icon icon="Pencil" size={22} color={colors.blue[500]} />
          </View>
        </View>
      </View>
    </View>
  );
}
