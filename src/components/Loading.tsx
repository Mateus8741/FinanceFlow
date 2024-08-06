import React from 'react';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';

import { Icon } from './Icons/CustonIcons';

import { colors } from '@/theme/colors';

export function Loading() {
  const rotation = useSharedValue(0);

  rotation.value = withRepeat(
    withTiming(360, {
      duration: 2000,
      easing: Easing.linear,
    }),
    -1
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <Animated.View
      style={[animatedStyle, { flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
      <Icon icon="LoaderPinwheel" size={32} color={colors.blue[500]} />
    </Animated.View>
  );
}
