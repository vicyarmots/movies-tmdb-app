import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";
import { useMoviesFiltersStore } from "../../model/use-movies-filters-store";

type Priority = "all" | "High" | "Medium" | "Low";

const priorities: { value: Priority; label: string }[] = [
  { value: "all", label: "All priorities" },
  { value: "High", label: "High" },
  { value: "Medium", label: "Medium" },
  { value: "Low", label: "Low" },
] as const;

export const PriorityFilter = () => {
  const { filters, setFilters } = useMoviesFiltersStore();

  return (
    <div className="space-y-2">
      <span className="text-sm font-medium">Priority</span>
      <Select
        value={filters.priority}
        onValueChange={(value: Priority) => setFilters({ priority: value })}
      >
        <SelectTrigger className="bg-muted/50 border-border/40 focus:border-orange-500/50">
          <SelectValue placeholder="All priorities" />
        </SelectTrigger>
        <SelectContent>
          {priorities.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
