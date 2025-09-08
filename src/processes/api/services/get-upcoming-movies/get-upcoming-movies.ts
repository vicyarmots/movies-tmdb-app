import { API_ROUTES } from "@/shared/libs/api-routes/api-routes";
import { getMoviesGenres } from "../get-movies-genres/get-movies-genres";
import type {
  GetMoviesByTabsResponse,
  RequestWithPageParam,
  TMDBMoviesResponse,
} from "../../types";
import { fetchApi } from "@/shared/libs/fetch-api/fatch-api";
import { transformMovies } from "../../transformers/tranform-movies";
// import useSWR from "swr";

export async function getUpcomingMovies({
  page,
}: RequestWithPageParam): Promise<GetMoviesByTabsResponse> {
  const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd

  const params = new URLSearchParams();
  params.set("language", "en-US");
  params.set("sort_by", "release_date.desc"); // новые фильмы сверху
  params.set("primary_release_date.lte", today); // только уже вышедшие
  params.set("page", page.toString());
  params.set("include_adult", "false");

  const data = await fetchApi<TMDBMoviesResponse>(`${API_ROUTES.DISCOVER}?${params.toString()}`, {
    cache: "no-store",
  });

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

// export const useUpcomingMovies = () => {
//   const { data, error, isLoading } = useSWR<{ movies: TMDBMovieTransformed[]; totalPages: number }>(
//     "upcomingMovies",
//     getUpcomingMovies,
//     { revalidateOnFocus: false },
//   );

//   return {
//     movies: data ?? [],
//     isLoading,
//     isError: !!error,
//   };
// };
