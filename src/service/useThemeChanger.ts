import { useColorScheme } from 'nativewind';

import { useThemeStorage } from '@/contexts/useTheme';

export function useThemeChanger() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const { setTheme } = useThemeStorage();

  const handleThemeChange = (theme: 'light' | 'dark' | 'system') => {
    setColorScheme(theme);
    setTheme(theme);
  };

  return { handleThemeChange, colorScheme, setColorScheme };
}
