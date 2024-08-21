import { useColorScheme } from 'nativewind';
import { View } from 'react-native';

import { Icon } from '.';

import { BankLogos } from '@/assets/mapLogoBank';
import { colors } from '@/theme/colors';

interface BankLogoProps {
  bankName: string;
}

export function BankLog({ bankName }: BankLogoProps) {
  const { colorScheme } = useColorScheme();

  const logos: { [key: string]: React.ElementType } = {
    'Banco do Brasil': BankLogos.BDB,
    'Caixa Econômica Federal': BankLogos.Caixa,
    'Itaú Unibanco': BankLogos.Itau,
    Bradesco: BankLogos.Bradesco,
    Santander: BankLogos.Santander,
    'Banco Safra': BankLogos.Safra,
    'BTG Pactual': BankLogos.Btg,
    'Banco Votorantim (BV)': BankLogos.Bv,
    'Banco Original': BankLogos.Original,
    'Banco Pan': BankLogos.Pan,
    'Banco Inter': BankLogos.Inter,
    Nubank: BankLogos.Nubank,
    'Banco Neon': BankLogos.Neon,
    'Banco Modal': BankLogos.Modal,
    'Banco Daycoval': BankLogos.Daycoval,
    'Banco BMG': BankLogos.Bmg,
    'Banco Pine': BankLogos.Pine,
    'Banco Alfa': BankLogos.Alfa,
    'Banco Sofisa': BankLogos.Sofisa,
    'Banco Mercantil do Brasil': BankLogos.Mercantil,
    'Banco Indusval & Partners (BI&P)': BankLogos.Induvisal,
    'Banco ABC Brasil': BankLogos.Abc,
    'Banco Rendimento': BankLogos.Rendimento,
    'Banco Fibra': BankLogos.Fibra,
  };

  const Logo = logos[bankName];
  const colorIcon = colorScheme === 'dark' ? colors.white : colors.black;

  return Logo ? (
    <Logo width={40} height={40} />
  ) : (
    <View className="h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
      <Icon icon="Landmark" size={25} color={colorIcon} />
    </View>
  );
}
