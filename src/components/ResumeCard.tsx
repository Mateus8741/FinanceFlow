import { Text, View } from 'react-native';
import { tv } from 'tailwind-variants';

import { FormatCurrency } from '@/utils';

const resumeStyles = tv({
  base: 'mb-4 flex-row justify-between rounded-md border-l-4 bg-white p-4 shadow-sm dark:bg-glassDark',
  variants: {
    cardType: {
      Pix: 'border-l-blue-550',
      Dinheiro: 'border-l-green-500',
      Crédito: 'border-l-yellow',
      Débito: 'border-l-red-350',
    },
  },
});

interface ResumeCardProps {
  type: 'Pix' | 'Dinheiro' | 'Crédito' | 'Débito';
  value: number;
}

export function ResumeCard({ type, value }: ResumeCardProps) {
  const formattedValue = FormatCurrency(value);

  return (
    <View className={resumeStyles({ cardType: type })}>
      <Text className="text-base font-bold text-black dark:text-white">{type}</Text>
      <Text className="text-base font-bold text-black dark:text-white">{formattedValue}</Text>
    </View>
  );
}
