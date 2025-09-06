import { Input } from "@/shared/ui/input";
import { Search } from "lucide-react";
import { useMoviesFiltersStore } from "../movies-filters/model/use-movies-filters-store";

export const SearchMovies = () => {
  const { searchQuery, setSearchQuery } = useMoviesFiltersStore();

  return (
    <>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <Input
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 bg-muted/50 border-border/40 focus:border-orange-500/50"
      />
    </>
  );
};
