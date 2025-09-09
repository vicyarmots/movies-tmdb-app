"use client";

import { BackgoundTrailer } from "@/entities/movie/ui/movie-details/ui/backgound-trailer/backgound-trailer";
import { TrailerCard } from "@/entities/movie/ui/movie-details/ui/movie-details-card/trailer-card/trailer-card";
import { useMovieOfficialTrailerSWR } from "../../model/hooks/use-movie-trailer-swr";

export const MovieTrailerFeature = ({
  movieId,
  isBackgound = false,
}: {
  movieId: number;
  isBackgound?: boolean;
}) => {
  const { trailer, isLoading, isError } = useMovieOfficialTrailerSWR(movieId);

  if (isLoading) return;
  if (isError || !trailer) return;

  if (isBackgound) return <BackgoundTrailer trailer={trailer} />;

  return <TrailerCard trailer={trailer} />;
};
