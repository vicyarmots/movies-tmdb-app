"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Label } from "@/shared/ui/label";
import { Switch } from "@/shared/ui/switch";
import { ToggleThemeCardSkeleton } from "@/entities/settings/ui/skeleton/settings-skeleton";

export const ThemeSwitchCard = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <ToggleThemeCardSkeleton />;
  }

  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {isDarkTheme ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          Theme
        </CardTitle>
        <CardDescription>Choose your preferred theme for the app.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="dark-mode">Dark mode</Label>
            <div className="text-sm text-muted-foreground">
              {isDarkTheme ? "Dark theme is enabled" : "Light theme is enabled"}
            </div>
          </div>
          <Switch id="dark-mode" checked={isDarkTheme} onCheckedChange={toggleTheme} />
        </div>
      </CardContent>
    </Card>
  );
};
