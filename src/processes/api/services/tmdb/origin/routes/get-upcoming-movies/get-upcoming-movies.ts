import { type FetchOptions, fetchApi } from "@/shared/libs/fetch-api/fatch-api";
import { buildQueryParams } from "../../origin.helpers";
import { ORIGIN_API_ROUTES } from "../../origin.routes";
import type { TMDBOriginMoviesResponse } from "../../origin.types";

interface Props {
  page: number;
  options: FetchOptions<unknown>;
}

export async function getUpcomingMoviesOrigin({
  page,
  options,
}: Props): Promise<TMDBOriginMoviesResponse> {
  // const today = new Date().toISOString().split("T")[0];
  const maxDate = "2030-12-31";

  const query = buildQueryParams({
    language: "en-US",
    sort_by: "release_date.desc",
    "primary_release_date.lte": maxDate,
    page,
    include_adult: false,
  });

  const data = await fetchApi<TMDBOriginMoviesResponse>(
    `${ORIGIN_API_ROUTES.DISCOVER}?${query}`,
    options,
  );
  return data;
}
