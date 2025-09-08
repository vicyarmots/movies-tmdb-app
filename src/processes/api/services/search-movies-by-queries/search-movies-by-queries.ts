import { fetchApi } from "@/shared/libs/fetch-api/fatch-api";
import type { TMDBMoviesResponse, TMDBMovieTransformed } from "../../types";
import { getMoviesGenres } from "../get-movies-genres/get-movies-genres";
import useSWR from "swr";
import { useDebounce } from "@/shared/libs/hooks/use-debaunce";
import { create } from "zustand";
import { transformMovies } from "../../transformers/tranform-movies";

interface GetMoviesByQueryProps {
  query: string;
}

async function searchMovieByQueries({
  query,
}: GetMoviesByQueryProps): Promise<{ movies: TMDBMovieTransformed[]; totalPages: number } | []> {
  if (!query) {
    return [];
  }

  const params = new URLSearchParams();
  params.set("query", query);

  const data = await fetchApi<TMDBMoviesResponse>(`/discover/movie?${params.toString()}`, {
    cache: "no-store",
  });

  const movieGenresArray = await getMoviesGenres();
  const movieGenresMap: Record<number, string> = {};

  movieGenresArray.forEach((g) => {
    movieGenresMap[g.id] = g.name;
  });

  return {
    movies: transformMovies(data, movieGenresMap),
    totalPages: data.total_pages,
  };
}

export const useMovieSearchStore = create<{
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}>((set) => ({
  searchQuery: "",
  setSearchQuery: (q: string) => set({ searchQuery: q }),
}));

export const useSearchMovies = (query: string) => {
  const debouncedQuery = useDebounce(query, 500);

  const { data, error, isLoading } = useSWR(
    debouncedQuery ? ["searchMovies", debouncedQuery] : null,
    () => searchMovieByQueries({ query: debouncedQuery }),
    {
      revalidateOnFocus: false,
    },
  );

  return {
    movies: data ?? [],
    isLoading,
    isError: !!error,
  };
};
