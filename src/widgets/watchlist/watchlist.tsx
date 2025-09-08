"use client";

import { useWatchlistMovies } from "@/features/user/watchlist/hooks/use-watchlist";
import { Separator } from "@ui/separator";
import { Movies } from "../movies/movies";
import { useWatchlistStore } from "@/features/user/watchlist/model/watchlist-store";
import { SidebarTrigger } from "@/shared/ui/sidebar";

export const WatchlistWidget = () => {
  const { ids } = useWatchlistStore();
  const { movies, isLoading, isError } = useWatchlistMovies();

  return (
    <div className="w-full h-screen">
      <header className="py-2 flex items-center gap-5">
        <SidebarTrigger className="sm:hidden border-2 w-12 h-10" />
        <h1 className="text-3xl font-bold">Watchlist</h1>
      </header>
      <Separator />
      <div className="w-full py-2">
        <Movies
          movies={movies}
          isLoading={isLoading}
          isError={isError}
          totalResults={ids.length}
          withHeader={false}
        />
      </div>
    </div>
  );
};
