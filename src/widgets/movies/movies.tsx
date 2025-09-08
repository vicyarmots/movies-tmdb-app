"use client";
import { MoviesNotFound } from "@/entities/movies/ui/not-found/not-found";
import { MovieGridSkeleton } from "@/entities/movies/ui/skeleton/movies-skeleton";
import { useViewModeStore } from "@/features/view-mode/model/view-mode-store";
import { ViewModeProvider } from "@/features/view-mode/ui/view-mode-provider";
import { redirect } from "next/navigation";
import { MovieCardWidget } from "../movie/movie-card/movie-card";
import { MoviesPagination } from "@/features/movies/pagintaion/movies-pagination";
import type { Movie } from "@/processes/api/services/tmdb/custom/custom.types";
import { MAXIMUM_TOTAL_PAGES } from "@/features/movies/pagintaion/constants";
import { MoviesHeaderWidget } from "./header/header";
import type { ActiveTabKey } from "@/features/movies/movies-tabs/model/types/types";

interface MoviesProps {
  movies: Movie[];
  isLoading: boolean;
  isError: boolean;
  totalPages?: number;
  totalResults: number;
  currentPage?: number;
  activeTab?: ActiveTabKey | null;
  onPageChange?: (page: number) => void;
}

type MovieStatus = "loading" | "error" | "empty" | "success";

export function getMoviesStatusRequest(
  isLoading: boolean,
  isError: boolean,
  movies: Movie[],
): MovieStatus {
  if (isLoading) return "loading";
  if (isError) return "error";
  if (!movies.length) return "empty";
  return "success";
}

export function Movies({
  movies,
  isLoading,
  isError,
  totalPages,
  totalResults,
  currentPage,
  activeTab,
  onPageChange,
}: MoviesProps) {
  const { viewMode } = useViewModeStore();
  const handleMovieClick = (movie: Movie) => {
    redirect(`/discover/${movie.id}`);
  };

  const statusRequest = getMoviesStatusRequest(isLoading, isError, movies);

  const renderMovies = {
    loading: <MovieGridSkeleton viewMode={viewMode} />,
    error: <MoviesNotFound isExist={false} />,
    empty: <MoviesNotFound isExist={false} />,
    success: (
      <ViewModeProvider>
        {movies.map((movie) => (
          <MovieCardWidget key={movie.id} movie={movie} onClick={handleMovieClick} />
        ))}
      </ViewModeProvider>
    ),
  };

  return (
    <>
      <MoviesHeaderWidget moviesLength={totalResults} activeTab={activeTab ?? null} />
      <div className="py-5">{renderMovies[statusRequest]}</div>
      {totalPages && currentPage && onPageChange && (
        <MoviesPagination
          currentPage={currentPage}
          totalPages={Math.min(totalPages, MAXIMUM_TOTAL_PAGES)}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
}
