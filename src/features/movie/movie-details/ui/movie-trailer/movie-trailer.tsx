"use client";

import { Card } from "@/shared/ui/card";
import { useMovieOfficialTrailer } from "../../model/hooks/use-movie-trailer";
import { TrailerCard } from "@/entities/movie-details/ui/movie-details-card/trailer-card/trailer-card";
import { BackgoundTrailer } from "@/entities/movie-details/ui/backgound-trailer/backgound-trailer";

export const MovieTrailerFeature = ({
  movieId,
  isBackgound = false,
}: {
  movieId: number;
  isBackgound?: boolean;
}) => {
  const { trailer, isLoading, isError } = useMovieOfficialTrailer(movieId);

  if (isLoading) return;
  if (isError || !trailer) return <Card>No official trailer available</Card>;

  if (isBackgound) return <BackgoundTrailer trailer={trailer} />;

  return <TrailerCard trailer={trailer} />;
};
