import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name?: string;
  password?: string;
  created_at: string;
}

interface AuthState {
  user: User | null;
  bills: any[];
  cards: any[];
  transactions: any[];
  setUser: (user: User | null) => void;
  setBills: (bills: any[]) => void;
  setCards: (cards: any[]) => void;
  setTransactions: (transactions: any[]) => void;
  signOut: () => void;
}

export const useStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      bills: [],
      cards: [],
      transactions: [],
      setUser: (user) => set({ user }),
      setBills: (bills) => set({ bills }),
      setCards: (cards) => set({ cards }),
      setTransactions: (transactions) => set({ transactions }),
      signOut: () => set({ user: null, bills: [], cards: [], transactions: [] }),
    }),
    {
      name: 'finance-flow-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
