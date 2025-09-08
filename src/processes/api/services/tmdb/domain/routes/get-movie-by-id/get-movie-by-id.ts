import { getMovieByIdOrigin } from "../../../origin/routes/get-movie-by-id/get-movie-by-id";
import type { Movie } from "../../custom.types";
import { transformMovie } from "../../transformers/transform-movie";

export async function getMovieByIdDomain({ id }: { id: string }): Promise<Movie> {
  const data = await getMovieByIdOrigin({ id: Number(id) });
  return transformMovie(data);
}
