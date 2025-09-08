import type { TMDBMovieDetailsResponse, TMDBMovieTransformed, TMDBMoviesResponse } from "../types";

export function transformMovies(
  data: TMDBMoviesResponse,
  genresMap: Record<number, string>,
): TMDBMovieTransformed[] {
  return data.results.map(({ genre_ids, vote_average, ...rest }) => ({
    ...rest,
    genres: genre_ids?.map((id) => genresMap[id]) || [],
    vote_average: vote_average ? Math.round(vote_average * 10) / 10 : null,
  }));
}
