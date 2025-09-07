import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Movie } from "@/shared/utils/movies-data/movies-data";
import { initialMovies } from "../../utils/initial-movie/initial-movie";

interface MoviesState {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
}

export const useMoviesStore = create<MoviesState>()(
  persist(
    (set) => ({
      movies: initialMovies,
      setMovies: (movies) => set({ movies }),
    }),
    { name: "movies-storage" },
  ),
);
