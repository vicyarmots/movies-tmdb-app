import { create } from "zustand";
import type { MovieFilters, Movie } from "@/shared/utils/movies-data/movies-data";
import { useMoviesStore } from "@/shared/libs/store/use-movies-store";
import { getFilteredMoviesHelper } from "../utils/movies-filters.helpers";

interface FiltersState {
  filters: MovieFilters;
  searchQuery: string;
  setFilters: (filters: Partial<MovieFilters>) => void;
  resetFilters: () => void;
  setSearchQuery: (query: string) => void;
  getFilteredMovies: () => Movie[];
}

const defaultFilters: MovieFilters = {
  status: "all",
  genre: "all",
  priority: "all",
  sortBy: "dateAdded",
};

export const useMoviesFiltersStore = create<FiltersState>((set, get) => ({
  filters: defaultFilters,
  searchQuery: "",

  setFilters: (newFilters) => set((state) => ({ filters: { ...state.filters, ...newFilters } })),

  resetFilters: () => set({ filters: defaultFilters, searchQuery: "" }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  getFilteredMovies: () => {
    const { movies } = useMoviesStore();
    const { filters, searchQuery } = get();
    return getFilteredMoviesHelper(movies, filters, searchQuery) as Movie[];
  },
}));
