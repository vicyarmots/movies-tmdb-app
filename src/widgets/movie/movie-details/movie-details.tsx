"use client";

import { Button } from "@ui/button";
import { Card, CardContent } from "@ui/card";
import { Separator } from "@ui/separator";
import { ArrowLeft } from "lucide-react";
import { redirect } from "next/navigation";
import type { FC } from "react";
import { MoviePoster } from "@/entities/movie/ui/movie-card/poster/poster";
import { MovieDetailsInfoCard } from "@/entities/movie/ui/movie-details/ui/movie-details-card/card-info/movie-details-card";
import { MovieDetailsOverviewCard } from "@/entities/movie/ui/movie-details/ui/movie-details-card/overview-card/movie-details-overview";
import { MovieTrailerFeature } from "@/features/movie/movie-details/ui/movie-trailer/movie-trailer";
import {
  ToggleFavoriteStatus,
  ToggleWatchlist,
} from "@/features/user/watchlist/ui/watchlist-actions/watchlist-actions";
import type { MovieDetails } from "@/processes/api/services/tmdb/domain/custom.types";
import { ROUTER_PATHS } from "@/shared/libs/router/router";

interface Props {
  movie: MovieDetails;
}

export const MovieDetailsWidget: FC<Props> = ({ movie }) => {
  const onBack = () => redirect(ROUTER_PATHS.DISCOVER);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <Button onClick={onBack} variant="ghost" className="hover:bg-muted/80">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Movies
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="overflow-hidden">
            <div className="relative aspect-[2/3]">
              <MoviePoster title={movie.title} posterPath={movie.posterPath} />
            </div>
            <CardContent className="p-4 space-y-2">
              <ToggleWatchlist movieId={movie.id} />
              <ToggleFavoriteStatus movieId={movie.id} />
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            <h4 className="text-lg text-foreground/50">{movie.tagline}</h4>
          </div>
          <Separator />
          {movie.overview && <MovieDetailsOverviewCard overview={movie.overview} />}
          <MovieDetailsInfoCard movie={movie} />
          <MovieTrailerFeature movieId={movie.id} />
        </div>
      </div>
    </div>
  );
};
