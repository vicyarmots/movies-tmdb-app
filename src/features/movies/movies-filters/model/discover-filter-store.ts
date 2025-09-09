import { create } from "zustand";

export interface DiscoverFilters {
  sortBy: string;
  releaseDateGte?: string;
  releaseDateLte?: string;
  withGenres: number[];
  includeAdult?: boolean;
}

interface DiscoverFilterStore {
  filters: DiscoverFilters;
  setFilters: (newFilters: Partial<DiscoverFilters>) => void;
  resetFilters: () => void;
  hasActiveFilters: () => boolean;
}

export const DEFAULT_FILTERS: DiscoverFilters = {
  sortBy: "vote_average.desc",
  withGenres: [],
};

export const useDiscoverFilterStore = create<DiscoverFilterStore>((set, get) => ({
  filters: DEFAULT_FILTERS,
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  resetFilters: () =>
    set({
      filters: DEFAULT_FILTERS,
    }),
  hasActiveFilters: () => {
    const filters = get().filters;
    return (
      filters.sortBy !== DEFAULT_FILTERS.sortBy ||
      filters.withGenres.length > 0 ||
      filters.releaseDateGte !== DEFAULT_FILTERS.releaseDateGte ||
      filters.releaseDateLte !== DEFAULT_FILTERS.releaseDateLte
    );
  },
}));
