import { Text, View } from 'react-native';

export function OrView() {
  return (
    <View className="my-6 flex-row items-center justify-center">
      <View className="bg-gray-700 h-0.5 flex-1 dark:bg-gray-100" />
      <Text className="text-gray-700 dark:text-gray-200 mx-4 text-base font-bold">ou</Text>
      <View className="bg-gray-700 h-0.5 flex-1 dark:bg-gray-100" />
    </View>
  );
}
