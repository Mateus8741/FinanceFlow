import { useColorScheme } from 'nativewind';
import { Text, View } from 'react-native';
import { tv } from 'tailwind-variants';

import { Icon } from './Icons/CustonIcons';

import { colors } from '@/theme/colors';

const transactionVariants = tv({
  slots: {
    transactionContainer: 'flex-row items-center gap-x-2',
    iconWrapper: 'rounded-lg p-3',
    labelContainer: 'flex-1 gap-y-1',
    typeBadge: 'items-center justify-center rounded-full px-1.5',
    amountText: 'font-bold',
  },
  variants: {
    type: {
      income: {
        iconWrapper: 'bg-green-200 dark:bg-green-800',
        typeBadge: 'bg-green-500 dark:bg-green-800',
        amountText: 'text-green-500',
      },
      outcome: {
        iconWrapper: 'bg-red-200 dark:bg-red-900',
        typeBadge: 'bg-red-450 dark:bg-red-400',
        amountText: 'text-red-500',
      },
    },
  },
  defaultVariants: {
    type: 'outcome',
  },
});

const iconVariants = {
  income: 'CircleArrowDown',
  outcome: 'CircleArrowUp',
};

const iconColors = {
  light: {
    income: colors.green[800],
    outcome: colors.red[400],
  },
  dark: {
    income: colors.green[200],
    outcome: colors.red[300],
  },
};

interface TransactionScreenProps {
  type: 'income' | 'outcome';
  data: {
    billingTitle: string;
    name: string;
    date: string;
    value: number;
    payment: string;
  };
}

export function TransactionCard({ type, data }: TransactionScreenProps) {
  const { colorScheme } = useColorScheme();

  const { transactionContainer, iconWrapper, labelContainer, typeBadge, amountText } =
    transactionVariants({ type });

  const iconColor = colorScheme ? iconColors[colorScheme][type] : '';
  const iconName = iconVariants[type];

  return (
    <View className="mb-3 rounded-xl bg-white p-3 shadow-sm dark:bg-glassDark">
      <View className="mb-5 flex-row items-center gap-x-1">
        <View className="rounded-full bg-gray-100 p-1.5">
          <Icon icon="PiggyBank" size={20} color="black" />
        </View>

        <Text className="font-bold text-black dark:text-white">{data.billingTitle}</Text>
      </View>

      <View className={transactionContainer()}>
        <View className={iconWrapper()}>
          <Icon icon={iconName as any} size={30} color={iconColor} />
        </View>

        <View className={labelContainer()}>
          <Text className="font-bold text-black dark:text-white">{data.name}</Text>

          <View className="flex-row items-center justify-between">
            <View className={typeBadge()}>
              <Text className="pb-px text-center text-sm font-bold text-white">
                {type === 'income' ? 'entrada' : 'saída'}
              </Text>
            </View>

            <Text className={amountText()}>
              {type === 'outcome' ? '- ' : ''}
              R$ {data.value}
            </Text>
          </View>

          <View className="flex-row items-center justify-between">
            <Text className="text-md text-gray-400">{data.payment}</Text>
            <Text className="text-md text-gray-400">{data.date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
