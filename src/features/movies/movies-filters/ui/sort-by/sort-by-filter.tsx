import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";
import { useDiscoverFilterStore } from "../../model/use-discover-filter-store";
import { type SortBy, sortOptions } from "../../utils/movies-filters.helpers";

export const SortByFilter = () => {
  const { filters, setFilters } = useDiscoverFilterStore();

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
