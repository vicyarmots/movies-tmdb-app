import { Card } from "@ui/card";
// import { ToggleFavorite } from "@/features/movie/movie-actions/ui/toggle-favorite/toggle-favorite";
// import { ToggleWatched } from "@/features/movie/movie-actions/ui/toggle-watched/toggle-watched";
import { MoviePoster } from "@/entities/movie/ui/movie-card/poster/poster";
import { CardOverlay } from "@/entities/movie/ui/movie-card/overlay/card-overlay";
import { MovieCardInfo } from "@/entities/movie/ui/movie-card/info/card-info";
import type { Movie } from "@/processes/api/services/tmdb/domain/custom.types";
import { Badge } from "@/shared/ui/badge";
import { useWatchlistStore } from "@/features/user/watchlist/model/watchlist-store";

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

export const MovieCardWidget = ({ movie, onClick }: MovieCardProps) => {
  const { isInWatchlist } = useWatchlistStore();
  return (
    <Card
      onClick={() => onClick(movie)}
      className="group relative overflow-hidden bg-card border-border/40 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <MoviePoster title={movie.title} posterPath={movie.posterPath} />
        <CardOverlay>
          {/* <ToggleWatched id={movie.id} isWatched={movie.is_watched} isIcon />
          <ToggleFavorite id={movie.id} isFavorite={movie.is_favorite} isIcon /> */}
        </CardOverlay>

        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {/* <MovieCardBadges
            isWatched={movie.isWatched}
            isFavorite={movie.isFavorite}
          /> */}
          {isInWatchlist(movie.id) && <Badge className="bg-green-500 text-white">Watchlist</Badge>}
        </div>
      </div>

      <MovieCardInfo
        title={movie.title}
        releaseDate={movie.releaseDate}
        genres={movie.genres}
        voteAverage={movie.voteAverage}
      />
    </Card>
  );
};
