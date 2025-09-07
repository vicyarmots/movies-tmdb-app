import { Badge } from "@/shared/ui/badge";
import { getPriorityColor } from "@/shared/utils/get-priority-color/get-priority-color";
import type { Movie } from "@/shared/utils/movies-data/movies-data";
import { Heart } from "lucide-react";
import type { FC } from "react";

type MovieCardBadgesProps = Pick<Movie, "priority" | "isWatched" | "isFavorite">;

export const MovieCardBadges: FC<MovieCardBadgesProps> = ({ isFavorite, isWatched, priority }) => {
  return (
    <>
      <Badge className={`${getPriorityColor(priority)} text-white text-xs`}>{priority}</Badge>
      {isWatched && (
        <Badge variant="secondary" className="bg-green-500 text-white text-xs">
          Watched
        </Badge>
      )}
      {isFavorite && (
        <Badge variant="secondary" className="bg-red-500 text-white text-xs">
          <Heart className="w-3 h-3 fill-current mr-1" />
        </Badge>
      )}
    </>
  );
};
