import { getMovieDetailsOrigin } from "../../../origin/routes/get-movie-details/get-movie-details";
import { transformMovieDetails } from "../../adapters/adapter-movie-details";

export async function getMovieDetailsDomain(id: string) {
  const data = await getMovieDetailsOrigin({ id });
  return transformMovieDetails(data);
}
