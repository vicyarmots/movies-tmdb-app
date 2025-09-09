import { type FetchOptions, fetchApi } from "@/shared/libs/fetch-api/fetch-api";
import { toQueryString } from "../../origin.helpers";
import { ORIGIN_API_ROUTES } from "../../origin.routes";
import type { TMDBOriginMoviesResponse } from "../../origin.types";

interface Props {
  query: string;
  options?: FetchOptions<unknown>;
}

export async function getMoviesByQueryOrigin({
  query,
  options,
}: Props): Promise<TMDBOriginMoviesResponse | null> {
  if (!query) {
    return null;
  }

  const qs = toQueryString({ query });
  const data = await fetchApi<TMDBOriginMoviesResponse>(
    `${ORIGIN_API_ROUTES.SEARCH}?${qs}`,
    options,
  );

  return data;
}
