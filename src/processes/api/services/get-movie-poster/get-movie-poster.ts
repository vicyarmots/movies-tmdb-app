import { fetchApi } from "@/shared/libs/fetch-api/fatch-api";
import type { MovieImagesResponse, TMDBMediaImage } from "../../types";

export async function getMoviePoster({ id }: { id: number }): Promise<TMDBMediaImage> {
  const data = await fetchApi<MovieImagesResponse>(`/movie/${id}/images`, {
    cache: "no-store",
  });

  return data.posters[0];
}
