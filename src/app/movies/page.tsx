import { getTopRatedMovies } from "@/processes/api/services/get-top-rated-movies/get-top-rated-movies";
import { Movies } from "@/widgets/movies/movies";

export default async function MoviesPage() {
  const { movies } = await getTopRatedMovies({ page: 1 });
  return <Movies initialMovies={movies} initialTab="topRated" initialPage={1} />;
}
