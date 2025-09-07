import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { formatAddedDate, formatDate } from "@/shared/utils/date-formatter/date-formatter";
import { getPriorityColor } from "@/shared/utils/get-priority-color/get-priority-color";
import type { Movie } from "@/shared/utils/movies-data/movies-data";
import { Clock, Eye, EyeOff, Share, Star } from "lucide-react";
import type { FC } from "react";

type MovieDetailsInfoCardProps = {
  movie: Movie;
};

export const MovieDetailsInfoCard: FC<MovieDetailsInfoCardProps> = ({ movie }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-1">Genre</h4>
            <p className="text-muted-foreground">{movie.genre}</p>
          </div>

          <div>
            <h4 className="font-medium mb-1">Watch Priority</h4>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${getPriorityColor(movie.priority)}`} />
              <span className="text-muted-foreground">{movie.priority}</span>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-1">Release Date</h4>
            <p className="text-muted-foreground">{formatDate(movie.releaseDate)}</p>
          </div>

          <div>
            <h4 className="font-medium mb-1">Added to List</h4>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{formatAddedDate(movie.addedDate)}</span>
            </div>
          </div>

          {movie.rating && (
            <div>
              <h4 className="font-medium mb-1">Rating</h4>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-muted-foreground">{movie.rating}/10</span>
              </div>
            </div>
          )}

          <div>
            <h4 className="font-medium mb-1">Status</h4>
            <div className="flex items-center gap-2">
              {movie.isWatched ? (
                <Eye className="w-4 h-4 text-green-500" />
              ) : (
                <EyeOff className="w-4 h-4 text-muted-foreground" />
              )}
              <span className="text-muted-foreground">
                {movie.isWatched ? "Watched" : "Not Watched"}
              </span>
            </div>
          </div>
        </div>

        {movie.tmdbId && (
          <div className="pt-4 border-t border-border/40">
            <h4 className="font-medium mb-2">External Links</h4>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  window.open(`https://www.themoviedb.org/movie/${movie.tmdbId}`, "_blank")
                }
                className="border-border/40 hover:border-orange-500/50"
              >
                <Share className="w-4 h-4 mr-2" />
                View on TMDB
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
