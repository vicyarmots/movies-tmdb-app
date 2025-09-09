import { Heart, TvIcon } from "lucide-react";
import type { FC } from "react";
import { Button } from "@/shared/ui/button";
import { useWatchlistStatusStore } from "../../model/status/watchlist-status-store";
import { useWatchlistStore } from "../../model/watchlist-store";

interface Props {
  movieId: number;
}

export const ToggleWatchlist: FC<Props> = ({ movieId }) => {
  const { addId, removeId, isInWatchlist } = useWatchlistStore();

  return (
    <>
      {!isInWatchlist(movieId) ? (
        <Button
          className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-500/90 text-foreground"
          onClick={() => addId(movieId)}
        >
          <TvIcon className="w-5 h-5" />
          Add to Watchlist
        </Button>
      ) : (
        <Button
          className="w-full flex items-center justify-center gap-2 border-1 border-green-500 bg-background"
          variant="secondary"
          onClick={() => removeId(movieId)}
        >
          <TvIcon className="w-5 h-5" />
          Remove from watchlist
        </Button>
      )}
    </>
  );
};

export const ToggleFavoriteStatus: FC<Props> = ({ movieId }) => {
  const { isFavorite, toggleFavorite } = useWatchlistStatusStore();

  return (
    <>
      {!isFavorite(movieId) ? (
        <Button
          className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-500/90 text-foreground"
          onClick={() => toggleFavorite(movieId)}
        >
          <Heart />
          Mark as favorite
        </Button>
      ) : (
        <Button
          className="w-full flex items-center justify-center gap-2 border-1 border-red-500 bg-background text-foreground hover:bg-accent"
          onClick={() => toggleFavorite(movieId)}
        >
          <Heart />
          Remove from favorite
        </Button>
      )}
    </>
  );
};
