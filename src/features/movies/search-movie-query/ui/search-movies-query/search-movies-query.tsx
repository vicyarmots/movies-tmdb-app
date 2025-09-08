import { Input } from "@/shared/ui/input";
import { Search } from "lucide-react";
import { useSearchMoviesQueryStore } from "../../model/hooks/use-search-movies-query";

export const SearchMoviesQuery = () => {
  const { searchQuery, setSearchQuery } = useSearchMoviesQueryStore();

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <Input
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 bg-muted/50 border-border/40 focus:border-orange-500/50"
      />
    </div>
  );
};
