import { type FetchOptions, fetchApi } from "@/shared/libs/fetch-api/fatch-api";
import type { TMDBOriginMediaImageResponse } from "../../origin.types";

interface Props {
  id: number;
  options?: FetchOptions<unknown>;
}

export async function getMovieMediaImagesOrigin({
  id,
  options,
}: Props): Promise<TMDBOriginMediaImageResponse> {
  const data = await fetchApi<TMDBOriginMediaImageResponse>(`/movie/${id}/images`, options);

  return data;
}
