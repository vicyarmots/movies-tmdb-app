import { API_ROUTES } from "@/shared/libs/api-routes/api-routes";
import { fetchApi } from "@/shared/libs/fetch-api/fatch-api";
import type { TMDBGenre, TMDBGenreResponse } from "../../types";

export async function getMoviesGenres(): Promise<TMDBGenre[]> {
  const data = await fetchApi<TMDBGenreResponse>(`${API_ROUTES.GENRES}`, {
    cache: "no-store",
  });

  return data.genres;
}
