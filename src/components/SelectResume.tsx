import { Dimensions, Pressable, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { colors } from '@/theme/colors';

const { width } = Dimensions.get('window');
const paddingHorizontal = 16;
const indicatorWidth = width / 2 - 2 * paddingHorizontal;

interface SelectResumeProps {
  setListType: (type: 'income' | 'outcome') => void;
}

export function SelectResume({ setListType }: SelectResumeProps) {
  const indicatorPosition = useSharedValue(0);

  const handlePress = (type: 'income' | 'outcome') => {
    setListType(type);
    indicatorPosition.value = withTiming(type === 'income' ? 0 : width / 2, { duration: 300 });
  };

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorPosition.value }],
  }));

  return (
    <View
      className="relative flex-row"
      style={{
        position: 'relative',
      }}>
      <Pressable
        onPress={() => handlePress('income')}
        className="flex-1 items-center justify-center py-2">
        <Text>Entrada</Text>
      </Pressable>

      <Pressable
        onPress={() => handlePress('outcome')}
        className="flex-1 items-center justify-center py-2">
        <Text>Saída</Text>
      </Pressable>

      <Animated.View
        style={[
          {
            position: 'absolute',
            bottom: -2,
            width: indicatorWidth,
            height: 2,
            backgroundColor: colors.blue[500],
          },
          indicatorStyle,
        ]}
      />
    </View>
  );
}
