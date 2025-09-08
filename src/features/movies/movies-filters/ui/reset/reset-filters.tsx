import { Button } from "@/shared/ui/button";
import { useDiscoverFilterStore } from "../../model/use-discover-filter-store";

export const ResetFilters = () => {
  const { resetFilters } = useDiscoverFilterStore();

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
