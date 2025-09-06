import type { Movie, MoviesResponse } from "@/features/movies/popular-movies/model/popular-movies";
import { API_ROUTES } from "@/shared/libs/api-routes/api-routes";
import { fetchApi } from "@/shared/libs/fetch-api/fatch-api";

export async function getPopularMovies(): Promise<Movie[]> {
  const data = await fetchApi<MoviesResponse>(`${API_ROUTES.POPULAR}?language=en-US&page=1`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
    cache: "no-store",
  });
  return data.results;
}
