import { fetchApi, FetchOptions } from "@/shared/libs/fetch-api/fatch-api";
import type { TMDBOriginMoviesResponse } from "../../origin.types";
import { buildQueryParams } from "../../origin.helpers";
import { ORIGIN_API_ROUTES } from "../../origin.routes";

interface Props {
  page: number;
  options?: FetchOptions<unknown>;
}

export async function getTopRatedMoviesOrigin({
  page,
  options,
}: Props): Promise<TMDBOriginMoviesResponse> {
  const query = buildQueryParams({
    language: "en-US",
    page,
  });

  return fetchApi<TMDBOriginMoviesResponse>(`${ORIGIN_API_ROUTES.TOP_RATED}?${query}`, options);
}
