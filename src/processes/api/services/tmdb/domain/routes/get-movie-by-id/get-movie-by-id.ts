import { getMovieByIdOrigin } from "../../../origin/routes/get-movie-by-id/get-movie-by-id";
import { transformMovie } from "../../adapters/adapter-movie";
import type { Movie } from "../../custom.types";

export async function getMovieByIdDomain({ id }: { id: string }): Promise<Movie> {
  const data = await getMovieByIdOrigin({ id: Number(id) });
  return transformMovie(data);
}
