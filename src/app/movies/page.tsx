// import { MovieGridSkeleton } from "@/entities/movie/ui/movie-card/skeleton/movie-card-skeleton";
import { getPopularMovies } from "@/processes/api/get-popular-movies/get-popular-movies";
import { Movies } from "@/widgets/movies/movies";

export default async function MoviesPage() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // const isLoading = false;
  // if (isLoading) return <MovieGridSkeleton viewMode={"list"} />;
  const movies = await getPopularMovies({});
  console.log(movies);

  return <Movies />;
}
