export interface TMDBOriginMoviesResponse {
  page: number;
  results: TMDBOriginMovie[];
  total_pages: number;
  total_results: number;
}

export interface TMDBOriginMovie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[] | undefined;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number | undefined;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number | undefined;
  vote_count: number | undefined;
}

export interface TMDBOriginMovieDetails {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  } | null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number | undefined;
  vote_count: number | undefined;
}

export type TMDBOriginMovieVideo = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type:
    | "Trailer"
    | "Teaser"
    | "Clip"
    | "Featurette"
    | "Behind the Scenes"
    | "Bloopers"
    | "Opening Credits"
    | "Other";
  official: boolean;
  published_at: string;
};

export interface TMDBOriginMovieVideosResponse {
  id: number;
  results: TMDBOriginMovieVideo[];
}

export interface TMDBOriginGenre {
  id: number;
  name: string;
}

export interface TMDBOriginMediaImage {
  aspect_ratio: number;
  height: number;
  iso_639_1?: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface TMDBOriginMediaImageResponse {
  id: number;
  backdrops: TMDBOriginMediaImage[];
  logos: TMDBOriginMediaImage[];
  posters: TMDBOriginMediaImage[];
}

export interface TMDBOriginGenreResponse {
  genres: TMDBOriginGenre[];
}

export interface TMDBOriginMovieDetailsResponse extends TMDBOriginMovieDetails {}

export const TMDB_ORIGIN_GENRE_MAP: Record<number, string> = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};
