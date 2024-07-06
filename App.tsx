import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useThemeStorage } from '@/contexts/useTheme';
import { LoginScreen } from '@/screens/LoginScreen';
import { useThemeChanger } from '@/service';
import './global.css';

export default function App() {
  const { theme } = useThemeStorage();
  const { setColorScheme } = useThemeChanger();

  useEffect(() => {
    if (theme) {
      setColorScheme(theme);
    }
  }, [theme]);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="auto" animated translucent />

        <View className="flex-1">
          <LoginScreen />
        </View>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
