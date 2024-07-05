import { create } from 'zustand';

type ThemeProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

const useThemeStore = create<ThemeProps>((set) => ({
  theme: '',
  setTheme: (theme) => set({ theme }),
}));

export function useThemeStorage() {
  const { theme, setTheme } = useThemeStore();

  return { theme, setTheme };
}
