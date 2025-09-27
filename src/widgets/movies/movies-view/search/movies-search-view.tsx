"use client";

import { useSearchMoviesQuerySWR } from "@/features/movies/search-movies/hooks/use-search-movies-query-swr";
import { useSearchMoviesQueryStore } from "@/features/movies/search-movies/model/movies-query-store";
import { Movies } from "../../movies";

export function MoviesSearchViewWidget() {
  const { searchQuery } = useSearchMoviesQueryStore();
  const { movies, isLoading, isError, totalResults } = useSearchMoviesQuerySWR(searchQuery);

  return (
    <Movies
      movies={movies}
      isLoading={isLoading}
      isError={isError}
      activeTab={null}
      totalResults={totalResults ?? 0}
    />
  );
}
