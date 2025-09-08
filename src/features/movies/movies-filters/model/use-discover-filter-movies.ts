import useSWR from "swr";
import { useDiscoverFilterStore } from "./use-discover-filter-store";
import { discoverMoviesCustom } from "@/processes/api/services/tmdb/custom/routes/discover-movies/discover-movies";

export const useDiscoverMovies = () => {
  const { filters } = useDiscoverFilterStore();

  const { data, error, isLoading } = useSWR(
    ["discoverMovies", filters],
    () => discoverMoviesCustom({ queries: filters, options: { cache: "no-store" } }),
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
