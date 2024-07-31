import { z } from 'zod';

export const addCardSchema = z.object({
  bank_name: z.string().min(1, 'Campo obrigatório'),
  validity: z.string().min(1, 'Campo obrigatório'),
  limit: z.string().min(1, 'Campo obrigatório'),
});

export type AddCardSchema = z.infer<typeof addCardSchema>;
