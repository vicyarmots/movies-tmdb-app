import { Moon, Sun } from "lucide-react";
import type { FC } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Label } from "@/shared/ui/label";
import { Switch } from "@/shared/ui/switch";

interface Props {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const ThemeSwitchCard: FC<Props> = ({ isDarkTheme, toggleTheme }) => {
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
