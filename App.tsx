import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { SQLiteProvider } from 'expo-sqlite/next';
import { StatusBar } from 'expo-status-bar';
import { AppRegistry } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import migrations from './drizzle/migrations';

import { Routes } from '@/Routes/Routes';
import { db, dbName } from '@/database/drizzleDatabase';

import './global.css';

function App() {
  useMigrations(db, migrations);

  return (
    <SQLiteProvider databaseName={dbName}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <Routes />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </SQLiteProvider>
  );
}

AppRegistry.registerComponent('main', () => App);

export default App;
