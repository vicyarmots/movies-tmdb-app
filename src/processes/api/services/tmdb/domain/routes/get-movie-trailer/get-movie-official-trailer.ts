import { getMovieVideosOrigin } from "../../../origin/routes/get-movie-videos/get-movie-videos";

export async function getMovieOfficialTrailerDomain(movieId: number) {
  const data = await getMovieVideosOrigin({ id: movieId });

  return data.results
    .filter((v) => v.site === "YouTube" && v.type === "Trailer")
    .sort((a, b) => (a.official === b.official ? 0 : a.official ? -1 : 1))[0];
}
