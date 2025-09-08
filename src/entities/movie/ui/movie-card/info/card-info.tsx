import type { Movie } from "@/processes/api/services/tmdb/custom/custom.types";
import { formatDate } from "@/shared/utils/date-formatter/date-formatter";
import { Calendar, Star } from "lucide-react";
import type { FC } from "react";

type Props = Pick<Movie, "title" | "genres" | "voteAverage" | "releaseDate">;

export const MovieCardInfo: FC<Props> = ({ title, genres, voteAverage, releaseDate }) => {
  const roundedRating = voteAverage && Math.round(voteAverage * 10) / 10;

  return (
    <div className="p-4">
      <h3 className="font-medium mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
        {title}
      </h3>
      <div className="space-y-1 text-sm text-muted-foreground">
        <div className="flex gap-1 flex-wrap">
          {genres.map((genre) => (
            <p key={genre}>{genre}</p>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span>{formatDate(releaseDate)}</span>
        </div>
        {roundedRating ? (
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-current text-yellow-500" />
            <span>{roundedRating}/10</span>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-current text-yellow-500" />
            <span>No review yet</span>
          </div>
        )}
      </div>
    </div>
  );
};
