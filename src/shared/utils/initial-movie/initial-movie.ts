import { type Movie, sampleMovies } from "../movies-data/movies-data";

export const initialMovies: Movie[] = sampleMovies.map((movie) => ({
  ...movie,
  id: crypto.randomUUID(),
  addedDate: new Date().toISOString(),
}));
