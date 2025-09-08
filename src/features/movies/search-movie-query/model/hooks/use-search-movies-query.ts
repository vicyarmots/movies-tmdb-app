import { searchMovieByQueriesCustom } from "@/processes/api/services/tmdb/custom/routes/search-movies-by-queries/search-movies-by-queries";
import { useDebounce } from "@/shared/libs/hooks/use-debaunce";
import { useRef } from "react";
import useSWR from "swr";
import { create } from "zustand";

export const useSearchMoviesQueryStore = create<{
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}>((set) => ({
  searchQuery: "",
  setSearchQuery: (q: string) => set({ searchQuery: q }),
}));

export const useSearchMovies = (query: string) => {
  const debouncedQuery = useDebounce(query, 500);
  const controllerRef = useRef<AbortController | null>(null);

  const { data, error, isLoading } = useSWR(
    debouncedQuery ? ["searchMovies", debouncedQuery] : null,
    async () => {
      controllerRef.current?.abort();

      const controller = new AbortController();
      controllerRef.current = controller;

      try {
        const response = await searchMovieByQueriesCustom({
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
