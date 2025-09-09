import useSWR from "swr";
import { getMovieByIdDomain } from "@/processes/api/services/tmdb/domain/routes/get-movie-by-id/get-movie-by-id";
import { useWatchlistStore } from "../watchlist-store";

export const useWatchlistMoviesSWR = () => {
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
