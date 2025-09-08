import { ClockFading, Flame, Popcorn, Star } from "lucide-react";
import { useMoviesTabParams } from "../../model/hooks/use-movies-tab-params";
import { activeTab, type ActiveTabKey } from "../../model/types/types";
import { Button } from "@/shared/ui/button";

const moviesTabIcons = {
  topRated: <Star />,
  popular: <Flame />,
  upcoming: <ClockFading />,
};

export const MoviesTabs = () => {
  const { currentTab, handleTabClick } = useMoviesTabParams();

  return (
    <div className="flex gap-2">
      {(Object.keys(activeTab) as ActiveTabKey[]).map((key) => (
        <Button
          size="sm"
          key={key}
          onClick={() => handleTabClick(key)}
          className={`flex items-center px-3 py-2 rounded-md transition-colors bg-accent ${
            currentTab === key
              ? "bg-orange-500 hover:bg-orange-600 text-white"
              : "hover:bg-muted/80 text-foreground"
          }`}
        >
          {moviesTabIcons[key]}
          {activeTab[key]}
        </Button>
      ))}
    </div>
  );
};
