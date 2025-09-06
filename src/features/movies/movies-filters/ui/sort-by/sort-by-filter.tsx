import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";
import { useMoviesFiltersStore } from "../../model/use-movies-filters-store";

type SortBy = "dateAdded" | "title" | "releaseDate" | "priority";

const sortOptions: { value: SortBy; label: string }[] = [
  { value: "dateAdded", label: "Date Added" },
  { value: "title", label: "Title" },
  { value: "releaseDate", label: "Release Date" },
  { value: "priority", label: "Priority" },
] as const;

export const SortByFilter = () => {
  const { filters, setFilters } = useMoviesFiltersStore();

  return (
    <div className="space-y-2">
      <span className="text-sm font-medium">Sort by</span>
      <Select
        value={filters.sortBy}
        onValueChange={(value: SortBy) => setFilters({ sortBy: value })}
      >
        <SelectTrigger className="bg-muted/50 border-border/40 focus:border-orange-500/50">
          <SelectValue placeholder="Sort by..." />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
