import { GenreFilter } from "@/features/movies/movies-filters/ui/genre/genre-filter";
import { ResetFilters } from "@/features/movies/movies-filters/ui/reset/reset-filters";
import { SortByFilter } from "@/features/movies/movies-filters/ui/sort-by/sort-by-filter";
import { SearchMoviesQuery } from "@/features/movies/search-movies/ui/search-movies-query/search-movies-query";

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
