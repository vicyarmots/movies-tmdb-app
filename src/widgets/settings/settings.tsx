import { StatisticsCard } from "@/entities/settings/ui/statistics-card/statistics-card";
import { ThemeSwitch } from "@/features/settings/theme/model/theme-switch";
import { Separator } from "@/shared/ui/separator";
import { SidebarTrigger } from "@/shared/ui/sidebar";

export const SettingsWidget = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <SidebarTrigger className="sm:hidden border-2 w-12 h-10" />
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Domainize your movie watchlist experience and view your statistics.
        </p>
      </div>
      <ThemeSwitch />
      <Separator />
      <StatisticsCard />
    </div>
  );
};
