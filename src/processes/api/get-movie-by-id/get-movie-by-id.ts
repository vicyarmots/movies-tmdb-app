import type { Movie, MoviesResponse } from "@/features/movies/popular-movies/model/popular-movies";
import { API_ROUTES } from "@/shared/libs/api-routes/api-routes";
import { fetchApi } from "@/shared/libs/fetch-api/fatch-api";

export async function getMovieById({ id }: { id: string }): Promise<Movie[]> {
  const data = await fetchApi<MoviesResponse>(`${API_ROUTES.MOVIE_BY_ID}/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS}`,
    },
    cache: "no-store",
  });

  return data.results;
}
