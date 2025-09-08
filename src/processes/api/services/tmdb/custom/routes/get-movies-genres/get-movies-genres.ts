import { getMoviesGenresOrigin } from "../../../origin/routes/get-movies-genres/get-movies-genres";

export async function getMoviesGenresCustom() {
  const data = await getMoviesGenresOrigin({ options: { cache: "no-store" } });
  return data.genres;
}
