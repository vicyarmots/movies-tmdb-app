import { useRef } from "react";
import useSWR from "swr";
import { searchMovieByQueriesDomain } from "@/processes/api/services/tmdb/domain/routes/search-movies-by-queries/search-movies-by-queries";
import { useDebounce } from "@/shared/libs/hooks/use-debaunce";

export const useSearchMoviesQuerySWR = (query: string) => {
  const debouncedQuery = useDebounce(query, 500);
  const controllerRef = useRef<AbortController | null>(null);

  const { data, error, isLoading } = useSWR(
    debouncedQuery ? ["searchMovies", debouncedQuery] : null,
    async () => {
      controllerRef.current?.abort();

      const controller = new AbortController();
      controllerRef.current = controller;

      try {
        const response = await searchMovieByQueriesDomain({
          query: debouncedQuery,
          signal: controller.signal,
        });

        return response;
      } finally {
        controllerRef.current = null;
      }
    },
    { revalidateOnFocus: false },
  );

  return {
    movies: data?.movies ?? [],
    totalPages: data?.totalPages,
    totalResults: data?.totalResults,
    isLoading,
    isError: !!error,
  };
};
