import type { TMDBOriginMovieVideo } from "../origin/origin.types";

export interface Movie {
  id: number;
  title: string;
  originalTitle: string;
  overview: string;
  posterPath: string | null;
  backdropPath: string | null;
  releaseDate: string;
  adult: boolean;
  video: boolean;
  popularity?: number;
  voteAverage?: number;
  voteCount?: number;
  genres: string[];
  originalLanguage: string;
}

export interface MoviesResponse {
  movies: Movie[];
  totalPages: number;
  totalResults: number;
}

export interface MovieDetails {
  adult: boolean;
  backdropPath: string | null;
  belongsToCollection?: {
    id: number;
    name: string;
    posterPath: string | null;
    backdropPath: string | null;
  } | null;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdbId: string;
  originCountry: string[];
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string | null;
  productionCompanies: {
    id: number;
    logoPath: string | null;
    name: string;
    originCountry: string;
  }[];
  productionCountries: { iso3166_1: string; name: string }[];
  releaseDate: string;
  revenue: number;
  runtime: number;
  spokenLanguages: { englishName: string; iso639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  voteAverage?: number;
  voteCount?: number;
}

export interface IMediaImage {
  aspectRatio: number;
  height: number;
  iso639_1?: string | null;
  filePath: string;
  voteAverage: number;
  voteCount: number;
  width: number;
}

export interface IMediaImageResponse {
  id: number;
  backdrops: IMediaImage[];
  logos: IMediaImage[];
  posters: IMediaImage[];
}

export interface MovieVideo extends TMDBOriginMovieVideo {}
