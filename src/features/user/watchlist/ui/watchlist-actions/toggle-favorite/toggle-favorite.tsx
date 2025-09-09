import type { FC } from "react";
import { useWatchlistStatusStore } from "../../../model/status/watchlist-status-store";
import { actionsRender } from "../../../utils/watchlist-render";
import { ToggleAction } from "../toggle-action";

interface Props {
  movieId: number;
}

export const ToggleFavorite: FC<Props> = ({ movieId }) => {
  const { isFavorite, toggleFavorite } = useWatchlistStatusStore();

  return (
    <ToggleAction
      isActive={isFavorite(movieId)}
      onClick={() => toggleFavorite(movieId)}
      renderConfig={actionsRender.favorite.add}
      renderConfigActive={actionsRender.favorite.remove}
    />
  );
};
