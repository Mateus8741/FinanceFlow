import { z } from 'zod';

export const updateScheema = z
  .object({
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    email: z.string().optional(),
    birth_date: z.string().optional(),
    password: z.string().optional(),
    confirmPassword: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

export type UpdateScheema = z.infer<typeof updateScheema>;
