import type { FC, PropsWithChildren } from "react";
import { useViewModeStore, type ViewMode } from "../model/view-mode-store";

const GRID_CLASSES_VIEW_MODE: Record<ViewMode, string> = {
  grid: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-6",
  list: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
};

export const ViewModeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { viewMode } = useViewModeStore();
  const gridClass = GRID_CLASSES_VIEW_MODE[viewMode];
  return <div className={gridClass}>{children}</div>;
};
