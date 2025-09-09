import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WatchStatusState {
  favoriteIds: number[];
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const useWatchlistStatusStore = create<WatchStatusState>()(
  persist(
    (set, get) => ({
      favoriteIds: [],
      toggleFavorite: (id) => {
        const watched = get().favoriteIds;
        if (watched.includes(id)) {
          set({ favoriteIds: watched.filter((i) => i !== id) });
        } else {
          set({ favoriteIds: [...watched, id] });
        }
      },
      isFavorite: (id) => get().favoriteIds.includes(id),
    }),
    {
      name: "favorite-storage",
    },
  ),
);
