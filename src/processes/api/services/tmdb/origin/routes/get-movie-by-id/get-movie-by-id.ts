import { fetchApi, FetchOptions } from "@/shared/libs/fetch-api/fatch-api";
import type { TMDBOriginMovie } from "../../origin.types";

interface Props {
  id: number;
  options?: FetchOptions<unknown>;
}

export async function getMovieByIdOrigin({ id, options }: Props): Promise<TMDBOriginMovie> {
  const data = await fetchApi<TMDBOriginMovie>(`/movie/${id}`, options);
  return data;
}
