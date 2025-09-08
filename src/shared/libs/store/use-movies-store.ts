import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TMDBMovieTransformed } from "@/processes/api/types";

interface MoviesState {
  movies: TMDBMovieTransformed[];
  setMovies: (movies: TMDBMovieTransformed[]) => void;
}

export const useMoviesStore = create<MoviesState>()(
  persist(
    (set) => ({
      movies: [],
      setMovies: (movies) => set({ movies }),
    }),
    { name: "movies-storage" },
  ),
);
