import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import type { Movie } from "@/shared/utils/movies-data/movies-data";
import type { FC } from "react";

type MovieDetailsOverviewCardProps = Pick<Movie, "overview">;

export const MovieDetailsOverviewCard: FC<MovieDetailsOverviewCardProps> = ({ overview }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="leading-relaxed">{overview}</p>
      </CardContent>
    </Card>
  );
};
