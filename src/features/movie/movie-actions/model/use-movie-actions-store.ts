import { useMoviesStore } from "@/shared/store/use-movies-store";
import { create } from "zustand";

interface MovieActionState {
  toggleFavorite: (id: string) => void;
  toggleWatched: (id: string) => void;
}

export const useMovieActionsStore = create<MovieActionState>()(() => ({
  toggleFavorite: (id) => {
    const { movies, setMovies } = useMoviesStore.getState();
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, isFavorite: !movie.isFavorite } : movie,
      ),
    );
  },
  toggleWatched: (id) => {
    const { movies, setMovies } = useMoviesStore.getState();
    setMovies(
      movies.map((movie) => (movie.id === id ? { ...movie, isWatched: !movie.isWatched } : movie)),
    );
  },
}));
