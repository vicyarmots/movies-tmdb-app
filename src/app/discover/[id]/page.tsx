import { getMovieDetailsDomain } from "@/processes/api/services/tmdb/domain/routes/get-movie-details/get-movie-details";
import { MovieDetailsWidget } from "@/widgets/movie/movie-details/movie-details";

interface MovieDetailsPageProps {
  params: { id: string };
}

const MovieDetailsPage = async ({ params }: MovieDetailsPageProps) => {
  const movie = await getMovieDetailsDomain(params.id);
  return <MovieDetailsWidget movie={movie} />;
};

export default MovieDetailsPage;
