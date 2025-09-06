import { Card } from "@ui/card";
import { ToggleFavorite } from "@/features/movie/movie-actions/ui/toggle-favorite/toggle-favorite";
import { ToggleWatched } from "@/features/movie/movie-actions/ui/toggle-watched/toggle-watched";
import { MoviePoster } from "@/entities/movie/ui/movie-card/poster/poster";
import { CardOverlay } from "@/entities/movie/ui/movie-card/overlay/card-overlay";
import { MovieCardBadges } from "@/entities/movie/ui/movie-card/badges/card-badges";
import { MovieCardInfo } from "@/entities/movie/ui/movie-card/info/card-info";
import type { Movie } from "@/shared/utils/movies-data/movies-data";

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

export function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <Card
      onClick={() => onClick(movie)}
      className="group relative overflow-hidden bg-card border-border/40 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <MoviePoster title={movie.title} poster={movie.poster} />

        <CardOverlay>
          <ToggleWatched id={movie.id} isWatched={movie.isWatched} isIcon />
          <ToggleFavorite id={movie.id} isFavorite={movie.isFavorite} isIcon />
        </CardOverlay>

        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <MovieCardBadges
            priority={movie.priority}
            isWatched={movie.isWatched}
            isFavorite={movie.isFavorite}
          />
        </div>
      </div>

      <MovieCardInfo
        title={movie.title}
        releaseDate={movie.releaseDate}
        genre={movie.genre}
        rating={movie.rating}
      />
    </Card>
  );
}
