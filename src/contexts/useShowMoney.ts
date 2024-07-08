import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type ShowProps = {
  show: boolean;
  setShow: (show: boolean) => void;
};

const useShowStore = create<ShowProps>()(
  persist(
    (set) => ({
      show: false,
      setShow: (show) => set({ show }),
    }),
    {
      name: 'show-money-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export function useShowMoneyStorage() {
  const { show, setShow } = useShowStore();

  return { show, setShow };
}
