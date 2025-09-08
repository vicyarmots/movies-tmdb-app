import { TMDBMovieVideo } from "@/processes/api/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import type { FC } from "react";

type TrailerCardProps = {
  trailer: TMDBMovieVideo;
};

export const TrailerCard: FC<TrailerCardProps> = ({ trailer }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Official Trailer</CardTitle>
      </CardHeader>
      <CardContent>
        <iframe
          height="340"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title={trailer.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full"
        />
      </CardContent>
    </Card>
  );
};
