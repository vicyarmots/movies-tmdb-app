import useSWR from "swr";
import { getMovieOfficialTrailerDomain } from "@/processes/api/services/tmdb/domain/routes/get-movie-trailer/get-movie-official-trailer";
import type { MovieVideo } from "@/processes/api/services/tmdb/domain/custom.types";

export const useMovieOfficialTrailer = (movieId: number) => {
  const { data, error, isValidating } = useSWR<MovieVideo | null>(
    movieId ? `movie-trailer-${movieId}` : null,
    () => getMovieOfficialTrailerDomain(movieId),
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
