import { GenreFilter } from "@/features/movies/movies-filters/ui/genre/genre-filter";
import { ResetFilters } from "@/features/movies/movies-filters/ui/reset/reset-filters";
import { SortByFilter } from "@/features/movies/movies-filters/ui/sort-by/sort-by-filter";
import { SearchMoviesQuery } from "@/features/movies/search-movie-query/ui/search-movies-query/search-movies-query";
import { Movies } from "../movies";
import { useDiscoverMovies } from "@/features/movies/movies-filters/model/use-discover-filter-movies";

export const MovieFiltersWidget = () => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <SearchMoviesQuery />
      </div>
      {/* <div className="space-y-2">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Filters</span>
        </div>
        <StatusFilter />
      </div> */}
      <GenreFilter />
      <SortByFilter />
      <ResetFilters />
    </div>
  );
};

export const FilteredMovies = () => {
  const { movies, isLoading, isError, totalPages, totalResults } = useDiscoverMovies();

  return (
    <Movies
      movies={movies}
      isLoading={isLoading}
      isError={isError}
      activeTab={null}
      totalPages={totalPages}
      totalResults={totalResults ?? 0}
    />
  );
};
