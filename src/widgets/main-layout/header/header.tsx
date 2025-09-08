import { activeTab } from "@/features/movies/movies-tabs/model/types/types";
import { MoviesTabs } from "@/features/movies/movies-tabs/ui/movies-tabs/movies-tabs";
import { ViewModeToggle } from "@/features/view-mode/ui/view-mode-toggle";
import { SidebarTrigger } from "@/shared/ui/sidebar";
import { Skeleton } from "@/shared/ui/skeleton";
import type { FC } from "react";

type ActiveTabValue = (typeof activeTab)[keyof typeof activeTab];

type LayoutHeaderProps = {
  moviesLength: number | null;
  activeTab: ActiveTabValue;
};

export const LayoutHeader: FC<LayoutHeaderProps> = ({ activeTab, moviesLength }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">{activeTab} movies</h1>
          {!moviesLength ? (
            <Skeleton className="w-30 h-5" />
          ) : (
            <p className="text-muted-foreground">
              {moviesLength} {moviesLength === 1 ? "movie" : "movies"}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <SidebarTrigger className="sm:hidden border-2 w-12 h-10" />
          <ViewModeToggle />
        </div>
      </div>
      <MoviesTabs />
    </>
  );
};
