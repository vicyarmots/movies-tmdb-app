import { getMovieDetailsOrigin } from "../../../origin/routes/get-movie-details/get-movie-details";
import { transformMovieDetails } from "../../transformers/transform-movie-details";

export async function getMovieDetailsCustom(id: string) {
  const data = await getMovieDetailsOrigin({ id });
  return transformMovieDetails(data);
}
