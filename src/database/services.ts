import { eq } from 'drizzle-orm';
import * as Crypto from 'expo-crypto';

import { db } from './drizzleDatabase';
import { users } from './schema.drizzle';

import type { UserSchema } from '@/schemas';

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

export async function login(
  email: string,
  password: string,
  setUser: (user: UserSchema | null) => void
) {
  const user = await db.select().from(users).where(eq(users.email, email));

  if (user.length === 0) {
    throw new Error('User not found');
  }

  const hashedPassword = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    password
  );

  if (hashedPassword !== user[0].password) {
    throw new Error('Credentials do not match');
  }

  const userData = {
    user_metadata: {
      id: user[0].id,
      email: user[0].email ?? '',
      first_name: user[0].firstName ?? '',
      last_name: user[0].lastName ?? '',
      birth_date: user[0].birthDate ?? '',
    },
  };

  setUser(userData);
}

export async function logout(setUser: (user: UserSchema | null) => void) {
  setUser(null);
}

export async function forgotPassword(email: string) {
  const user = await db.select().from(users).where(eq(users.email, email));

  if (user.length === 0) {
    throw new Error('User not found');
  }

  const temporaryPassword = Crypto.randomUUID().slice(0, 8);

  const hashedPassword = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    temporaryPassword
  );

  try {
    await db.update(users).set({ password: hashedPassword }).where(eq(users.email, email));

    return temporaryPassword;
  } catch (error) {
    throw new Error('Failed to reset password');
  }
}
