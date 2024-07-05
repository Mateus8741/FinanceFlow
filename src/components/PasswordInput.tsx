import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';

import { TextInput, TextInputProps } from '../components/TextInput';

import { colors } from '@/theme/colors';

export type PasswordInputProps = Omit<TextInputProps, 'rightComponent'>;

export function PasswordInput({ ...textInputProps }: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry((prev) => !prev);
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...textInputProps}
      rightComponent={
        <MaterialCommunityIcons
          name={isSecureTextEntry ? 'eye-off-outline' : 'eye-outline'}
          onPress={toggleSecureTextEntry}
          color={colors.gray[400]}
          size={24}
          opacity={0.5}
        />
      }
    />
  );
}
