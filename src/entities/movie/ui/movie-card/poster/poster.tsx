"use client";

import Image from "next/image";
import { type FC, useState } from "react";
import { imageSizes } from "@/entities/movie/utils/image-sizes";
import { useViewObserver } from "@/shared/libs/hooks/use-view-observer";

interface Props {
  title: string;
  posterPath?: string | null;
  size?: "w500" | "w780" | "original";
}

export const MoviePoster: FC<Props> = ({ title, posterPath, size = "original" }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { isInView, observerRef } = useViewObserver();

  if (imageError || !posterPath) {
    return (
      <div
        ref={observerRef}
        className="w-full aspect-[2/3] bg-muted flex items-center justify-center"
      >
        <div className="text-center p-4">
          <div className="text-4xl mb-2">🎬</div>
          <p className="text-muted-foreground text-sm">No Poster</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={observerRef} className="relative w-full aspect-[2/3] overflow-hidden rounded-md">
      {isInView && (
        <Image
          priority
          fill
          src={`${process.env.NEXT_PUBLIC_MOVIES_IMAGES}/${size}/${posterPath}`}
          alt={title}
          sizes={imageSizes}
          className="w-full h-full object-cover transition-opacity duration-500"
          onError={() => setImageError(true)}
          onLoad={() => setImageLoaded(true)}
        />
      )}
      {(!isInView || !imageLoaded) && (
        <div className="absolute inset-0 bg-foreground/10 animate-pulse" />
      )}
    </div>
  );
};
