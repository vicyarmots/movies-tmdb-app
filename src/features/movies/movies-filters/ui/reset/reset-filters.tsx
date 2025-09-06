import { Button } from "@/shared/ui/button";
import { useMoviesFiltersStore } from "../../model/use-movies-filters-store";

export const ResetFilters = () => {
  const { resetFilters } = useMoviesFiltersStore();

  return (
    <Button
      onClick={resetFilters}
      variant="default"
      className="w-full justify-between bg-orange-500 hover:bg-orange-600 text-white"
    >
      Reset all filters
    </Button>
  );
};
