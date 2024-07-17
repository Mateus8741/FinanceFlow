import { useColorScheme } from 'nativewind';
import { Image, Text, View } from 'react-native';

import { Icon } from './Icons/CustonIcons';

import defaultProfile from '@/assets/defaultProfile.jpeg';
import { colors } from '@/theme/colors';

export function Header() {
  const { colorScheme } = useColorScheme();

  const hasImage = false;

  const uri = 'https://avatars.githubusercontent.com/u/39889384?v=4';

  return (
    <View className="mb-5 flex-row items-center justify-between border-b border-gray-300 pb-3 dark:border-gray-400">
      <View className="flex-row items-center gap-x-3">
        <Image
          source={hasImage ? { uri } : defaultProfile}
          className="h-14 w-14 rounded-full border border-gray-800 dark:border-gray-100"
        />

        <View>
          <Text className="text-base text-black dark:text-white">Olá,</Text>
          <Text className="text-lg font-bold text-black dark:text-white">Matt</Text>
        </View>
      </View>

      <Icon
        icon="Bell"
        size={24}
        color={colorScheme === 'dark' ? colors.gray.bgLight : colors.gray.bg}
      />
    </View>
  );
}
