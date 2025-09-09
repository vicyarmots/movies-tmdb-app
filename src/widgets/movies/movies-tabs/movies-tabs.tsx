"use client";

import { useMoviesTabs } from "@/features/movies/movies-tabs/model/hooks/use-movies-tab";
import type { ActiveTabKey } from "@/features/movies/movies-tabs/model/types/types";
import type { Movie } from "@/processes/api/services/tmdb/domain/custom.types";
import { Movies } from "../movies";

interface Props {
  initialMovies: Movie[];
  initialTab: "popular" | "topRated" | "upcoming";
  initialPage: number;
  initialTotalPages?: number | null;
}

export function MoviesTabsWidget({ initialMovies, initialTab, initialPage }: Props) {
  const {
    movies,
    isLoading,
    isError,
    totalPages,
    totalResults,
    currentPage,
    currentTab,
    setCurrentPage,
  } = useMoviesTabs({
    initialMovies,
    initialTab,
    initialPage,
  });

  return (
    <Movies
      movies={movies}
      isLoading={isLoading}
      isError={isError}
      activeTab={currentTab as ActiveTabKey}
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalResults={totalResults ?? 0}
    />
  );
}
