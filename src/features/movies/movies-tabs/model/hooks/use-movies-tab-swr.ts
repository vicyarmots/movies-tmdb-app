import type { MoviesResponse } from "@/processes/api/services/tmdb/domain/custom.types";
import { getPopularMoviesDomain } from "@/processes/api/services/tmdb/domain/routes/get-popular-movies/get-popular-movies";
import { getTopRatedMoviesDomain } from "@/processes/api/services/tmdb/domain/routes/get-top-rated-movies/get-top-rated-movies";
import { getUpcomingMoviesDomain } from "@/processes/api/services/tmdb/domain/routes/get-upcoming-movies/get-upcoming-movies";
import useSWR from "swr";

export type MoviesTab = "popular" | "topRated" | "upcoming";

type RequestSWRProps = {
  tab: MoviesTab;
  page: number;
} & { fallbackData?: MoviesResponse };

const fetchers: Record<MoviesTab, ({ page }: { page: number }) => Promise<MoviesResponse>> = {
  popular: getPopularMoviesDomain,
  topRated: getTopRatedMoviesDomain,
  upcoming: getUpcomingMoviesDomain,
};

export const useMoviesTabSWR = ({ tab, page, fallbackData }: RequestSWRProps) => {
  const { data, error, isLoading } = useSWR<MoviesResponse>(
    [tab, page] as [MoviesTab, number],
    ([currentTab, currentPage]: [MoviesTab, number]) => fetchers[currentTab]({ page: currentPage }),
    {
      revalidateOnFocus: false,
      fallbackData,
    },
  );

  return {
    movies: data?.movies ?? [],
    isLoading,
    isError: !!error,
    totalPages: data?.totalPages ?? 20,
    totalResults: data?.totalResults,
  };
};
