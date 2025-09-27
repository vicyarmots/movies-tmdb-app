import useSWR from "swr";
import { discoverMoviesDomain } from "@/processes/api/services/tmdb/domain/routes/discover-movies/discover-movies";
import { useDiscoverFilterStore } from "../model/discover-filter-store";

export const useDiscoverFilterMoviesSWR = () => {
  const { filters } = useDiscoverFilterStore();

  const { data, error, isLoading } = useSWR(
    ["discoverMovies", filters],
    () => discoverMoviesDomain({ queries: filters, options: { cache: "no-store" } }),
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
