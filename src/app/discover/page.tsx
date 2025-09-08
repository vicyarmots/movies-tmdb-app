import { getTopRatedMoviesDomain } from "@/processes/api/services/tmdb/domain/routes/get-top-rated-movies/get-top-rated-movies";
import { MoviesViewWidget } from "@/widgets/movies/movies-view/movies-view";

export default async function MoviesDiscoverPage() {
  const { movies, totalResults, totalPages } = await getTopRatedMoviesDomain({ page: 1 });

  return (
    <MoviesViewWidget
      initialMovies={movies}
      initialTab="topRated"
      initialPage={1}
      initialTotalResults={totalResults}
      initialTotalPages={totalPages}
    />
  );
}
