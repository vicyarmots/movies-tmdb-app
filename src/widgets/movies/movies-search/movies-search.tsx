"use client";

import { useSearchMovies } from "@/features/movies/search-movie-query/model/hooks/use-search-movies-query";
import { useSearchMoviesQueryStore } from "@/features/movies/search-movie-query/model/hooks/use-search-movies-query-store";
import { Movies } from "../movies";

export function MoviesSearchWidget() {
  const { searchQuery } = useSearchMoviesQueryStore();
  const { movies, isLoading, isError, totalResults } = useSearchMovies(searchQuery);

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
