import { Text, View } from 'react-native';
import { tv } from 'tailwind-variants';

import { FormatCurrency } from '@/utils';

const resumeStyles = tv({
  base: 'mb-4 flex-col justify-between rounded-md border-l-4 bg-white py-2 px-3 shadow-sm dark:bg-glassDark w-full h-16',
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
  isOutcome?: boolean;
}

export function ResumeCard({ type, value, isOutcome = true }: ResumeCardProps) {
  const formattedValue = FormatCurrency(value);

  const textColor = isOutcome ? 'text-red-500' : 'text-green-500';

  return (
    <View className={resumeStyles({ cardType: type })}>
      <Text className="text-sm font-bold text-black dark:text-white">{type}</Text>
      <Text className={`text-md font-bold ${textColor}`}>
        {isOutcome ? '- ' : ''}
        {formattedValue}
      </Text>
    </View>
  );
}
