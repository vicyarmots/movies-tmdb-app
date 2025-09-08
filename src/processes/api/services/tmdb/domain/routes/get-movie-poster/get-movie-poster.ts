import { getMovieMediaImagesOrigin } from "../../../origin/routes/get-movie-media-images/get-movie-media-images";
import { transformMediaImages } from "../../transformers/transform-media-image";

interface Props {
  id: number;
}

export async function getMoviePosterDomain({ id }: Props) {
  const data = await getMovieMediaImagesOrigin({ id });
  const transformed = transformMediaImages(data);
  return transformed.posters[0];
}
