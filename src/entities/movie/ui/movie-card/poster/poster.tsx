"use client";
import { Movie } from "@/shared/utils/movies-data/movies-data";
import Image from "next/image";
import { type FC, useState } from "react";

type MoviePosterProps = Pick<Movie, "title" | "poster">;

export const MoviePoster: FC<MoviePosterProps> = ({ poster, title }) => {
  const [imageError, setImageError] = useState(false);
  return (
    <>
      {!imageError ? (
        <Image
          src={poster}
          alt={title}
          width={100}
          height={100}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <div className="text-center p-4">
            <div className="text-4xl mb-2">🎬</div>
            <p className="text-muted-foreground text-sm">No Poster</p>
          </div>
        </div>
      )}
    </>
  );
};
