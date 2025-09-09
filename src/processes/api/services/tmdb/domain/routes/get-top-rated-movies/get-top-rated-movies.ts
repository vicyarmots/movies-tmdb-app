import { getTopRatedMoviesOrigin } from "../../../origin/routes/get-top-rated-movies/get-top-rated-movies";
import { transformMovies } from "../../adapters/adapter-movies";
import type { MoviesResponse } from "../../custom.types";
import { getMoviesGenresDomain } from "../get-movies-genres/get-movies-genres";

interface Props {
  page: number;
}

export async function getTopRatedMoviesDomain({ page }: Props): Promise<MoviesResponse> {
  const data = await getTopRatedMoviesOrigin({ page });
  const movieGenresArray = await getMoviesGenresDomain();
  const movieGenresMap = Object.fromEntries(movieGenresArray.map((g) => [g.id, g.name]));

  return {
    movies: transformMovies(data, movieGenresMap),
    totalPages: data.total_pages,
    totalResults: data.total_results,
  };
}
