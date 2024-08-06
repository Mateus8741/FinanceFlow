import { useColorScheme } from 'nativewind';
import { Text, View } from 'react-native';

import { Icon } from './Icons/CustonIcons';

import { colors } from '@/theme/colors';
import { FormatCurrency } from '@/utils';

interface CardProps {
  currentValue: number;
  totalValue: number;
  dueDate: string;
  accountName: string;
}

export function Card({ currentValue, totalValue, dueDate, accountName }: CardProps) {
  const { colorScheme } = useColorScheme();

  const colorIcon = colorScheme === 'dark' ? colors.white : colors.black;

  const getBarColor = (percentage: number) => {
    if (percentage <= 50) {
      return 'bg-green-500';
    } else if (percentage > 50 && percentage <= 70) {
      return 'bg-orange';
    } else {
      return 'bg-red-400';
    }
  };

  const percentage = Math.min((currentValue / totalValue) * 100, 100);
  const barColor = getBarColor(percentage);
  const formattedCurrentValue = FormatCurrency(currentValue);
  const formattedTotalValue = FormatCurrency(totalValue);

  return (
    <View className="mt-3.5 items-center justify-between gap-2">
      <View className="h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
        <Icon icon="Landmark" size={22} color={colorIcon} />
      </View>

      <View className="flex-row justify-between">
        <Text className="text-md font-bold text-black dark:text-white">{accountName}</Text>

        <View className="flex-row gap-x-1">
          <Text className="text-md text-black dark:text-white">vence</Text>
          <Text className="text-md font-bold text-black dark:text-white">{dueDate}</Text>
        </View>
      </View>

      <View className="flex-row">
        <Text className="text-md text-black dark:text-white">{formattedCurrentValue}</Text>

        <View className="mb-1 h-3 flex-1 self-end rounded-full bg-gray-250 dark:bg-gray-700">
          <View className={`h-3 rounded-full ${barColor}`} style={{ width: `${percentage}%` }} />
        </View>

        <Text className="text-md text-black dark:text-white">{formattedTotalValue}</Text>
      </View>
    </View>
  );
}
