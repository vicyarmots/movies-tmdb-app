import { getMovieDetails } from "@/processes/api/services/get-movie-details/get-movie-details";
import { MovieDetails } from "@/widgets/movie/movie-details/movie-details";

interface MovieDetailsPageProps {
  params: { id: string };
}

const MovieDetailsPage = async ({ params }: MovieDetailsPageProps) => {
  const movie = await getMovieDetails(params.id);
  return <MovieDetails movie={movie} />;
};

export default MovieDetailsPage;
