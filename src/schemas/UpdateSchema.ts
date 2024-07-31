import { z } from 'zod';

export const updateScheema = z
  .object({
    first_name: z.string().min(3, 'Mínimo de 3 caracteres').optional(),
    last_name: z.string().min(3, 'Mínimo de 3 caracteres').optional(),
    email: z.string().email('E-mail inválido').optional(),
    birth_date: z.string().min(10, 'Data de nascimento inválida').optional(),
    password: z.string().optional(),
    confirmPassword: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

export type UpdateScheema = z.infer<typeof updateScheema>;
