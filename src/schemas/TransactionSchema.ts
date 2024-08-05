import { z } from 'zod';

export const transactionSchema = z.object({
  bank_name: z.string(),
  bill_id: z.string(),
  created_at: z.string(),
  id: z.string(),
  payment_type: z.string(),
  transacion_type: z.enum(['income', 'outcome']),
  transaction_name: z.string(),
  value: z.number(),
});

export type TransactionSchema = z.infer<typeof transactionSchema>;
