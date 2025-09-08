"use client";

import { useMovieOfficialTrailer } from "../../model/hooks/use-movie-trailer";
import { TrailerCard } from "@/entities/movie/ui/movie-details/ui/movie-details-card/trailer-card/trailer-card";
import { BackgoundTrailer } from "@/entities/movie/ui/movie-details/ui/backgound-trailer/backgound-trailer";

export const MovieTrailerFeature = ({
  movieId,
  isBackgound = false,
}: {
  movieId: number;
  isBackgound?: boolean;
}) => {
  const { trailer, isLoading, isError } = useMovieOfficialTrailer(movieId);

  if (isLoading) return;
  if (isError || !trailer) return;

  if (isBackgound) return <BackgoundTrailer trailer={trailer} />;

  return <TrailerCard trailer={trailer} />;
};
