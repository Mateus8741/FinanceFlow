import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { LoginScreen } from '@/screens/LoginScreen';

import './global.css';

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="auto" animated translucent />

        <LoginScreen />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
