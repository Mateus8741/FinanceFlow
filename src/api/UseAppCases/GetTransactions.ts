import { useStore } from '@/store/useStore';

export async function GetTransactions() {
  const transactions = useStore.getState().transactions;
  return { data: transactions, error: null };
}
