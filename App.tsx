import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Routes } from '@/Routes/Routes';
import { useThemeStorage } from '@/contexts/useTheme';
import { useThemeChanger } from '@/service';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './global.css';

export default function App() {
  const { theme } = useThemeStorage();
  const { setColorScheme } = useThemeChanger();

  const queryClient = new QueryClient()

  useEffect(() => {
    if (theme) {
      setColorScheme(theme);
    }
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="auto" animated translucent />

        <Routes />
      </GestureHandlerRootView>
    </SafeAreaProvider>
    </QueryClientProvider>
  );
}
