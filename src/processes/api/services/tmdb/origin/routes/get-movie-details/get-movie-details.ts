import { type FetchOptions, fetchApi } from "@/shared/libs/fetch-api/fatch-api";
import { buildQueryParams } from "../../origin.helpers";
import { ORIGIN_API_ROUTES } from "../../origin.routes";
import type { TMDBOriginMovieDetailsResponse } from "../../origin.types";

interface Props {
  id: string;
  options?: FetchOptions<unknown>;
}

export async function getMovieDetailsOrigin({
  id,
  options,
}: Props): Promise<TMDBOriginMovieDetailsResponse> {
  const query = buildQueryParams({
    language: "en-US",
  });

  const data = await fetchApi<TMDBOriginMovieDetailsResponse>(
    `${ORIGIN_API_ROUTES.MOVIE_BY_ID.replace(":id", id)}?${query}`,
    options,
  );

  return data;
}
