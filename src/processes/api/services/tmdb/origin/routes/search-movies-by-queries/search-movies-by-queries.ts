import { fetchApi, FetchOptions } from "@/shared/libs/fetch-api/fatch-api";
import type { TMDBOriginMoviesResponse } from "../../origin.types";
import { toQueryString } from "../../origin.helpers";
import { ORIGIN_API_ROUTES } from "../../origin.routes";

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
