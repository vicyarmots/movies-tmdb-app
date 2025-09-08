import { fetchApi } from "@/shared/libs/fetch-api/fatch-api";
import type { TMDBMovieVideo } from "../../types";

export async function getMovieOfficialTrailer(movieId: number): Promise<TMDBMovieVideo> {
  const data = await fetchApi<{ results: TMDBMovieVideo[] }>(
    `/movie/${movieId}/videos?language=en-US`,
    { cache: "no-store" },
  );

  return data.results
    .filter((v) => v.site === "YouTube" && v.type === "Trailer")
    .sort((a, b) => (a.official === b.official ? 0 : a.official ? -1 : 1))[0];
}
