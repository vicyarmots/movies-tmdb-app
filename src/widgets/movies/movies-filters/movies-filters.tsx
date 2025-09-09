import { useDiscoverFilterMoviesSWR } from "@/features/movies/movies-filters/model/hooks/use-discover-filter-movies-swr";
import { GenreFilter } from "@/features/movies/movies-filters/ui/genre/genre-filter";
import { ResetFilters } from "@/features/movies/movies-filters/ui/reset/reset-filters";
import { SortByFilter } from "@/features/movies/movies-filters/ui/sort-by/sort-by-filter";
import { SearchMoviesQuery } from "@/features/movies/search-movie-query/ui/search-movies-query/search-movies-query";
import { Movies } from "../movies";

export const MovieFiltersWidget = () => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <SearchMoviesQuery />
      </div>
      <GenreFilter />
      <SortByFilter />
      <ResetFilters />
    </div>
  );
};

export const FilteredMoviesWidget = () => {
  const { movies, isLoading, isError, totalPages, totalResults } = useDiscoverFilterMoviesSWR();

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
