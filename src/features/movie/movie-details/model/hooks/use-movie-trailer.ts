import useSWR from "swr";
import type { TMDBMovieVideo } from "@/processes/api/types";
import { getMovieOfficialTrailer } from "@/processes/api/services/get-movie-trailer/get-movie-official-trailer";

export const useMovieOfficialTrailer = (movieId: number) => {
  const { data, error, isValidating } = useSWR<TMDBMovieVideo | null>(
    movieId ? `movie-trailer-${movieId}` : null,
    () => getMovieOfficialTrailer(movieId),
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
