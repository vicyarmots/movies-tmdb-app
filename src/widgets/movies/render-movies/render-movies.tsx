import { redirect } from "next/navigation";
import type { FC } from "react";
import { MoviesNotFound } from "@/entities/movies/ui/not-found/not-found";
import { MovieGridSkeleton } from "@/entities/movies/ui/skeleton/movies-skeleton";
import { useViewModeStore } from "@/features/view-mode/model/view-mode-store";
import { ViewModeProvider } from "@/features/view-mode/ui/view-mode-provider";
import type { Movie } from "@/processes/api/services/tmdb/domain/custom.types";
import { MovieCardWidget } from "@/widgets/movie/movie-card/movie-card";

type MovieStatus = "loading" | "error" | "empty" | "success";

interface Props {
  movies: Movie[];
  isLoading: boolean;
  isError: boolean;
}

export function getMoviesStatusRequest({ movies, isLoading, isError }: Props): MovieStatus {
  if (isLoading) return "loading";
  if (isError) return "error";
  if (!movies.length) return "empty";
  return "success";
}

export const RenderMovies: FC<Props> = ({ movies, isLoading, isError }) => {
  const statusRequest = getMoviesStatusRequest({ movies, isLoading, isError });
  const { viewMode } = useViewModeStore();

  const renderMovies = {
    loading: <MovieGridSkeleton viewMode={viewMode} />,
    error: <MoviesNotFound isExist={false} />,
    empty: <MoviesNotFound isExist={false} />,
    success: (
      <ViewModeProvider>
        {movies.map((movie) => (
          <MovieCardWidget
            key={movie.id}
            movie={movie}
            onClick={({ id }) => redirect(`/discover/${id}`)}
          />
        ))}
      </ViewModeProvider>
    ),
  };

  return renderMovies[statusRequest];
};
