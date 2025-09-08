import type { TMDBOriginMovieDetails } from "../../origin/origin.types";
import type { Movie } from "../custom.types";

export function transformMovie(md: TMDBOriginMovieDetails): Movie {
  return {
    id: md.id,
    title: md.title,
    originalTitle: md.original_title,
    overview: md.overview,
    posterPath: md.poster_path,
    backdropPath: md.backdrop_path,
    releaseDate: md.release_date,
    adult: md.adult,
    video: md.video,
    popularity: md.popularity,
    voteAverage: md.vote_average,
    voteCount: md.vote_count,
    genres: md.genres.map((g) => g.name),
    originalLanguage: md.original_language,
  };
}
