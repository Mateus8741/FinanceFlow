import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create a test user
  const hashedPassword = await bcrypt.hash('123456', 10);
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      password: hashedPassword,
      name: 'Test User',
      firstName: 'Test',
      lastName: 'User',
      birthDate: '1990-01-01',
    },
  });

  // Create some test cards
  await prisma.card.createMany({
    data: [
      {
        bankName: 'Nubank',
        validity: '2025-12',
        limit: 5000,
        userId: user.id,
      },
      {
        bankName: 'Inter',
        validity: '2024-12',
        limit: 3000,
        userId: user.id,
      },
    ],
  });

  // Create some test transactions
  await prisma.transaction.createMany({
    data: [
      {
        name: 'Salary',
        value: 5000,
        transactionType: 'income',
        paymentType: 'transfer',
        bankName: 'Nubank',
        userId: user.id,
      },
      {
        name: 'Rent',
        value: 1500,
        transactionType: 'outcome',
        paymentType: 'transfer',
        bankName: 'Inter',
        userId: user.id,
      },
    ],
  });

  console.log('Database has been seeded. 🌱');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
