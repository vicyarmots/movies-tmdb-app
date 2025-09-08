// src/processes/api/get-movie-details/get-movie-details.ts
import { API_ROUTES } from "@/shared/libs/api-routes/api-routes";
import type { TMDBMovieDetailsResponse } from "../../types";
import { fetchApi } from "@/shared/libs/fetch-api/fatch-api";

export async function getMovieDetails(id: string): Promise<TMDBMovieDetailsResponse> {
  const data = await fetchApi<TMDBMovieDetailsResponse>(
    `${API_ROUTES.MOVIE_BY_ID.replace(":id", id)}?language=en-US`,
    {
      cache: "no-store",
    },
  );

  return data;
}

// export const useMovieDetails = (id: string) => {
//   const { data, error, isLoading } = useSWR<TMDBMovieDetailsResponse>(
//     id ? `movieDetails-${id}` : null,
//     () => getMovieDetails(id),
//     { revalidateOnFocus: false },
//   );

//   return {
//     movie: data,
//     isLoading,
//     isError: !!error,
//   };
// };
