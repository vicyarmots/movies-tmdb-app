import { Button } from "@/shared/ui/button";
import { Grid3X3, List } from "lucide-react";
import { useViewModeStore } from "../model/view-mode-store";

export const ViewModeToggle = () => {
  const { viewMode, toggleViewMode } = useViewModeStore();
  const Icon = viewMode === "grid" ? List : Grid3X3;

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleViewMode}
      className="border-border/40 hover:border-orange-500/50"
    >
      <Icon className="w-4 h-4" />
    </Button>
  );
};
