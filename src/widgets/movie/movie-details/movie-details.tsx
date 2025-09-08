"use client";

import { Button } from "@ui/button";
import { Card, CardContent } from "@ui/card";
import { Separator } from "@ui/separator";
import { ArrowLeft } from "lucide-react";
import { ROUTER_PATHS } from "@/shared/libs/router/router";
import { redirect } from "next/navigation";
import { ToggleFavorite } from "@/features/movie/movie-actions/ui/toggle-favorite/toggle-favorite";
import { ToggleWatched } from "@/features/movie/movie-actions/ui/toggle-watched/toggle-watched";
import { MoviePoster } from "@/entities/movie/ui/movie-card/poster/poster";
import { MovieDetailsOverviewCard } from "@/entities/movie-details/ui/movie-details-card/overview-card/movie-details-overview";
import { MovieDetailsInfoCard } from "@/entities/movie-details/ui/movie-details-card/card-info/movie-details-card";
import { FC } from "react";
import type { TMDBMovieDetail } from "@/processes/api/types";
import { MovieTrailerFeature } from "@/features/movie/movie-details/ui/movie-trailer/movie-trailer";

export const MovieDetails: FC<{ movie: TMDBMovieDetail }> = ({ movie }) => {
  const onBack = () => redirect(ROUTER_PATHS.MOVIES);

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
              <MoviePoster title={movie.title} poster_path={movie.poster_path} />
            </div>
            <CardContent className="p-4 space-y-2">
              <ToggleWatched id={movie.id} isWatched={true} />
              <ToggleFavorite id={movie.id} isFavorite={true} />
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div>
            {/* <div className="flex flex-wrap gap-2 mb-4">
              <Badge className={`${getPriorityColor(movie.priority)} text-white`}>
                {movie.priority} Priority
              </Badge>
              {movie.is_watched && (
                <Badge className="bg-green-500 text-white">
                  <Eye className="w-3 h-3 mr-1" />
                  Watched
                </Badge>
              )}
              {movie.is_favorite && (
                <Badge className="bg-red-500 text-white">
                  <Heart className="w-3 h-3 fill-current mr-1" />
                  Favorite
                </Badge>
              )}
            </div> */}

            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>

            {/* <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(movie.release_date)}</span>
              </div>

              {movie.vote_average && (
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>{movie.vote_average}/10</span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-orange-500" />
                {movie.genres?.map((g) => g.name).join(", ") || "No genres"}
              </div>
            </div> */}
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
