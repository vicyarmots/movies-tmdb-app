import { formatDate } from "@/shared/utils/date-formatter/date-formatter";
import type { Movie } from "@/shared/utils/movies-data/movies-data";
import { Calendar, Star } from "lucide-react";
import type { FC } from "react";

export const MovieCardInfo: FC<Pick<Movie, "title" | "genre" | "rating" | "releaseDate">> = ({
  title,
  genre,
  rating,
  releaseDate,
}) => {
  return (
    <div className="p-4">
      <h3 className="font-medium mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
        {title}
      </h3>
      <div className="space-y-1 text-sm text-muted-foreground">
        <p>{genre}</p>
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span>{formatDate(releaseDate)}</span>
        </div>
        {rating && (
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-current text-yellow-500" />
            <span>{rating}/10</span>
          </div>
        )}
      </div>
    </div>
  );
};
