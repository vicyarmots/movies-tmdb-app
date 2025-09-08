import { getMovieByIdOrigin } from "../../../origin/routes/get-movie-by-id/get-movie-by-id";

export async function getMovieByIdCustom({ id }: { id: string }) {
  const data = await getMovieByIdOrigin({ id: Number(id) });
  return data;
}
