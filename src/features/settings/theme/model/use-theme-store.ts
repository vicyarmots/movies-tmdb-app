import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkTheme: true,
      toggleTheme: () =>
        set((state) => {
          const newTheme = !state.isDarkTheme;
          if (newTheme) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
          return { isDarkTheme: newTheme };
        }),
    }),
    {
      name: "theme-storage",
    },
  ),
);
