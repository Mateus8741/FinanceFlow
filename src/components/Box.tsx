import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import BlurImage from '@/assets/BlurView.png';
import { useAppSafeArea } from '@/hooks';

interface Props {
  children: React.ReactNode;
  scrollable?: boolean;
  blur?: boolean;
}

export function Box({ children, blur, scrollable = false }: Props) {
  const { top, bottom } = useAppSafeArea();

  const Container = scrollable ? ScrollView : View;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Container
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: top,
          paddingBottom: bottom,
        }}
        contentContainerStyle={StyleSheet.absoluteFillObject}
        className=" bg-white dark:bg-gray-bg"
        bounces={false}
        showsVerticalScrollIndicator={false}>
        {blur ? (
          <ImageBackground
            source={BlurImage}
            style={[
              {
                flex: 1,
                paddingHorizontal: 20,
                paddingTop: top,
                paddingBottom: bottom,
              },
              StyleSheet.absoluteFill,
            ]}>
            {children}
          </ImageBackground>
        ) : (
          children
        )}
      </Container>
    </KeyboardAvoidingView>
  );
}
