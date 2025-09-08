import {
  activeTab as activeTabKey,
  ActiveTabKey,
} from "@/features/movies/movies-tabs/model/types/types";
import { MoviesTabs } from "@/features/movies/movies-tabs/ui/movies-tabs/movies-tabs";
import { ViewModeToggle } from "@/features/view-mode/ui/view-mode-toggle";
import { SidebarTrigger } from "@/shared/ui/sidebar";
import { Skeleton } from "@/shared/ui/skeleton";
import type { FC } from "react";

export type ActiveTabValue = (typeof activeTabKey)[keyof typeof activeTabKey];

type Props = {
  moviesLength: number | null;
  activeTab: ActiveTabKey | null;
};

export const MoviesHeaderWidget: FC<Props> = ({ activeTab, moviesLength }) => {
  const showMoviesCount = activeTab && !!moviesLength;
  const activeTabLabel = activeTab && activeTabKey[activeTab];

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {activeTabLabel ? `${activeTabLabel} movies` : "Movies"}
          </h1>

          {activeTab && (
            <div className="text-muted-foreground">
              {showMoviesCount ? (
                `${moviesLength} ${moviesLength === 1 ? "movie" : "movies"}`
              ) : (
                <Skeleton className="w-30 h-5" />
              )}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <SidebarTrigger className="sm:hidden border-1 w-12 h-10" />
          <ViewModeToggle />
        </div>
      </div>
      {activeTab && <MoviesTabs />}
    </>
  );
};
