import { Movie } from "@/processes/api/services/tmdb/custom/custom.types";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/utils/cn/cn";
import { Eye, EyeOff } from "lucide-react";
import type { FC } from "react";

type ToggleWatchedProps = {
  isIcon?: boolean;
  isWatched: boolean;
} & Pick<Movie, "id">;

export const ToggleWatched: FC<ToggleWatchedProps> = ({ id, isWatched, isIcon = false }) => {
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
        // toggleWatched(id);
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
