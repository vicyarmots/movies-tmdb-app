import { getMoviesGenresDomain } from "../get-movies-genres/get-movies-genres";

import { transformMovies } from "../../transformers/tranform-movies";
import { getTopRatedMoviesOrigin } from "../../../origin/routes/get-top-rated-movies/get-top-rated-movies";
import type { MoviesResponse } from "../../custom.types";

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
