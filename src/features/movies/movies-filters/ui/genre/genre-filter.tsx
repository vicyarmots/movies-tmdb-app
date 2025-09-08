import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";
import { useDiscoverFilterStore } from "../../model/use-discover-filter-store";
import { GENRES } from "../../utils/movies-filters.helpers";

export const GenreFilter = () => {
  const { filters, setFilters } = useDiscoverFilterStore();

  return (
    <div className="space-y-2">
      <span className="text-sm font-medium">Genre</span>
      <Select
        value={filters.withGenres[0]?.toString() ?? "all"}
        onValueChange={(value) =>
          setFilters({
            withGenres: value === "all" ? [] : [Number(value)],
          })
        }
      >
        <SelectTrigger className="bg-muted/50 border-border/40 focus:border-orange-500/50">
          <SelectValue placeholder="All genres" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All genres</SelectItem>
          {Object.entries(GENRES).map(([id, name]) => (
            <SelectItem key={id} value={id}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
