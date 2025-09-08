import { fetchApi, FetchOptions } from "@/shared/libs/fetch-api/fatch-api";
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
