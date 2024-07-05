import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { LoginScreen } from '@/screens/LoginScreen';

import 'react-native-gesture-handler';
import './global.css';

export default function App() {
  return (
    <>
      <StatusBar style="auto" animated translucent />

      <View className="bg-gray-bg flex-1">
        <LoginScreen />
      </View>
    </>
  );
}
