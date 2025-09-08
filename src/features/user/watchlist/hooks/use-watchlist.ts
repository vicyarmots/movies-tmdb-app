import { getMovieByIdDomain } from "@/processes/api/services/tmdb/domain/routes/get-movie-by-id/get-movie-by-id";
import useSWR from "swr";
import { useWatchlistStore } from "../model/watchlist-store";

export const useWatchlistMovies = () => {
  const ids = useWatchlistStore((state) => state.ids);

  const { data, error, isLoading } = useSWR(
    ids.length ? ["watchlistMovies", ids] : null,
    async () => {
      const movies = await Promise.all(ids.map((id) => getMovieByIdDomain({ id: id.toString() })));
      return movies;
    },
    {
      revalidateOnFocus: false,
      keepPreviousData: true,
    },
  );

  return {
    movies: data ?? [],
    isLoading,
    isError: !!error,
  };
};
