import { Filter } from "lucide-react";
import { GenreFilter } from "@/features/movies/movies-filters/ui/genre/genre-filter";
import { PriorityFilter } from "@/features/movies/movies-filters/ui/priority/priority-filter";
import { SortByFilter } from "@/features/movies/movies-filters/ui/sort-by/sort-by-filter";
import { StatusFilter } from "@/features/movies/movies-filters/ui/status/status-filter";
import { ResetFilters } from "@/features/movies/movies-filters/ui/reset/reset-filters";
import { SearchMoviesQuery } from "@/features/movies/search-movie-query/ui/search-movies-query/search-movies-query";

export const MovieFilters = () => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <SearchMoviesQuery />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Filters</span>
        </div>
        <StatusFilter />
      </div>
      <GenreFilter />
      <PriorityFilter />
      <SortByFilter />
      <ResetFilters />
    </div>
  );
};
