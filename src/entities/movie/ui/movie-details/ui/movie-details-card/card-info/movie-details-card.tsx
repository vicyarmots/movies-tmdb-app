import { MovieDetails } from "@/processes/api/services/tmdb/custom/custom.types";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { formatDate } from "@/shared/utils/date-formatter/date-formatter";
import { Calendar, Share, Star } from "lucide-react";
import type { FC } from "react";

type Props = {
  movie: MovieDetails;
};

export const MovieDetailsInfoCard: FC<Props> = ({ movie }) => {
  return (
    <Card className="z-10">
      <CardHeader>
        <CardTitle className="text-xl">Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-20">
          <div>
            <h4 className="font-medium mb-1">Genres</h4>
            <p className="text-muted-foreground w-60">
              {movie.genres?.map((g) => g.name).join(", ") || "No genres"}
            </p>
          </div>

          {/* <div>
            <h4 className="font-medium mb-1">Watch Priority</h4>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${getPriorityColor(movie.priority)}`} />
              <span className="text-muted-foreground">{movie.priority}</span>
            </div>
          </div> */}

          <div>
            <h4 className="font-medium mb-1">Release Date</h4>
            <div className="flex gap-2 items-center">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <p className="text-muted-foreground">{formatDate(movie.releaseDate)}</p>
            </div>
          </div>

          {/* <div>
            <h4 className="font-medium mb-1">Added to List</h4>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{formatAddedDate(movie.release_date)}</span>
            </div>
          </div> */}

          {!!movie.voteAverage && (
            <div>
              <h4 className="font-medium mb-1">Rating</h4>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-muted-foreground">
                  {Math.round(movie.voteAverage * 10) / 10}/10
                </span>
              </div>
            </div>
          )}

          {/* <div>
            <h4 className="font-medium mb-1">Status</h4>
            <div className="flex items-center gap-2">
              {movie.is_watched ? (
                <Eye className="w-4 h-4 text-green-500" />
              ) : (
                <EyeOff className="w-4 h-4 text-muted-foreground" />
              )}
              <span className="text-muted-foreground">
                {movie.is_watched ? "Watched" : "Not Watched"}
              </span>
            </div>
          </div> */}
        </div>

        {movie.id && (
          <div className="pt-4 border-t border-border/40">
            <h4 className="font-medium mb-2">External Links</h4>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  window.open(`https://www.themoviedb.org/movie/${movie.id}`, "_blank")
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
