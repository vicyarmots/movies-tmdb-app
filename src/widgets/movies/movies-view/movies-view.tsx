"use client";

import { MoviesSearchWidget } from "../movies-search/movies-search";
import { MoviesTabsWidget } from "../movies-tabs/movies-tabs";
import type { Movie } from "@/processes/api/services/tmdb/custom/custom.types";
import {
  hasActiveFilters,
  useDiscoverFilterStore,
} from "@/features/movies/movies-filters/model/use-discover-filter-store";
import { FilteredMovies } from "../movies-filters/movies-filters";
import { useSearchMoviesQueryStore } from "@/features/movies/search-movie-query/model/hooks/use-search-movies-query-store";

interface MoviesProviderProps {
  initialMovies: Movie[];
  initialTab: "popular" | "topRated" | "upcoming";
  initialPage: number;
  initialTotalResults?: number | null;
  initialTotalPages?: number | null;
}

export function MoviesViewWidget({
  initialMovies,
  initialTab,
  initialPage,
  initialTotalPages = null,
}: MoviesProviderProps) {
  const { searchQuery } = useSearchMoviesQueryStore();
  const { filters } = useDiscoverFilterStore();
  const showFiltered = hasActiveFilters(filters);

  return (
    <div>
      {searchQuery ? (
        <MoviesSearchWidget />
      ) : showFiltered ? (
        <FilteredMovies />
      ) : (
        <MoviesTabsWidget
          initialMovies={initialMovies}
          initialTab={initialTab}
          initialPage={initialPage}
          initialTotalPages={initialTotalPages}
        />
      )}
    </div>
  );
}
