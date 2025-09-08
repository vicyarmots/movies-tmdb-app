import { Movie } from "@/processes/api/services/tmdb/domain/custom.types";
import { Button } from "@/shared/ui/button";
import { Heart } from "lucide-react";
import type { FC } from "react";

type ToggleFavoriteProps = {
  isIcon?: boolean;
  isFavorite: boolean;
} & Pick<Movie, "id">;

export const ToggleFavorite: FC<ToggleFavoriteProps> = ({ id, isFavorite, isIcon = false }) => {
  // const { toggleFavorite } = useMovieActionsStore();

  return (
    <Button
      size={isIcon ? "sm" : "default"}
      variant={isFavorite ? "default" : "secondary"}
      onClick={(e) => {
        e.stopPropagation();
        // toggleFavorite(id);
      }}
      className={`${!isIcon ? "w-full" : ""} ${isFavorite ? "bg-red-500 hover:bg-red-600" : "bg-background/80 hover:bg-background/90"}`}
    >
      <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
      {!isIcon && (isFavorite ? "Remove from Favorites" : "Add to Favorites")}
    </Button>
  );
};
