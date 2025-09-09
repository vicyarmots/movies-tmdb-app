import type { FC } from "react";
import type { MovieDetails } from "@/processes/api/services/tmdb/domain/custom.types";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

type Props = Pick<MovieDetails, "overview">;

export const MovieDetailsOverviewCard: FC<Props> = ({ overview }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="leading-relaxed">{overview}</p>
      </CardContent>
    </Card>
  );
};
