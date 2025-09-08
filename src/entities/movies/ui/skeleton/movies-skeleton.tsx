import { MovieCardSkeleton } from "@/entities/movie/ui/movie-card/skeleton/movie-card-skeleton";

interface MovieGridSkeletonProps {
  viewMode: "grid" | "list";
  count?: number;
}

export function MovieGridSkeleton({ viewMode, count = 20 }: MovieGridSkeletonProps) {
  return (
    <div
      className={
        viewMode === "grid"
          ? "w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6"
          : "w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      }
    >
      {Array.from({ length: count }).map((_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <MovieCardSkeleton key={index} viewMode={viewMode} />
      ))}
    </div>
  );
}
