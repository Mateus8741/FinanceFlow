import { useColorScheme } from 'nativewind';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { tv } from 'tailwind-variants';

import { Icon } from './Icons/CustonIcons';

import { useShowMoneyStorage } from '@/contexts';
import { colors } from '@/theme/colors';
import { FormatCurrency } from '@/utils';

const iconStyles = tv({
  base: 'items-center justify-center rounded-xl px-3',
  variants: {
    cardType: {
      income: 'bg-green-100 dark:bg-green-900',
      outcome: 'bg-red-200 dark:bg-red-900',
      total: 'bg-gray-50 dark:bg-gray-900',
    },
  },
});

const iconVariants = {
  income: 'DollarSign',
  outcome: 'DollarSign',
  total: 'PiggyBank',
};

const title = {
  income: 'Receita',
  outcome: 'Despesa',
  total: 'Saldo total',
};

const textColors = {
  light: {
    total: colors.gray[450],
    income: colors.green[600],
    outcome: colors.red[300],
  },
  dark: {
    total: colors.green[100],
    income: colors.green[500],
    outcome: colors.red[300],
  },
};

interface MoneyCardProps {
  cardType: 'total' | 'income' | 'outcome';
  value: number;
}

export function MoneyCard({ cardType = 'total', value }: MoneyCardProps) {
  const { colorScheme } = useColorScheme();
  const { setShow, show } = useShowMoneyStorage();

  function formatValueWithEllipsis(value: string, maxLength: number) {
    return value.length > maxLength ? `${value.substring(0, maxLength)}...` : value;
  }

  const formatedValue =
    cardType !== 'total'
      ? formatValueWithEllipsis(FormatCurrency(value), 10)
      : FormatCurrency(value);

  const iconColor = colorScheme && cardType ? textColors[colorScheme][cardType] : '';

  const color = colorScheme === 'dark' ? colors.gray.bgLight : colors.gray.bg;

  const iconName = iconVariants[cardType];

  return (
    <View className="flex-1 rounded-2xl bg-white px-2 py-2.5 shadow-sm dark:bg-glassDark">
      <View className="flex-row items-center justify-between">
        <View className="flex-row gap-x-2">
          <View className={iconStyles({ cardType })}>
            <Icon icon={iconName as any} size={24} color={iconColor} />
          </View>

          <View>
            <Text className="text-sm text-gray-500 dark:text-gray-400">{title[cardType]}</Text>
            <Text className="text-ellipsis text-lg font-bold text-black dark:text-white">
              {show && cardType === 'total' ? 'R$ ********' : formatedValue}
            </Text>
          </View>
        </View>

        {cardType === 'total' && (
          <Pressable onPress={() => setShow(!show)} className="pr-1">
            <Icon icon={show ? 'EyeOff' : 'Eye'} size={24} color={color} />
          </Pressable>
        )}
      </View>
    </View>
  );
}
