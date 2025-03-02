import { sql } from 'drizzle-orm';
import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  email: text('email').unique(),
  name: text('name'),
  password: text('password').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
  firstName: text('first_name'),
  lastName: text('last_name'),
  birthDate: text('birth_date'),
});

export const bills = sqliteTable('bills', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  value: real('value').notNull(),
  dueDate: integer('due_date', { mode: 'timestamp' }).notNull(),
  paid: integer('paid', { mode: 'boolean' }).default(false),
  bankName: text('bank_name').notNull(),
  transactionType: text('transaction_type'),
  paymentType: text('payment_type'),
  userId: text('user_id')
    .notNull()
    .references(() => users.id),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
});

export const cards = sqliteTable('cards', {
  id: text('id').primaryKey(),
  bankName: text('bank_name').notNull(),
  validity: text('validity').notNull(),
  limit: real('limit').notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
});

export const transactions = sqliteTable('transactions', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  value: real('value').notNull(),
  transactionType: text('transaction_type').notNull(),
  paymentType: text('payment_type').notNull(),
  bankName: text('bank_name').notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
});
