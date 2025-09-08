import { Movie } from "@/processes/api/services/tmdb/domain/custom.types";
import { useMoviesTabParams } from "./use-movies-tab-params";
import { useMoviesTabSWR } from "./use-movies-tab-swr";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (currentPage > 1) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  useEffect(() => {
    if (tabFromParams) {
      setCurrentPage(1);
    }
  }, [tabFromParams]);

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
    setCurrentPage,
  };
};
