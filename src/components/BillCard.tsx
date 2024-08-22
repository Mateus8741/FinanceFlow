import { Text, View } from 'react-native';

import { BankLogo } from './BankLogo';

import { FormatCurrency } from '@/utils';

interface BillCardProps {
  accountName: string;
  totalValue: number;
  currentValue: number;
  dueDate: string;
}

export function BillCard({ accountName, totalValue, currentValue, dueDate }: BillCardProps) {
  const formattedTotalValue = FormatCurrency(totalValue);
  const formattedCurrentValue = FormatCurrency(currentValue);

  return (
    <View className="mt-2.5 rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
      <View className="flex-row items-center gap-2">
        <BankLogo bankName={accountName} />

        <Text className="text-lg text-black dark:text-white">{accountName}</Text>
      </View>

      <View className="mt-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg text-black dark:text-white">{formattedCurrentValue}</Text>
          <Text className="text-sm text-gray-400 dark:text-gray-600">Vencimento {dueDate}</Text>
        </View>

        <View className="mt-3 h-px bg-gray-200 dark:bg-gray-700" />

        <View className="mt-3 flex-row items-center justify-between">
          <Text className="text-sm text-gray-400 dark:text-gray-600">Limite total</Text>
          <Text className="text-sm text-gray-400 dark:text-gray-600">{formattedTotalValue}</Text>
        </View>
      </View>
    </View>
  );
}
