import { Text, View } from 'react-native';

import { FormatCurrency } from '@/utils';

interface ResumeCardProps {
  title: string;
  value: number;
}

export function ResumeCard({ title, value }: ResumeCardProps) {
  const formattedValue = FormatCurrency(value);
  return (
    <View className="mb-4 flex-row justify-between rounded-md border-l-4 border-l-blue-500 bg-white p-4 shadow-sm dark:bg-glassDark">
      <Text className="text-base font-bold text-black dark:text-white">{title}</Text>
      <Text className="text-base font-bold text-black dark:text-white">{formattedValue}</Text>
    </View>
  );
}
