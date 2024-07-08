// import { useColorScheme } from 'nativewind';
// import { Text, View } from 'react-native';

// import { Icon } from './Icons/CustonIcons';

// import { colors } from '@/theme/colors';

// interface MoneyCardProps {
//   cardType: 'total' | 'income' | 'outcome';
//   value: number;
// }

// export function MoneyCard() {
//   const { colorScheme } = useColorScheme();

//   const color = colorScheme === 'dark' ? colors.gray.bgLight : colors.gray.bg;

//   // PiggyBank
//   // DollarSign
//   // CircleCheckBig

//   return (
//     <View className="w-full rounded-3xl bg-white p-5 shadow-sm dark:bg-glassDark dark:shadow-glassLight">
//       <View className="flex-row items-center justify-between">
//         <View className="flex-row gap-x-3">
//           <View className="items-center justify-center rounded-2xl bg-green-500 px-3 dark:bg-green-100">
//             <Icon icon="CircleCheckBig" size={24} color={colors.green[800]} />
//           </View>

//           <View>
//             <Text className="text-sm text-gray-500 dark:text-gray-400">Saldo total</Text>
//             <Text className="text-lg font-bold text-black dark:text-white">R$ 1.000,00</Text>
//           </View>
//         </View>

//         {/* <Icon icon="Eye" size={24} color={color} /> */}
//       </View>
//     </View>
//   );
// }

import { useColorScheme } from 'nativewind';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { tv } from 'tailwind-variants';

import { Icon } from './Icons/CustonIcons';

import { useShowMoneyStorage } from '@/contexts';
import { colors } from '@/theme/colors';
import { FormatCurrency } from '@/utils';

const iconStyles = tv({
  base: 'items-center justify-center rounded-2xl px-3',
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

  const formatedValue = FormatCurrency(value);

  const iconColor = colorScheme && cardType ? textColors[colorScheme][cardType] : '';

  const color = colorScheme === 'dark' ? colors.gray.bgLight : colors.gray.bg;

  const iconName = iconVariants[cardType];

  return (
    <View className="rounded-3xl bg-white px-3 py-4 shadow-sm dark:bg-glassDark dark:shadow-glassLight">
      <View className="flex-row items-center justify-between">
        <View className="flex-row gap-x-3">
          <View className={iconStyles({ cardType })}>
            <Icon icon={iconName as any} size={24} color={iconColor} />
          </View>

          <View>
            <Text className="text-sm text-gray-500 dark:text-gray-400">{title[cardType]}</Text>
            <Text className="text-lg font-bold text-black dark:text-white">
              {show && cardType === 'total' ? 'R$ ********' : formatedValue}
            </Text>
          </View>
        </View>

        {cardType === 'total' && (
          <Pressable onPress={() => setShow(!show)}>
            <Icon icon={show ? 'EyeOff' : 'Eye'} size={24} color={color} />
          </Pressable>
        )}
      </View>
    </View>
  );
}
