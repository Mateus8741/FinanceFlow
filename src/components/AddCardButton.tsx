import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';

import { Icon } from './Icons/CustonIcons';

import { colors } from '@/theme/colors';

export function AddCardButton() {
  const { navigate } = useNavigation<any>();

  function handleAddCard() {
    console.log('Adicionar cartão');
    navigate('AddCardScreen');
  }

  return (
    <TouchableOpacity
      className="mt-2 items-center justify-center gap-2 rounded-xl border-[0.5px] border-dashed border-blue-500 py-2"
      onPress={handleAddCard}>
      <Icon icon="Plus" size={24} color={colors.blue[500]} />

      <Text className="text-lg text-blue-500">Adicionar cartão</Text>
    </TouchableOpacity>
  );
}
