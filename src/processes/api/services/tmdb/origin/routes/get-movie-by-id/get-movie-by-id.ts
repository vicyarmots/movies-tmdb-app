import { fetchApi, FetchOptions } from "@/shared/libs/fetch-api/fatch-api";
import type { TMDBOriginMovieDetails } from "../../origin.types";

interface Props {
  id: number;
  options?: FetchOptions<unknown>;
}

export async function getMovieByIdOrigin({ id, options }: Props): Promise<TMDBOriginMovieDetails> {
  const data = await fetchApi<TMDBOriginMovieDetails>(`/movie/${id}`, options);
  return data;
}
