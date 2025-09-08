import { fetchApi, FetchOptions } from "@/shared/libs/fetch-api/fatch-api";
import type { TMDBOriginGenreResponse } from "../../origin.types";
import { ORIGIN_API_ROUTES } from "../../origin.routes";

interface Props {
  options?: FetchOptions<unknown>;
}

export async function getMoviesGenresOrigin({ options }: Props): Promise<TMDBOriginGenreResponse> {
  const data = await fetchApi<TMDBOriginGenreResponse>(`${ORIGIN_API_ROUTES.GENRES}`, options);
  return data;
}
