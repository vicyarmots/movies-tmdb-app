import { TMDB_ORIGIN_GENRE_MAP } from "@/processes/api/services/tmdb/origin/origin.types";

export const sortOptions = [
  { value: "vote_average.desc", label: "Rating (High → Low)" },
  { value: "vote_average.asc", label: "Rating (Low → High)" },
  { value: "popularity.desc", label: "Popularity (High → Low)" },
  { value: "popularity.asc", label: "Popularity (Low → High)" },
  { value: "release_date.desc", label: "Release Date (New → Old)" },
  { value: "release_date.asc", label: "Release Date (Old → New)" },
] as const;

export type SortBy = "dateAdded" | "title" | "releaseDate" | "priority";

export const GENRES = TMDB_ORIGIN_GENRE_MAP;
