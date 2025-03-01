import { StatusBar } from 'expo-status-bar';
import { AppRegistry } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Routes } from '@/Routes/Routes';
import './global.css';

function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <Routes />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent('main', () => App);

export default App;
