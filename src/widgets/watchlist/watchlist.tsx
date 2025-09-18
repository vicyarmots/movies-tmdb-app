"use client";

import { Separator } from "@ui/separator";
import { useWatchlistMoviesSWR } from "@/features/user/watchlist/model/hooks/use-watchlist-swr";
import { ViewModeToggle } from "@/features/view-mode/ui/view-mode-toggle";
import { SidebarTrigger } from "@/shared/ui/sidebar";
import { RenderMovies } from "../movies/render-movies/render-movies";

export const WatchlistWidget = () => {
  const { movies, isLoading, isError } = useWatchlistMoviesSWR();

  return (
    <div className="w-full h-screen">
      <header className="py-2 flex items-center gap-5 pb-5">
        <SidebarTrigger className="sm:hidden border-2 w-12 h-10" />
        <ViewModeToggle />
        <h1 className="text-3xl font-bold">Watchlist</h1>
      </header>
      <Separator />
      <div className="w-full py-10">
        <RenderMovies movies={movies} isLoading={isLoading} isError={isError} />
      </div>
    </div>
  );
};
