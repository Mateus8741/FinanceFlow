import { Text, View } from 'react-native';

export function OrView() {
  return (
    <View className="my-6 flex-row items-center justify-center">
      <View className="h-0.5 flex-1 bg-gray-400 dark:bg-gray-100" />
      <Text className="dark:text-gray-200 mx-4 text-base font-bold text-gray-400">ou</Text>
      <View className="h-0.5 flex-1 bg-gray-400 dark:bg-gray-100" />
    </View>
  );
}
