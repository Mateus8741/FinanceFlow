import { useColorScheme } from 'nativewind';
import BouncyCheckbox, { BouncyCheckboxProps } from 'react-native-bouncy-checkbox';

import { colors } from '@/theme/colors';

interface CustomCheckboxProps extends BouncyCheckboxProps {}

export function CusstomCheckbox({ ...props }: CustomCheckboxProps) {
  const { colorScheme } = useColorScheme();

  const borderColor = colorScheme === 'dark' ? colors.white : colors.black;

  const unfillColor = colorScheme === 'dark' ? colors.gray[800] : colors.gray[100];

  return (
    <BouncyCheckbox
      size={30}
      iconStyle={{
        borderRadius: 6,
        borderColor,
      }}
      unFillColor={unfillColor}
      iconImageStyle={{
        tintColor: colors.blue[500],
        width: 20,
        height: 20,
      }}
      innerIconStyle={{
        borderRadius: 6,
        borderColor,
      }}
      disableText
      {...props}
    />
  );
}
