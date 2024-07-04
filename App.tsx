import { StatusBar } from 'react-native';

import { LoginScreen } from '~/screens/LoginScreen';

import 'react-native-gesture-handler';
import './global.css';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <LoginScreen />
    </>
  );
}
