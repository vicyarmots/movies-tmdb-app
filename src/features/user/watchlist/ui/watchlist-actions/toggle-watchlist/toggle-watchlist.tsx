import type { FC } from "react";
import { useWatchlistStore } from "../../../model/watchlist-store";
import { actionsRender } from "../../../utils/watchlist-render";
import { ToggleAction } from "../toggle-action";

interface Props {
  movieId: number;
}

export const ToggleWatchlist: FC<Props> = ({ movieId }) => {
  const { addId, removeId, isInWatchlist } = useWatchlistStore();

  return (
    <ToggleAction
      isActive={isInWatchlist(movieId)}
      onClick={() => (isInWatchlist(movieId) ? removeId(movieId) : addId(movieId))}
      renderConfig={actionsRender.watchlist.add}
      renderConfigActive={actionsRender.watchlist.remove}
    />
  );
};
