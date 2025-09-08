import { FetchOptions } from "@/shared/libs/fetch-api/fatch-api";
import { transformMovies } from "../../transformers/tranform-movies";
import { discoverMovieOrigin } from "../../../origin/routes/discover-movies/discover-movies";
import type { MoviesResponse } from "../../custom.types";
import { getMoviesGenresDomain } from "../get-movies-genres/get-movies-genres";

interface Props {
  options: FetchOptions<unknown>;
  queries: {
    sortBy?: string;
    releaseDateLte?: string;
    releaseDateGte?: string;
    withGenres?: number[];
    includeAdult?: boolean;
    additionalParams?: Record<string, string | number | boolean | (string | number)[]>;
  };
}

export async function discoverMoviesDomain({ queries, options }: Props): Promise<MoviesResponse> {
  const maxReleaseDate = new Date().toISOString().split("T")[0];

  const defaultQueries = {
    sortBy: "vote_average.desc",
    releaseDateLte: maxReleaseDate,
    ...queries,
  };

  const data = await discoverMovieOrigin({
    page: 1,
    options: { ...options },
    queries: defaultQueries,
  });

  const movieGenresArray = await getMoviesGenresDomain();
  const movieGenresMap = Object.fromEntries(movieGenresArray.map((g) => [g.id, g.name]));

  return {
    movies: transformMovies(data, movieGenresMap),
    totalPages: data.total_pages,
    totalResults: data.total_results,
  };
}
