import type { Config } from 'drizzle-kit';

export default {
  schema: './src/database/schema.drizzle.ts',
  out: './drizzle',
  dialect: 'sqlite',
  driver: 'expo',
} satisfies Config;
