import { useMoviesStore } from "@/shared/libs/store/use-movies-store";
import { create } from "zustand";

interface MovieActionState {
  toggleFavorite: (id: number) => void;
  toggleWatched: (id: number) => void;
}

export const useMovieActionsStore = create<MovieActionState>()(() => ({
  toggleFavorite: (id) => {
    const { movies, setMovies } = useMoviesStore.getState();
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, isFavorite: !movie.is_favorite } : movie,
      ),
    );
  },
  toggleWatched: (id) => {
    const { movies, setMovies } = useMoviesStore.getState();
    setMovies(
      movies.map((movie) => (movie.id === id ? { ...movie, isWatched: !movie.is_watched } : movie)),
    );
  },
}));
