import { create } from "zustand";
import { persist } from "zustand/middleware";

const LIMIT_WATCHLIST = 30;

interface WatchlistState {
  ids: number[];
  setIds: (ids: number[]) => void;
  addId: (id: number) => void;
  removeId: (id: number) => void;
  isInWatchlist: (id: number) => boolean;
}

export const useWatchlistStore = create<WatchlistState>()(
  persist(
    (set, get) => ({
      ids: [],
      setIds: (ids) => set({ ids }),
      addId: (id) => {
        const current = get().ids;
        if (current.length >= LIMIT_WATCHLIST) return;
        if (!current.includes(id)) {
          set({ ids: [...current, id] });
        }
      },
      removeId: (id) => {
        set({ ids: get().ids.filter((i) => i !== id) });
      },
      isInWatchlist: (id) => get().ids.includes(id),
    }),
    {
      name: "watchlist-storage",
    },
  ),
);
