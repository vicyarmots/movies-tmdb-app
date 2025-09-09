import { ArrowLeft } from "lucide-react";
import type { FC } from "react";
import { Button } from "@/shared/ui/button";

type MovieDetailsNotFound = {
  onBack: () => void;
};

export const MovieDetailsNotFound: FC<MovieDetailsNotFound> = ({ onBack }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="text-6xl mb-4">🎬</div>
      <h2 className="text-xl font-medium mb-2">Movie not found</h2>
      <p className="text-muted-foreground mb-6">
        The movie you're looking for doesn't exist or has been removed.
      </p>
      <Button onClick={onBack} variant="outline">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Movies
      </Button>
    </div>
  );
};
