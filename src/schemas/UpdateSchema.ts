import { z } from 'zod';

export const updateScheema = z
  .object({
    name: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().optional(),
    birthDate: z.string().optional(),
    password: z.string().optional(),
    confirmPassword: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

export type UpdateScheema = z.infer<typeof updateScheema>;
