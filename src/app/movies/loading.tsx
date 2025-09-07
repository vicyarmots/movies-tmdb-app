import { MovieGridSkeleton } from "@/entities/movie/ui/movie-card/skeleton/movie-card-skeleton";

const MoviesLoading = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <MovieGridSkeleton viewMode={"grid"} />
    </div>
  );
};

export default MoviesLoading;
