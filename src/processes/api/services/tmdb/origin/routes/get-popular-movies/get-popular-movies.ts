import { type FetchOptions, fetchApi } from "@/shared/libs/fetch-api/fatch-api";
import { buildQueryParams } from "../../origin.helpers";
import { ORIGIN_API_ROUTES } from "../../origin.routes";
import type { TMDBOriginMoviesResponse } from "../../origin.types";

interface Props {
  page: number;
  options?: FetchOptions<unknown>;
}

export async function getPopularMoviesOrigin({
  page,
  options,
}: Props): Promise<TMDBOriginMoviesResponse> {
  const query = buildQueryParams({
    language: "en-US",
    page,
  });

  const data = await fetchApi<TMDBOriginMoviesResponse>(
    `${ORIGIN_API_ROUTES.POPULAR}?${query}`,
    options,
  );

  return data;
}
