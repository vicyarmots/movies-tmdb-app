import { useLayoutEffect } from "react";
import { useThemeStore } from "../model/use-theme-store";

export const useApplyTheme = () => {
  const { isDarkTheme } = useThemeStore();

  useLayoutEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);
};
