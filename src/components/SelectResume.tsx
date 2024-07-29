import { Dimensions, Pressable, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { colors } from '@/theme/colors';

const { width } = Dimensions.get('window');
const indicatorWidth = width / 2;

interface SelectResumeProps {
  setListType: (type: 'income' | 'outcome') => void;
}

export function SelectResume({ setListType }: SelectResumeProps) {
  const indicatorPosition = useSharedValue(0);

  const handlePress = (type: 'income' | 'outcome') => {
    setListType(type);
    indicatorPosition.value = withTiming(type === 'income' ? 0 : indicatorWidth, { duration: 300 });
  };

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorPosition.value }],
  }));

  return (
    <View
      className="-mx-7 h-16 flex-row rounded-md bg-white shadow-sm dark:bg-glassDark"
      style={{
        position: 'relative',
      }}>
      <Pressable
        onPress={() => handlePress('income')}
        className="flex-1 items-center justify-center py-2">
        <Text className="text-lg font-bold text-black dark:text-white">Entrada</Text>
      </Pressable>

      <Pressable
        onPress={() => handlePress('outcome')}
        className="flex-1 items-center justify-center py-2">
        <Text className="text-lg font-bold text-black dark:text-white">Saída</Text>
      </Pressable>

      <Animated.View
        style={[
          {
            position: 'absolute',
            bottom: -2,
            width: indicatorWidth,
            left: 4,
            height: 2,
            backgroundColor: colors.blue[500],
          },
          indicatorStyle,
        ]}
      />
    </View>
  );
}
