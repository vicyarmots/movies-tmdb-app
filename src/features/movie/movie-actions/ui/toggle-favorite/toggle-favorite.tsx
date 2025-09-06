import { Button } from "@/shared/ui/button";
import type { Movie } from "@/shared/utils/movies-data/movies-data";
import { Heart } from "lucide-react";
import type { FC } from "react";
import { useMovieActionsStore } from "../../model/use-movie-actions-store";

type ToggleFavoriteProps = {
  isIcon?: boolean;
};

export const ToggleFavorite: FC<Pick<Movie, "isFavorite" | "id"> & ToggleFavoriteProps> = ({
  id,
  isFavorite,
  isIcon = false,
}) => {
  const { toggleFavorite } = useMovieActionsStore();

  return (
    <Button
      size={isIcon ? "sm" : "default"}
      variant={isFavorite ? "default" : "secondary"}
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite(id);
      }}
      className={`${!isIcon ? "w-full" : ""} ${isFavorite ? "bg-red-500 hover:bg-red-600" : "bg-background/80 hover:bg-background/90"}`}
    >
      <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
      {!isIcon && (isFavorite ? "Remove from Favorites" : "Add to Favorites")}
    </Button>
  );
};
