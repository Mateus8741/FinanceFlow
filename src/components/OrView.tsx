import { Pressable, Text, View } from 'react-native';

interface OrViewProps {
  title: string;
  subTitle: string;
  onPress: () => void;
}

export function OrView({ title, subTitle, onPress }: OrViewProps) {
  return (
    <View>
      <View className="my-6 flex-row items-center justify-center">
        <View className="h-0.5 flex-1 bg-gray-400 dark:bg-gray-100" />
        <Text className="mx-4 text-base font-bold text-gray-400 dark:text-gray-200">ou</Text>
        <View className="h-0.5 flex-1 bg-gray-400 dark:bg-gray-100" />
      </View>

      <View className="flex-row items-center justify-center gap-x-1">
        <Text className="text-center text-gray-400 dark:text-gray-200">{title}</Text>
        <Pressable onPress={onPress}>
          <Text className="text-center font-bold text-blue-500">{subTitle}</Text>
        </Pressable>
      </View>
    </View>
  );
}
