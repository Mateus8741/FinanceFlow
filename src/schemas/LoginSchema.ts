import { z } from 'zod';

export const loginScheema = z.object({
  email: z.string().email('Credenciais inválidas'),
  password: z.string().min(6, 'Credenciais inválidas'),
});

export type LoginScheema = z.infer<typeof loginScheema>;
