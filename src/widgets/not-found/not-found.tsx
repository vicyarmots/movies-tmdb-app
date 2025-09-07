import { ReloadButton } from "@/entities/navigation/ui/reload";
import { Film } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full h-screen">
      <Film className="w-16 h-16 text-muted-foreground mb-4" />
      <h1 className="text-3xl font-medium mb-2">No movies found</h1>
      <p className="text-muted-foreground mb-6 max-w-md text-xl">{"404 Server error"}</p>
      <ReloadButton />
    </div>
  );
};
