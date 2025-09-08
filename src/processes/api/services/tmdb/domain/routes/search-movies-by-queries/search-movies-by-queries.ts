import { getMoviesGenresDomain } from "../get-movies-genres/get-movies-genres";
import { transformMovies } from "../../transformers/tranform-movies";
import { getMoviesByQueryOrigin } from "../../../origin/routes/search-movies-by-queries/search-movies-by-queries";
import type { MoviesResponse } from "../../custom.types";

interface Props {
  query: string;
  signal: AbortSignal;
}

export async function searchMovieByQueriesDomain({
  query,
  signal,
}: Props): Promise<MoviesResponse> {
  if (!query) {
    return {
      movies: [],
      totalPages: 0,
      totalResults: 0,
    };
  }

  const data = await getMoviesByQueryOrigin({ query, options: { signal } });

  const movieGenresArray = await getMoviesGenresDomain();
  const movieGenresMap = Object.fromEntries(movieGenresArray.map((g) => [g.id, g.name]));

  if (!data) {
    return {
      movies: [],
      totalPages: 0,
      totalResults: 0,
    };
  }

  return {
    movies: transformMovies(data, movieGenresMap),
    totalPages: data.total_pages,
    totalResults: data.total_results,
  };
}
