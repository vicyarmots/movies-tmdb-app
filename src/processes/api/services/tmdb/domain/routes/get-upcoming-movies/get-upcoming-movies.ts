import { getUpcomingMoviesOrigin } from "../../../origin/routes/get-upcoming-movies/get-upcoming-movies";
import { transformMovies } from "../../adapters/adapter-movies";
import type { MoviesResponse } from "../../custom.types";
import { getMoviesGenresDomain } from "../get-movies-genres/get-movies-genres";

interface Props {
  page: number;
}

export async function getUpcomingMoviesDomain({ page }: Props): Promise<MoviesResponse> {
  const data = await getUpcomingMoviesOrigin({ page, options: { cache: "no-store" } });
  const movieGenresArray = await getMoviesGenresDomain();

  const movieGenresMap = Object.fromEntries(movieGenresArray.map((g) => [g.id, g.name]));

  return {
    movies: transformMovies(data, movieGenresMap).filter(
      (movie) => movie.popularity && movie.posterPath,
    ),
    totalPages: data.total_pages,
    totalResults: data.total_results,
  };
}
