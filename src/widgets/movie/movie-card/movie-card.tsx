import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MovieCardInfo } from "@/entities/movie/ui/movie-card/info/card-info";
import { CardOverlay } from "@/entities/movie/ui/movie-card/overlay/card-overlay";
import { MoviePoster } from "@/entities/movie/ui/movie-card/poster/poster";
import { useWatchlistStatusStore } from "@/features/user/watchlist/model/status/watchlist-status-store";
import { useWatchlistStore } from "@/features/user/watchlist/model/watchlist-store";
import type { Movie } from "@/processes/api/services/tmdb/domain/custom.types";
import { Badge } from "@/shared/ui/badge";
import { Card } from "@/shared/ui/card";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCardWidget = ({ movie }: MovieCardProps) => {
  const { isInWatchlist } = useWatchlistStore();
  const { isFavorite } = useWatchlistStatusStore();
  const searchParams = useSearchParams();

  return (
    <Link
      href={{
        pathname: `/discover/${movie.id}`,
        query: searchParams.get("tab"),
      }}
    >
      <Card className="group relative overflow-hidden bg-card border-border/40 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
        <div className="relative aspect-[2/3] overflow-hidden">
          <MoviePoster title={movie.title} posterPath={movie.posterPath} size="w500" />
          <CardOverlay></CardOverlay>

          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isInWatchlist(movie.id) && (
              <Badge className="bg-green-500 text-white">Watchlist</Badge>
            )}
            {isFavorite(movie.id) && <Badge className="bg-red-500 text-white">Favorite</Badge>}
          </div>
        </div>
        <MovieCardInfo
          title={movie.title}
          releaseDate={movie.releaseDate}
          genres={movie.genres}
          voteAverage={movie.voteAverage}
        />
      </Card>
    </Link>
  );
};
