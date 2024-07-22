import { z } from 'zod';

export const registerScheema = z
  .object({
    name: z.string().min(4, 'Nome precisa ser preenchido'),
    lastName: z.string().min(4, 'Sobrenome precisa ser preenchido'),
    email: z.string().email('Endereço de e-mail inválido'),
    birthDate: z.string().min(10, 'Data de nascimento inválida'),
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

export type RegisterScheema = z.infer<typeof registerScheema>;
