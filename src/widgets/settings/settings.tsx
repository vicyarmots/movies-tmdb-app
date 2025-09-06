import { StatisticsCard } from "@/entities/settings/ui/statistics-card/statistics-card";
import { ThemeSwitchCard } from "@/features/settings/theme/ui/theme-switch-card/theme-switch-card";
import { Separator } from "@/shared/ui/separator";

export const Settings = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Customize your movie watchlist experience and view your statistics.
        </p>
      </div>
      <ThemeSwitchCard />
      <Separator />
      <StatisticsCard />
    </div>
  );
};
