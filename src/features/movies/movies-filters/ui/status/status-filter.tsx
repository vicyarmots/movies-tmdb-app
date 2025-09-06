import { Button } from "@/shared/ui/button";
import { useMoviesFiltersStore } from "../../model/use-movies-filters-store";
import { useMoviesStore } from "@/shared/store/use-movies-store";

type Status = "all" | "unwatched" | "watched" | "favorites";

const statusOptions: { key: Status; label: string }[] = [
  { key: "all", label: "All Movies" },
  { key: "unwatched", label: "To Watch" },
  { key: "watched", label: "Watched" },
  { key: "favorites", label: "Favorites" },
] as const;

export const StatusFilter = () => {
  const { movies } = useMoviesStore();
  const { filters, setFilters } = useMoviesFiltersStore();

  const totalCount = movies.length;
  const watchedCount = movies.filter((m) => m.isWatched).length;
  const unwatchedCount = movies.filter((m) => !m.isWatched).length;
  const favoritesCount = movies.filter((m) => m.isFavorite).length;

  const getStatusCount = (status: string) => {
    switch (status) {
      case "all":
        return totalCount;
      case "watched":
        return watchedCount;
      case "unwatched":
        return unwatchedCount;
      case "favorites":
        return favoritesCount;
      default:
        return 0;
    }
  };

  return (
    <div className="grid grid-cols-1 gap-2">
      {statusOptions.map(({ key, label }) => {
        const isActive = filters.status === key;

        return (
          <Button
            key={key}
            variant={isActive ? "default" : "ghost"}
            onClick={() => setFilters({ status: key })}
            className={`justify-between w-full ${
              isActive ? "bg-orange-500 hover:bg-orange-600 text-white" : "hover:bg-muted/80"
            }`}
          >
            <span>{label}</span>
            <span className="text-xs opacity-70">{getStatusCount(key)}</span>
          </Button>
        );
      })}
    </div>
  );
};
