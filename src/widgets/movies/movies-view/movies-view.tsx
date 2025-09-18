"use client";

import { useDiscoverFilterStore } from "@/features/movies/movies-filters/model/discover-filter-store";
import { useSearchMoviesQueryStore } from "@/features/movies/search-movies/model/movies-query-store";
import type { Movie } from "@/processes/api/services/tmdb/domain/custom.types";
import { MoviesFilteredViewWidget } from "./filtered/movies-filtered-view";
import { MoviesSearchViewWidget } from "./search/movies-search-view";
import { MoviesTabsViewWidget } from "./tabs/movies-tabs-view";

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
        <MoviesSearchViewWidget />
      ) : showFiltered ? (
        <MoviesFilteredViewWidget />
      ) : (
        <MoviesTabsViewWidget
          initialMovies={initialMovies}
          initialTab={initialTab}
          initialPage={initialPage}
          initialTotalPages={initialTotalPages}
        />
      )}
    </div>
  );
}
