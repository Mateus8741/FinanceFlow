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

async function ResetPassword(email: string) {
  return await supabase.auth.resetPasswordForEmail(email);
}

export interface AddBillPropsApi {
  bill_id: string;
  bank_name: string;
  transaction_name: string;
  value: number;
  transacion_type: 'income' | 'outcome' | null;
  payment_type: string;
}

async function AddBill(data: AddBillPropsApi) {
  return await supabase.from('Bills').insert({
    bill_id: data.bill_id,
    bank_name: data.bank_name,
    transaction_name: data.transaction_name,
    value: data.value,
    transacion_type: data.transacion_type,
    payment_type: data.payment_type,
  });
}

export function UseApi() {
  return {
    Login,
    Logout,
    Register,
    ResetPassword,
    AddBill,
  };
}
