import { type FetchOptions, fetchApi } from "@/shared/libs/fetch-api/fetch-api";
import { buildQueryParams } from "../../origin.helpers";
import type { TMDBOriginMovieVideosResponse } from "../../origin.types";

interface Props {
  id: number;
  options?: FetchOptions<unknown>;
}

export async function getMovieVideosOrigin({
  id,
  options,
}: Props): Promise<TMDBOriginMovieVideosResponse> {
  const query = buildQueryParams({
    language: "en-US",
  });

  const data = await fetchApi<TMDBOriginMovieVideosResponse>(
    `/movie/${id}/videos?${query}`,
    options,
  );

  return data;
}
