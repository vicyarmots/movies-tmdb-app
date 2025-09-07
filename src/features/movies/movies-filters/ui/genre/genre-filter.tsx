import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";
import { useMoviesFiltersStore } from "../../model/use-movies-filters-store";
import { genres } from "@/shared/utils/movies-data/movies-data";

export const GenreFilter = () => {
  const { filters, setFilters } = useMoviesFiltersStore();

  return (
    <div className="space-y-2">
      <span className="text-sm font-medium">Genre</span>
      <Select value={filters.genre} onValueChange={(value) => setFilters({ genre: value })}>
        <SelectTrigger className="bg-muted/50 border-border/40 focus:border-orange-500/50">
          <SelectValue placeholder="All genres" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All genres</SelectItem>
          {genres.map((genre) => (
            <SelectItem key={genre} value={genre}>
              {genre}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
