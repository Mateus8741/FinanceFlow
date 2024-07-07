import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, { BounceIn } from 'react-native-reanimated';

import { AppTabBottomTabParamList } from './AppTabNavigator';
import { mapScreenToProps } from './mapScreenToProps';

import { CustonIcons } from '@/components';
import { useAppSafeArea } from '@/hooks';
import { colors } from '@/theme/colors';
import { useShadowProps } from '@/utils';

export function AppTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { bottom } = useAppSafeArea();

  return (
    <View
      className=" flex-row bg-white px-3 dark:bg-glassDark"
      style={[{ paddingBottom: bottom }, useShadowProps()]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const animation = isFocused && BounceIn;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({
              name: route.name,
              params: route.params,
              merge: true,
            });
          }
        };

        const tabItem = mapScreenToProps[route.name as keyof AppTabBottomTabParamList];

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            activeOpacity={1}
            className="items-center justify-center pt-3"
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}>
            <CustonIcons
              color={isFocused ? colors.blue[500] : colors.blue[300]}
              icon={isFocused ? (tabItem.icon.focused as any) : (tabItem.icon.unfocused as any)}
              entering={animation || undefined}
              size={20}
            />
            {isFocused && (
              <Animated.Text
                className="text-sm font-bold text-blue-500"
                entering={animation || undefined}>
                {tabItem.label}
              </Animated.Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
