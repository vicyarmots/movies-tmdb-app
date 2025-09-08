import type { TMDBOriginMoviesResponse } from "../../origin/origin.types";
import type { Movie } from "../custom.types";

export function transformMovies(
  data: TMDBOriginMoviesResponse,
  genresMap: Record<number, string>,
): Movie[] {
  return data.results.map(
    ({
      genre_ids,
      vote_average,
      vote_count,
      backdrop_path,
      poster_path,
      original_title,
      original_language,
      release_date,
      ...rest
    }) => ({
      ...rest,
      originalTitle: original_title,
      originalLanguage: original_language,
      posterPath: poster_path,
      backdropPath: backdrop_path,
      releaseDate: release_date,
      voteAverage: vote_average ? Math.round(vote_average * 10) / 10 : undefined,
      voteCount: vote_count,
      genres: genre_ids?.map((id) => genresMap[id]) || [],
    }),
  );
}
