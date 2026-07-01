const THEME_KEY = 'theme';

export const themeStorage = {
  get: (): 'light' | 'dark' => (localStorage.getItem(THEME_KEY) as 'light' | 'dark') || 'light',
  set: (theme: 'light' | 'dark') => localStorage.setItem(THEME_KEY, theme),
};