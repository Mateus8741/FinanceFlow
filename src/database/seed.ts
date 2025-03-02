import * as Crypto from 'expo-crypto';

import { db } from './drizzleDatabase';
import { cards, transactions, users } from './schema.drizzle';

async function main() {
  const user = {
    id: Crypto.randomUUID(),
    email: 'test@t.com',
    name: 'Test User',
    password: Crypto.getRandomBytes(32).toString(),
    firstName: 'Test',
    lastName: 'User',
    birthDate: '1990-01-01',
  };

  await db.insert(users).values(user).onConflictDoNothing();

  await db.insert(cards).values([
    {
      id: Crypto.randomUUID(),
      bankName: 'Nubank',
      validity: '2025-12',
      limit: 5000,
      userId: user.id,
    },
    {
      id: Crypto.randomUUID(),
      bankName: 'Inter',
      validity: '2024-12',
      limit: 3000,
      userId: user.id,
    },
  ]);

  await db.insert(transactions).values([
    {
      id: Crypto.randomUUID(),
      name: 'Salary',
      value: 5000,
      transactionType: 'income',
      paymentType: 'transfer',
      bankName: 'Nubank',
      userId: user.id,
    },
    {
      id: Crypto.randomUUID(),
      name: 'Rent',
      value: 1500,
      transactionType: 'outcome',
      paymentType: 'transfer',
      bankName: 'Inter',
      userId: user.id,
    },
  ]);

  console.log('Database has been seeded. 🌱');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
