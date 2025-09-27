import { useDiscoverFilterMoviesSWR } from "@/features/movies/movies-filters/hooks/use-discover-filter-movies-swr";
import { Movies } from "../../movies";

export const MoviesFilteredViewWidget = () => {
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
