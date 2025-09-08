"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ToggleThemeCardSkeleton } from "@/entities/settings/ui/skeleton/settings-skeleton";
import { ThemeSwitchCard } from "@/entities/settings/ui/theme-switch-card/theme-switch-card";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <ToggleThemeCardSkeleton />;
  }

  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return <ThemeSwitchCard isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />;
};
