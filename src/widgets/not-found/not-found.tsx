import { Film } from "lucide-react";
import { ReloadButton } from "@/entities/navigation/ui/reload";

export const NotFoundWidget = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full h-screen">
      <Film className="w-16 h-16 text-muted-foreground mb-4" />
      <h1 className="text-3xl font-medium mb-2">No movies found</h1>
      <ReloadButton />
    </div>
  );
};
