import { useColorScheme } from 'nativewind';

import { useThemeStorage } from '@/contexts/useTheme';

export function useThemeChanger() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const { setTheme } = useThemeStorage();

  const handleThemeChange = () => {
    const newTheme = colorScheme === 'dark' ? 'light' : 'dark';
    setColorScheme(newTheme);
    setTheme(newTheme);
  };

  return { handleThemeChange, colorScheme, setColorScheme };
}
