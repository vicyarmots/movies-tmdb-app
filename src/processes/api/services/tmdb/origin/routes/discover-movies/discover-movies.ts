import { fetchApi, FetchOptions } from "@/shared/libs/fetch-api/fatch-api";
import { buildQueryParams } from "../../origin.helpers";
import type { TMDBOriginMoviesResponse } from "../../origin.types";
import { ORIGIN_API_ROUTES } from "../../origin.routes";

interface Props {
  page: number;
  options: FetchOptions<unknown>;
  queries: {
    sortBy?: string;
    releaseDateLte?: string;
    releaseDateGte?: string;
    withGenres?: number[];
    includeAdult?: boolean;
    additionalParams?: Record<string, string | number | boolean | (string | number)[]>;
  };
}

export async function discoverMovieOrigin({
  page,
  options,
  queries,
}: Props): Promise<TMDBOriginMoviesResponse> {
  const query = buildQueryParams({
    language: "en-US",
    sort_by: queries.sortBy,
    "primary_release_date.lte": queries.releaseDateLte,
    "primary_release_date.gte": queries.releaseDateGte,
    with_genres: queries.withGenres,
    include_adult: queries.includeAdult,
    page,
    ...queries.additionalParams,
  });

  const data = await fetchApi<TMDBOriginMoviesResponse>(
    `${ORIGIN_API_ROUTES.DISCOVER}?${query}`,
    options,
  );

  return data;
}
