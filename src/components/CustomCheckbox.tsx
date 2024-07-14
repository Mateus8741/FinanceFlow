import BouncyCheckbox, { BouncyCheckboxProps } from 'react-native-bouncy-checkbox';

import { colors } from '@/theme/colors';

interface CustomCheckboxProps extends BouncyCheckboxProps {}

export function CusstomCheckbox({ ...props }: CustomCheckboxProps) {
  return (
    <BouncyCheckbox
      size={30}
      iconStyle={{
        borderRadius: 6,
        borderColor: colors.blue[500],
      }}
      iconImageStyle={{
        tintColor: colors.blue[500],
        width: 20,
        height: 20,
      }}
      innerIconStyle={{
        borderRadius: 6,
        borderColor: colors.white,
      }}
      disableText
      {...props}
    />
  );
}
