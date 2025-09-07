import { API_ROUTES } from "@/shared/libs/api-routes/api-routes";
import { fetchApi } from "@/shared/libs/fetch-api/fatch-api";
import { getMoviesGenres } from "../get-movies-genres/get-movies-genres";
import type { TMDBMoviesResponse, TMDBMovieTransformed } from "../types";

type GetPopularMoviesProps = {
  page?: number;
};

export async function getPopularMovies({
  page = 1,
}: GetPopularMoviesProps): Promise<TMDBMovieTransformed[]> {
  const data = await fetchApi<TMDBMoviesResponse>(
    `${API_ROUTES.POPULAR}?language=en-US&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS}`,
      },
      cache: "no-store",
    },
  );

  const movieGenresArray = await getMoviesGenres();
  const movieGenresMap: Record<number, string> = {};
  movieGenresArray.forEach((g) => {
    movieGenresMap[g.id] = g.name;
  });

  return data.results.map(({ genre_ids, ...rest }) => ({
    ...rest,
    genres: genre_ids?.map((id) => movieGenresMap[id]) || [],
  }));
}
