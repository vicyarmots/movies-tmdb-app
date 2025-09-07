"use client";

import { SidebarTrigger } from "@ui/sidebar";
import { Toaster } from "@ui/sonner";
import { MoviesNotFound } from "@/entities/movies/ui/not-found/not-found";
import type { Movie } from "@/shared/utils/movies-data/movies-data";
import { redirect } from "next/navigation";
import { ROUTER_PATHS } from "@/shared/libs/router/router";
import { ViewModeToggle } from "@/features/view-mode/ui/view-mode-toggle";
import { ViewModeProvider } from "@/features/view-mode/ui/view-mode-provider";
import { MovieCard } from "../movie/movie-card/movie-card";
import { useMoviesFiltersStore } from "@/features/movies/movies-filters/model/use-movies-filters-store";
import { useMovieDetailsStore } from "@/features/movie/movie-details/model/use-movie-details-store";
import { useMoviesStore } from "@/shared/libs/store/use-movies-store";
import { LayoutHeader } from "../header/header";
import { FC, useState } from "react";
import { TMDBMovieTransformed } from "@/processes/api/types";
import { MoviesPagination } from "@/features/movies/pagintaion/movies-pagination";

// type MoviesProps = {
//   moviesTMDB: TMDBMovieTransformed[];
// };

export const Movies = () => {
  const { setSelectedMovie } = useMovieDetailsStore();
  const { getFilteredMovies } = useMoviesFiltersStore();
  const { movies } = useMoviesStore();
  const filteredMovies = getFilteredMovies();

  const [currentPage, setCurrentPage] = useState(1);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie.id);
    redirect(ROUTER_PATHS.MOVIE_BY_ID);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <LayoutHeader moviesLength={filteredMovies.length} />

        <div className="flex items-center gap-2">
          <SidebarTrigger className="sm:hidden" />
          <ViewModeToggle />
        </div>
      </div>

      {filteredMovies.length > 0 ? (
        <ViewModeProvider>
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick} />
          ))}
        </ViewModeProvider>
      ) : (
        <MoviesNotFound isExist={!!movies.length} />
      )}
      <Toaster />
      <MoviesPagination currentPage={currentPage} totalPages={20} onPageChange={setCurrentPage} />
    </>
  );
};
