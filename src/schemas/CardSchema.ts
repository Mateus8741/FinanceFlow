import { z } from 'zod';

export const cardSchema = z.object({
  card_id: z.string().optional(),
  bank_name: z.string().min(1, 'Campo obrigatório'),
  validity: z.string().min(1, 'Campo obrigatório'),
  limit: z.string().min(1, 'Campo obrigatório'),
});

export type CardSchema = z.infer<typeof cardSchema>;
