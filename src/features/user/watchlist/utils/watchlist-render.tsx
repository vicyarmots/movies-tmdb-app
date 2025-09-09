import { Heart, TvIcon } from "lucide-react";

export const actionsRender = {
  watchlist: {
    add: {
      title: "Add to Watchlist",
      icon: <TvIcon className="w-5 h-5" />,
      className:
        "w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-500/90 text-foreground",
    },
    remove: {
      title: "Remove from Watchlist",
      icon: <TvIcon className="w-5 h-5" />,
      className:
        "w-full flex items-center justify-center gap-2 border border-green-500 bg-background text-foreground hover:bg-accent",
    },
  },
  favorite: {
    add: {
      title: "Mark as Favorite",
      icon: <Heart className="w-5 h-5" />,
      className:
        "w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-500/90 text-foreground",
    },
    remove: {
      title: "Remove from Favorite",
      icon: <Heart className="w-5 h-5" />,
      className:
        "w-full flex items-center justify-center gap-2 border border-red-500 bg-background text-foreground hover:bg-accent",
    },
  },
};
