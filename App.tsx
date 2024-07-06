import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useThemeStorage } from '@/contexts/useTheme';
import { RegisterScreen } from '@/screens';
import { useThemeChanger } from '@/service';

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

        <RegisterScreen />
        {/* <Button title="Change Theme Light" onPress={() => handleThemeChange('light')} />
        <Button title="Change Theme Dark" onPress={() => handleThemeChange('dark')} />
        <Button title="Change Theme System" onPress={() => handleThemeChange('system')} /> */}
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
