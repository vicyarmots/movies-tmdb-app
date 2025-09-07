"use client";

import { Button } from "@ui/button";
import { Card, CardContent } from "@ui/card";
import { Badge } from "@ui/badge";
import { Separator } from "@ui/separator";
import { ArrowLeft, Calendar, Star, Heart, Eye } from "lucide-react";
import { ROUTER_PATHS } from "@/shared/libs/router/router";
import { redirect } from "next/navigation";
import { getPriorityColor } from "@/shared/utils/get-priority-color/get-priority-color";
import { formatDate } from "@/shared/utils/date-formatter/date-formatter";
import { ToggleFavorite } from "@/features/movie/movie-actions/ui/toggle-favorite/toggle-favorite";
import { ToggleWatched } from "@/features/movie/movie-actions/ui/toggle-watched/toggle-watched";
import { MoviePoster } from "@/entities/movie/ui/movie-card/poster/poster";
import { MovieDetailsOverviewCard } from "@/entities/movie-details/ui/movie-details-card/overview-card/movie-details-overview";
import { MovieDetailsInfoCard } from "@/entities/movie-details/ui/movie-details-card/card-info/movie-details-card";
import { useMovieDetailsStore } from "@/features/movie/movie-details/model/use-movie-details-store";
import { useMoviesStore } from "@/shared/libs/store/use-movies-store";
import { MovieDetailsNotFound } from "@/entities/movie-details/ui/not-found/not-found";

export function MovieDetails() {
  const { selectedMovieId, getMovieById } = useMovieDetailsStore();
  const onBack = () => redirect(ROUTER_PATHS.MOVIES);
  useMoviesStore();
  const movie = selectedMovieId ? getMovieById(selectedMovieId) : null;

  if (!movie) {
    return <MovieDetailsNotFound onBack={onBack} />;
  }

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
              <MoviePoster title={movie.title} poster={movie.poster} />
            </div>
            <CardContent className="p-4 space-y-2">
              <ToggleWatched id={movie.id} isWatched={movie.isWatched} />
              <ToggleFavorite id={movie.id} isFavorite={movie.isFavorite} />
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className={`${getPriorityColor(movie.priority)} text-white`}>
                {movie.priority} Priority
              </Badge>
              {movie.isWatched && (
                <Badge className="bg-green-500 text-white">
                  <Eye className="w-3 h-3 mr-1" />
                  Watched
                </Badge>
              )}
              {movie.isFavorite && (
                <Badge className="bg-red-500 text-white">
                  <Heart className="w-3 h-3 fill-current mr-1" />
                  Favorite
                </Badge>
              )}
            </div>

            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(movie.releaseDate)}</span>
              </div>

              {movie.rating && (
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>{movie.rating}/10</span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-orange-500" />
                <span>{movie.genre}</span>
              </div>
            </div>
          </div>

          <Separator />
          {movie.overview && <MovieDetailsOverviewCard overview={movie.overview} />}
          <MovieDetailsInfoCard movie={movie} />
        </div>
      </div>
    </div>
  );
}
