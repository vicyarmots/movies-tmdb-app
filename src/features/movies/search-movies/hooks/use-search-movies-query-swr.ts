import { searchMovieByQueriesDomain } from "@/processes/api/services/tmdb/domain/routes/search-movies-by-queries/search-movies-by-queries";
import { useDebouncedSWR } from "@/shared/libs/hooks/use-debounced-swr";

export const useSearchMoviesQuerySWR = (query: string) => {
  const { data, isLoading, isError } = useDebouncedSWR({
    key: query,
    delay: 500,
    fetcher: (signal) => searchMovieByQueriesDomain({ query, signal }),
  });

  return {
    movies: data?.movies ?? [],
    totalPages: data?.totalPages,
    totalResults: data?.totalResults,
    isLoading,
    isError,
  };
};
