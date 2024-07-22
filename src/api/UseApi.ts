import { LoginScheema } from '@/schemas';
import { supabase } from '@/utils/supabase';

async function Login({ email, password }: LoginScheema) {
  return await supabase.auth.signInWithPassword({ email, password });
}

async function Logout() {
  return await supabase.auth.signOut();
}

export interface RegisterProps {
  email: string;
  password: string;
  birthDate: string;
  name: string;
  lastName: string;
}

async function Register({ email, password, birthDate, name, lastName }: RegisterProps) {
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: name,
        last_name: lastName,
        birth_date: birthDate,
      },
    },
  });
}

export function UseApi() {
  return {
    Login,
    Logout,
    Register,
  };
}
