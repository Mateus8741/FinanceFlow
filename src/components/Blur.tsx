import React from 'react';
import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

import BlurImage from '@/assets/BlurView.png';
import { useAppSafeArea } from '@/hooks';
import { colors } from '@/theme/colors';

interface Props {
  children: React.ReactNode;
  scrollable?: boolean;
}

export function Blur({ children, scrollable = false }: Props) {
  const { top, bottom } = useAppSafeArea();

  const Container = scrollable ? ScrollView : View;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Container
        style={{
          flex: 1,
          backgroundColor: colors.gray.bg,
          paddingHorizontal: 20,
          paddingTop: top,
          paddingBottom: bottom,
        }}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <ImageBackground
          className="flex-1"
          source={BlurImage}
          style={{
            flex: 1,
            marginHorizontal: -20,
            marginTop: -top,
            marginBottom: -bottom,
          }}>
          {children}
        </ImageBackground>
      </Container>
    </KeyboardAvoidingView>
  );
}
