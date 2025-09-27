import { useState } from "react";
import type { Movie } from "@/processes/api/services/tmdb/domain/custom.types";
import { useMoviesTabParams } from "./use-movies-tab-params";
import { useMoviesTabSWR } from "./use-movies-tab-swr";

type UseMoviesTabsProps = {
  initialMovies?: Movie[];
  initialTab?: string;
  initialPage?: number;
  initialTotalPages?: number;
  initialTotalResults?: number;
};

export const useMoviesTabs = ({
  initialMovies = [],
  initialTab,
  initialPage = 1,
  initialTotalPages = 20,
  initialTotalResults = 0,
}: UseMoviesTabsProps = {}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const { currentTab: tabFromParams, currentTabTitle, handleTabClick } = useMoviesTabParams();

  const { movies, isLoading, isError, totalPages, totalResults } = useMoviesTabSWR({
    tab: tabFromParams,
    page: currentPage,
    fallbackData: {
      movies: initialMovies,
      totalPages: initialTotalPages,
      totalResults: initialTotalResults,
    },
  });

  const onChangeCurrentPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    currentTab: tabFromParams ?? initialTab,
    currentTabTitle,
    handleTabClick,
    movies,
    isLoading,
    isError,
    totalPages,
    totalResults,
    currentPage,
    setCurrentPage: onChangeCurrentPage,
  };
};
