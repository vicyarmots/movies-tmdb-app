import { useMoviesStore } from "@/shared/libs/store/use-movies-store";
import { create } from "zustand";

interface MovieDetailsState {
  selectedMovieId: string | null;
  setSelectedMovie: (id: string | null) => void;
  getMovieById: (
    id: string,
  ) => ReturnType<typeof useMoviesStore.getState>["movies"][number] | undefined;
}

export const useMovieDetailsStore = create<MovieDetailsState>()((set) => ({
  selectedMovieId: null,
  setSelectedMovie: (id) => set({ selectedMovieId: id }),
  getMovieById: (id) => {
    const { movies } = useMoviesStore.getState();
    return movies.find((movie) => movie.id === id);
  },
}));
