import { type FetchOptions, fetchApi } from "@/shared/libs/fetch-api/fatch-api";
import { ORIGIN_API_ROUTES } from "../../origin.routes";
import type { TMDBOriginGenreResponse } from "../../origin.types";

interface Props {
  options?: FetchOptions<unknown>;
}

export async function getMoviesGenresOrigin({ options }: Props): Promise<TMDBOriginGenreResponse> {
  const data = await fetchApi<TMDBOriginGenreResponse>(`${ORIGIN_API_ROUTES.GENRES}`, options);
  return data;
}
