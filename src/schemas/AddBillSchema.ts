import { z } from 'zod';

export const addBillSchema = z.object({
  bank: z.string().min(1, 'Campo obrigatório'),
  transactionName: z.string().min(1, 'Campo obrigatório'),
  value: z.string().min(1, 'Campo obrigatório'),
});

export type AddBillSchema = z.infer<typeof addBillSchema>;
