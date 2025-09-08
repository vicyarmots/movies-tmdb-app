import type { TMDBOriginMediaImage, TMDBOriginMediaImageResponse } from "../../origin/origin.types";
import type { IMediaImage, IMediaImageResponse } from "../custom.types";

export function transformMediaImages(data: TMDBOriginMediaImageResponse): IMediaImageResponse {
  const mapImage = (img: TMDBOriginMediaImage): IMediaImage => ({
    aspectRatio: img.aspect_ratio,
    height: img.height,
    iso639_1: img.iso_639_1 ?? null,
    filePath: img.file_path,
    voteAverage: img.vote_average,
    voteCount: img.vote_count,
    width: img.width,
  });

  return {
    id: data.id,
    backdrops: data.backdrops.map(mapImage),
    logos: data.logos.map(mapImage),
    posters: data.posters.map(mapImage),
  };
}
