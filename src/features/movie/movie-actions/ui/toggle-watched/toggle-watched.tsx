import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/utils/cn/cn";
import type { Movie } from "@/shared/utils/movies-data/movies-data";
import { Eye, EyeOff } from "lucide-react";
import type { FC } from "react";
import { useMovieActionsStore } from "../../model/use-movie-actions-store";

type ToggleWatchedProps = {
  isIcon?: boolean;
} & Pick<Movie, "isWatched" | "id">;

export const ToggleWatched: FC<ToggleWatchedProps> = ({ id, isWatched, isIcon = false }) => {
  const { toggleWatched } = useMovieActionsStore();

  const buttonClasses = cn(
    !isIcon && "w-full",
    isWatched ? "bg-green-500 hover:bg-green-600" : "bg-background/80 hover:bg-background/90",
  );

  return (
    <Button
      size={isIcon ? "sm" : "default"}
      variant="default"
      onClick={(e) => {
        e.stopPropagation();
        toggleWatched(id);
      }}
      className={buttonClasses}
    >
      {isIcon ? (
        isWatched ? (
          <Eye className="w-4 h-4" />
        ) : (
          <EyeOff className="w-4 h-4" />
        )
      ) : isWatched ? (
        "Mark as Unwatched"
      ) : (
        "Mark as Watched"
      )}
    </Button>
  );
};
