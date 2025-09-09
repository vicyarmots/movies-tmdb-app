"use client";

import type { ActiveTabKey } from "@/features/movies/movies-tabs/model/types/types";
import { Pagination } from "@/features/movies/pagintaion/ui/pagination";
import { MAXIMUM_TOTAL_PAGES } from "@/features/movies/pagintaion/utils/constants";
import type { Movie } from "@/processes/api/services/tmdb/domain/custom.types";
import { MoviesHeaderWidget } from "./header/header";
import { RenderMovies } from "./render-movies/render-movies";

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
  return (
    <>
      <MoviesHeaderWidget moviesLength={totalResults} activeTab={activeTab ?? null} />
      <div className="py-5">
        <RenderMovies movies={movies} isLoading={isLoading} isError={isError} />
      </div>
      {totalPages && currentPage && onPageChange && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.min(totalPages, MAXIMUM_TOTAL_PAGES)}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
}
