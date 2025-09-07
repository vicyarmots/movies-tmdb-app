import type { FC } from "react";

type LayoutHeaderProps = {
  moviesLength: number;
};

export const LayoutHeader: FC<LayoutHeaderProps> = ({ moviesLength }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">My Watchlist</h1>
      <p className="text-muted-foreground">
        {moviesLength} {moviesLength === 1 ? "movie" : "movies"}
      </p>
    </div>
  );
};
