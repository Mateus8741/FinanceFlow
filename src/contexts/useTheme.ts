import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type ThemeProps = {
  theme: 'light' | 'dark' | 'system' | undefined;
  setTheme: (theme: 'light' | 'dark' | 'system' | undefined) => void;
};

const useThemeStore = create<ThemeProps>()(
  persist(
    (set) => ({
      theme: 'system',
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
