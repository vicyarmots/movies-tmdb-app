import useSWR from "swr";
import { getMovieOfficialTrailerCustom } from "@/processes/api/services/tmdb/custom/routes/get-movie-trailer/get-movie-official-trailer";
import type { MovieVideo } from "@/processes/api/services/tmdb/custom/custom.types";

export const useMovieOfficialTrailer = (movieId: number) => {
  const { data, error, isValidating } = useSWR<MovieVideo | null>(
    movieId ? `movie-trailer-${movieId}` : null,
    () => getMovieOfficialTrailerCustom(movieId),
    {
      revalidateOnFocus: false,
      keepPreviousData: true,
    },
  );

  return {
    trailer: data,
    isLoading: isValidating,
    isError: !!error,
  };
};
