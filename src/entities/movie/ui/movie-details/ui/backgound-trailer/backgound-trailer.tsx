import { MovieVideo } from "@/processes/api/services/tmdb/custom/custom.types";
import type { FC } from "react";

type BackgoundTrailerProps = {
  trailer: MovieVideo;
};

export const BackgoundTrailer: FC<BackgoundTrailerProps> = ({ trailer }) => {
  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      <div className="absolute inset-0 w-full h-full bg-background opacity-10">
        <iframe
          className="w-[400.77vw] h-[100vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&loop=1&playlist=${trailer.key}&controls=0&modestbranding=1&disablekb=1&iv_load_policy=3&rel=0&showinfo=0`}
          title={trailer.name}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  );
};
