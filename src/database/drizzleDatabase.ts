import { drizzle } from 'drizzle-orm/expo-sqlite';
import { openDatabaseSync } from 'expo-sqlite/next';

import * as schema from './schema.drizzle';

export const dbName = 'database.db';

const expo = openDatabaseSync(dbName, { enableChangeListener: true });

export const db = drizzle(expo, { schema });
