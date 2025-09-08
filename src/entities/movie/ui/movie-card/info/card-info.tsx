import { TMDBMovieTransformed } from "@/processes/api/types";
import { formatDate } from "@/shared/utils/date-formatter/date-formatter";
import { Calendar, Star } from "lucide-react";
import type { FC } from "react";

type MovieCardInfoProps = Pick<
  TMDBMovieTransformed,
  "title" | "genres" | "vote_average" | "release_date"
>;

export const MovieCardInfo: FC<MovieCardInfoProps> = ({
  title,
  genres,
  vote_average,
  release_date,
}) => {
  const roundedRating = vote_average && Math.round(vote_average * 10) / 10;

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
          <span>{formatDate(release_date)}</span>
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
