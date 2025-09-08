import useSWR from "swr";
import type { GetMoviesByTabsResponse } from "@/processes/api/types";
import { getPopularMovies } from "@/processes/api/services/get-popular-movies/get-popular-movies";
import { getTopRatedMovies } from "@/processes/api/services/get-top-rated-movies/get-top-rated-movies";
import { getUpcomingMovies } from "@/processes/api/services/get-upcoming-movies/get-upcoming-movies";

export type MoviesTab = "popular" | "topRated" | "upcoming";

type RequestSWRProps = {
  tab: MoviesTab;
  page: number;
} & { fallbackData?: GetMoviesByTabsResponse };

const fetchers: Record<
  MoviesTab,
  ({ page }: { page: number }) => Promise<GetMoviesByTabsResponse>
> = {
  popular: getPopularMovies,
  topRated: getTopRatedMovies,
  upcoming: getUpcomingMovies,
};

export const useMoviesTabSWR = ({ tab, page, fallbackData }: RequestSWRProps) => {
  const { data, error, isLoading } = useSWR<GetMoviesByTabsResponse>(
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
