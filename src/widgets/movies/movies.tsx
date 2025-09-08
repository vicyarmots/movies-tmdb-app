"use client";

import { Toaster } from "@ui/sonner";
import { MoviesNotFound } from "@/entities/movies/ui/not-found/not-found";
import { redirect } from "next/navigation";
import { ViewModeProvider } from "@/features/view-mode/ui/view-mode-provider";
import { MovieCard } from "../movie/movie-card/movie-card";
import { LayoutHeader } from "../main-layout/header/header";
import type { TMDBMovieTransformed } from "@/processes/api/types";
import { MoviesPagination } from "@/features/movies/pagintaion/movies-pagination";
// import { useMovieSearchStore } from "@/processes/api/search-movies-by-queries/search-movies-by-queries";
import { useMoviesTabs } from "@/features/movies/movies-tabs/model/hooks/use-movies-tab";
import { MovieGridSkeleton } from "@/entities/movies/ui/skeleton/movies-skeleton";
import { useViewModeStore } from "@/features/view-mode/model/view-mode-store";
import { MAXIMUM_TOTAL_PAGES } from "@/processes/api/constants";

interface MoviesProps {
  initialMovies: TMDBMovieTransformed[];
  initialTab: "popular" | "topRated" | "upcoming";
  initialPage: number;
}

export const Movies = ({ initialMovies, initialTab, initialPage }: MoviesProps) => {
  const {
    movies,
    isLoading,
    isError,
    currentTabTitle,
    totalPages,
    totalResults,
    currentPage,
    setCurrentPage,
  } = useMoviesTabs({
    initialMovies,
    initialTab,
    initialPage,
  });

  const { viewMode } = useViewModeStore();
  const handleMovieClick = (movie: TMDBMovieTransformed) => {
    redirect(`/movies/${movie.id}`);
  };

  return (
    <>
      <LayoutHeader activeTab={currentTabTitle} moviesLength={totalResults ?? null} />

      <div className="py-5">
        {isLoading ? (
          <MovieGridSkeleton viewMode={viewMode} />
        ) : isError ? (
          <MoviesNotFound isExist={false} />
        ) : movies.length > 0 ? (
          <ViewModeProvider>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick} />
            ))}
          </ViewModeProvider>
        ) : (
          <MoviesNotFound isExist={false} />
        )}
      </div>

      <Toaster />

      <MoviesPagination
        currentPage={currentPage}
        totalPages={Math.min(totalPages, MAXIMUM_TOTAL_PAGES)}
        onPageChange={setCurrentPage}
      />
    </>
  );
};
