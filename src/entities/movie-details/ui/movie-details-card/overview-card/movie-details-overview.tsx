import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import type { Movie } from "@/shared/utils/movies-data/movies-data";
import type { FC } from "react";

export const MovieDetailsOverviewCard: FC<Pick<Movie, "overview">> = ({ overview }) => {
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
