import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { tv } from 'tailwind-variants';

import { Icon } from './Icons/CustonIcons';

import { colors } from '@/theme/colors';

const buttonType = tv({
  base: 'flex-1 flex-row items-center justify-center gap-x-2 rounded-lg px-9 py-4',
  variants: {
    type: {
      income: 'bg-green-200 dark:bg-green-900',
      outcome: 'bg-red-200 dark:bg-red-900',
    },
    selected: {
      income: 'border-2 border-green-500/30',
      outcome: 'border-2 border-red-500/30',
    },
  },
});

interface TransitionTypeButtonProps extends TouchableOpacityProps {
  type: 'income' | 'outcome';
  selected: boolean;
}

export function TransitionTypeButton({ type, selected, ...rest }: TransitionTypeButtonProps) {
  const buttonVariants = buttonType({
    type,
    selected: selected ? type : undefined,
  });

  const iconType = type === 'income' ? 'CircleArrowDown' : 'CircleArrowUp';

  const iconColor = type === 'income' ? colors.green[800] : colors.red[400];

  const textType = type === 'income' ? 'Entrada' : 'Saída';

  return (
    <TouchableOpacity className={buttonVariants} {...rest}>
      <Icon icon={iconType} size={24} color={iconColor} />

      <Text className="text-lg font-bold text-black dark:text-white">{textType}</Text>
    </TouchableOpacity>
  );
}
