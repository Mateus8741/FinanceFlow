import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type ThemeProps = {
  theme: 'light' | 'dark' | undefined;
  setTheme: (theme: 'light' | 'dark' | undefined) => void;
};

const useThemeStore = create<ThemeProps>()(
  persist(
    (set) => ({
      theme: undefined,
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export function useThemeStorage() {
  const { theme, setTheme } = useThemeStore();

  return { theme, setTheme };
}
