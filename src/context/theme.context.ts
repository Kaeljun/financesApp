import {create} from 'zustand';

type ThemeColors =
  | 'pink'
  | 'red'
  | 'yellow'
  | 'green'
  | 'purple'
  | 'blue'
  | 'neutral';

type ThemeStore = {
  themeColor: ThemeColors;
  changeTheme: (theme: ThemeColors) => void;
};

export const useThemeStore = create<ThemeStore>()(set => ({
  themeColor: 'neutral',
  changeTheme: (themeColor: ThemeColors) => set({themeColor}),
}));
