import { getMoviesGenresCustom } from "../get-movies-genres/get-movies-genres";
import { transformMovies } from "../../transformers/tranform-movies";
import { getUpcomingMoviesOrigin } from "../../../origin/routes/get-upcoming-movies/get-upcoming-movies";
import type { MoviesResponse } from "../../custom.types";

interface Props {
  page: number;
}

export async function getUpcomingMoviesCustom({ page }: Props): Promise<MoviesResponse> {
  const data = await getUpcomingMoviesOrigin({ page, options: { cache: "no-store" } });
  const movieGenresArray = await getMoviesGenresCustom();

  const movieGenresMap = Object.fromEntries(movieGenresArray.map((g) => [g.id, g.name]));

  return {
    movies: transformMovies(data, movieGenresMap).filter(
      (movie) => movie.popularity && movie.posterPath,
    ),
    totalPages: data.total_pages,
    totalResults: data.total_results,
  };
}
