"use client";

import { useDiscoverFilterStore } from "@/features/movies/movies-filters/model/discover-filter-store";
import { useSearchMoviesQueryStore } from "@/features/movies/search-movie-query/model/movies-query-store";
import type { Movie } from "@/processes/api/services/tmdb/domain/custom.types";
import { FilteredMoviesWidget } from "../movies-filters/movies-filters";
import { MoviesSearchWidget } from "../movies-search/movies-search";
import { MoviesTabsWidget } from "../movies-tabs/movies-tabs";

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
  const { hasActiveFilters } = useDiscoverFilterStore();
  const showFiltered = hasActiveFilters();

  return (
    <div>
      {searchQuery ? (
        <MoviesSearchWidget />
      ) : showFiltered ? (
        <FilteredMoviesWidget />
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
