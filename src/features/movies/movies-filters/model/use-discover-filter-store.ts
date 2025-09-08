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
}

export const DEFAULT_FILTERS: DiscoverFilters = {
  sortBy: "vote_average.desc",
  withGenres: [],
};

export const useDiscoverFilterStore = create<DiscoverFilterStore>((set) => ({
  filters: DEFAULT_FILTERS,
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  resetFilters: () =>
    set({
      filters: DEFAULT_FILTERS,
    }),
}));

export function hasActiveFilters(filters: DiscoverFilters) {
  if (filters.sortBy !== DEFAULT_FILTERS.sortBy) return true;

  if (filters.withGenres.length > 0) return true;

  if (filters.releaseDateGte || filters.releaseDateLte !== DEFAULT_FILTERS.releaseDateLte)
    return true;

  return false;
}
