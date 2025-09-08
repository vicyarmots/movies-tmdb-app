"use client";

import { imageSizes } from "@/entities/movie/utils/image-sizes";
import { Movie } from "@/processes/api/services/tmdb/domain/custom.types";
import Image from "next/image";
import { type FC, useState } from "react";

type Props = Pick<Movie, "title" | "posterPath">;

export const MoviePoster: FC<Props> = ({ title, posterPath }) => {
  const [imageError, setImageError] = useState(false);
  return (
    <>
      {!imageError ? (
        <Image
          priority
          fill
          src={`${process.env.NEXT_PUBLIC_MOVIES_IMAGES}${posterPath ?? ""}`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          sizes={imageSizes}
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
