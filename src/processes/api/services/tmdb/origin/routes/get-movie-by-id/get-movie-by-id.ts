import { type FetchOptions, fetchApi } from "@/shared/libs/fetch-api/fetch-api";
import type { TMDBOriginMovieDetails } from "../../origin.types";

interface Props {
  id: number;
  options?: FetchOptions<unknown>;
}

export async function getMovieByIdOrigin({ id, options }: Props): Promise<TMDBOriginMovieDetails> {
  const data = await fetchApi<TMDBOriginMovieDetails>(`/movie/${id}`, options);
  return data;
}
