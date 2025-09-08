import { API_ROUTES } from "@/shared/libs/api-routes/api-routes";
import { fetchApi } from "@/shared/libs/fetch-api/fatch-api";
import { getMoviesGenres } from "../get-movies-genres/get-movies-genres";
import type {
  GetMoviesByTabsResponse,
  RequestWithPageParam,
  TMDBMoviesResponse,
} from "../../types";
// import useSWR from "swr";
import { transformMovies } from "../../transformers/tranform-movies";

export async function getTopRatedMovies({
  page,
}: RequestWithPageParam): Promise<GetMoviesByTabsResponse> {
  const data = await fetchApi<TMDBMoviesResponse>(
    `${API_ROUTES.TOP_RATED}?language=en-US&page=${page}`,
    {
      cache: "no-store",
    },
  );

  const movieGenresArray = await getMoviesGenres();

  const movieGenresMap: Record<number, string> = {};
  movieGenresArray.forEach((g) => {
    movieGenresMap[g.id] = g.name;
  });

  return {
    movies: transformMovies(data, movieGenresMap),
    totalPages: data.total_pages,
    totalResults: data.total_results,
  };
}

// export const useTopRatedMovies = () => {
//   const { data, error, isLoading } = useSWR<{ movies: TMDBMovieTransformed[]; totalPages: number }>(
//     "topRatedMovies",
//     getTopRatedMovies,
//     { revalidateOnFocus: false },
//   );

//   return {
//     movies: data ?? [],
//     isLoading,
//     isError: !!error,
//   };
// };
