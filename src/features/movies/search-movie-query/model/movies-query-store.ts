import { create } from "zustand";

export const useSearchMoviesQueryStore = create<{
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}>((set) => ({
  searchQuery: "",
  setSearchQuery: (q: string) => set({ searchQuery: q }),
}));
