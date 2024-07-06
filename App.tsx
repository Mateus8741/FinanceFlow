import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useThemeStorage } from '@/contexts/useTheme';
import { LoginScreen } from '@/screens/LoginScreen';
import { useThemeChanger } from '@/service';

import { Button } from 'react-native';
import './global.css';

export default function App() {
  const { theme } = useThemeStorage();
  const { setColorScheme, handleThemeChange } = useThemeChanger();

  useEffect(() => {
    if (theme) {
      setColorScheme(theme);
    }
  }, [theme]);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="auto" animated translucent />

        <LoginScreen />
        <Button title="Change Theme" onPress={handleThemeChange} />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
