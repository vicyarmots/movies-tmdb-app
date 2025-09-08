export type TMDBMoviesResponse = {
  page: number;
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
};

export interface TMDBGenre {
  id: number;
  name: string;
}

export interface TMDBGenreResponse {
  genres: TMDBGenre[];
}

export interface TMDBMovie {
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

export type TMDBMovieTransformed = Omit<TMDBMovie, "genre_ids" | "vote_average"> & {
  genres: string[];
  is_watched?: boolean;
  is_favorite?: boolean;
  vote_average: number | null;
};

export interface TMDBMovieDetail {
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

export interface TMDBMovieDetailsResponse extends TMDBMovieDetail {}

export const GENRE_MAP: Record<number, string> = {
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

export interface TMDBMediaImage {
  aspect_ratio: number;
  height: number;
  iso_639_1?: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface MovieImagesResponse {
  id: number;
  backdrops: TMDBMediaImage[];
  logos: TMDBMediaImage[];
  posters: TMDBMediaImage[];
}

export type RequestWithPageParam = {
  page: number;
};

export interface GetMoviesByTabsResponse {
  movies: TMDBMovieTransformed[];
  totalPages: number;
  totalResults: number;
}

export type TMDBMovieVideo = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
};
