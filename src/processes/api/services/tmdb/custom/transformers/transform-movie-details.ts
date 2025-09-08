import type { TMDBOriginMovieDetails } from "../../origin/origin.types";
import type { MovieDetails } from "../custom.types";

export function transformMovieDetails(data: TMDBOriginMovieDetails): MovieDetails {
  return {
    adult: data.adult,
    backdropPath: data.backdrop_path,
    belongsToCollection: data.belongs_to_collection
      ? {
          id: data.belongs_to_collection.id,
          name: data.belongs_to_collection.name,
          posterPath: data.belongs_to_collection.poster_path,
          backdropPath: data.belongs_to_collection.backdrop_path,
        }
      : null,
    budget: data.budget,
    genres: data.genres,
    homepage: data.homepage,
    id: data.id,
    imdbId: data.imdb_id,
    originCountry: data.origin_country,
    originalLanguage: data.original_language,
    originalTitle: data.original_title,
    overview: data.overview,
    popularity: data.popularity,
    posterPath: data.poster_path,
    productionCompanies: data.production_companies.map((p) => ({
      id: p.id,
      logoPath: p.logo_path,
      name: p.name,
      originCountry: p.origin_country,
    })),
    productionCountries: data.production_countries.map((c) => ({
      iso3166_1: c.iso_3166_1,
      name: c.name,
    })),
    releaseDate: data.release_date,
    revenue: data.revenue,
    runtime: data.runtime,
    spokenLanguages: data.spoken_languages.map((l) => ({
      englishName: l.english_name,
      iso639_1: l.iso_639_1,
      name: l.name,
    })),
    status: data.status,
    tagline: data.tagline,
    title: data.title,
    video: data.video,
    voteAverage: data.vote_average,
    voteCount: data.vote_count,
  };
}
