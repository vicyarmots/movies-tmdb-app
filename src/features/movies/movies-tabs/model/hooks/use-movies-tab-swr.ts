import type { MoviesResponse } from "@/processes/api/services/tmdb/custom/custom.types";
import { getPopularMoviesCustom } from "@/processes/api/services/tmdb/custom/routes/get-popular-movies/get-popular-movies";
import { getTopRatedMoviesCustom } from "@/processes/api/services/tmdb/custom/routes/get-top-rated-movies/get-top-rated-movies";
import { getUpcomingMoviesCustom } from "@/processes/api/services/tmdb/custom/routes/get-upcoming-movies/get-upcoming-movies";
import useSWR from "swr";

export type MoviesTab = "popular" | "topRated" | "upcoming";

type RequestSWRProps = {
  tab: MoviesTab;
  page: number;
} & { fallbackData?: MoviesResponse };

const fetchers: Record<MoviesTab, ({ page }: { page: number }) => Promise<MoviesResponse>> = {
  popular: getPopularMoviesCustom,
  topRated: getTopRatedMoviesCustom,
  upcoming: getUpcomingMoviesCustom,
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
