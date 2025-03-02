import * as Crypto from 'expo-crypto';

import { db } from './drizzleDatabase';
import { users } from './schema.drizzle';

/**
 * Função para criar uma nova conta de usuário.
 * @param email - O email do usuário.
 * @param name - O nome do usuário.
 * @param password - A senha do usuário (deve ser hasheada em produção).
 * @param firstName - O primeiro nome do usuário.
 * @param lastName - O sobrenome do usuário.
 * @param birthDate - A data de nascimento do usuário.
 * @returns O usuário criado ou um erro.
 */

interface CreateAccountProps {
  email: string;
  name: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: string;
}
export async function createAccount({
  email,
  name,
  password,
  firstName,
  lastName,
  birthDate,
}: CreateAccountProps) {
  const userId = Crypto.randomUUID();

  const hashedPassword = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    password
  );

  const newUser = {
    id: userId,
    email,
    name,
    password: hashedPassword,
    firstName,
    lastName,
    birthDate,
  };

  try {
    await db.insert(users).values(newUser).onConflictDoNothing();
  } catch (error) {
    throw new Error('Failed to create user account');
  }
}
