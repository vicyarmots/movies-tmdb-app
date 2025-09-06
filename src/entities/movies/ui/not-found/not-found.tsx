import { Film } from "lucide-react";
import type { FC } from "react";

type MoviesNotFoundProps = {
  isExist: boolean;
};

export const MoviesNotFound: FC<MoviesNotFoundProps> = ({ isExist }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center w-full">
      <Film className="w-16 h-16 text-muted-foreground mb-4" />
      <h2 className="text-xl font-medium mb-2">No movies found</h2>
      <p className="text-muted-foreground mb-6 max-w-md">
        {isExist
          ? "Start building your watchlist by adding your first movie."
          : "Try adjusting your filters or search query to find movies."}
      </p>
    </div>
  );
};
