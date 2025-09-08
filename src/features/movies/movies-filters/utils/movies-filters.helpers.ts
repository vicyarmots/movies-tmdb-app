import { TMDBMovieTransformed } from "@/processes/api/types";

type Status = "all" | "watched" | "unwatched" | "favorites";
type Priority = "Low" | "Medium" | "High";

interface Movie {
  id: string;
  title: string;
  genre: string;
  releaseDate: string;
  addedDate: string;
  priority: Priority;
  isWatched: boolean;
  isFavorite: boolean;
}

interface Filters {
  status: Status;
  genre: string;
  priority: Priority | "all";
  sortBy: "title" | "releaseDate" | "priority" | "dateAdded";
}

const priorityOrder: Record<Priority, number> = {
  Low: 1,
  Medium: 2,
  High: 3,
};

const filterByStatus = (movies: Movie[], status: Status): Movie[] => {
  switch (status) {
    case "watched":
      return movies.filter((m) => m.isWatched);
    case "unwatched":
      return movies.filter((m) => !m.isWatched);
    case "favorites":
      return movies.filter((m) => m.isFavorite);
    default:
      return movies;
  }
};

const filterByGenreAndPriority = (
  movies: Movie[],
  genre: string,
  priority: Priority | "all",
): Movie[] => {
  return movies
    .filter((m) => (genre !== "all" ? m.genre === genre : true))
    .filter((m) => (priority !== "all" ? m.priority === priority : true));
};

// const filterBySearchQuery = (movies: TMDBMovieTransformed[], query: string): Movie[] => {
//   if (!query) return movies;
//   const q = query.toLowerCase();
//   return movies.filter(
//     (m) => m.title.toLowerCase().includes(q) || m.genre.toLowerCase().includes(q),
//   );
// };

const sortMovies = (movies: Movie[], sortBy: Filters["sortBy"]): Movie[] => {
  return [...movies].sort((a, b) => {
    switch (sortBy) {
      case "title":
        return a.title.localeCompare(b.title);
      case "releaseDate":
        return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      case "priority":
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      default:
        return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime();
    }
  });
};

// export const getFilteredMoviesHelper = (
//   movies: TMDBMovieTransformed[],
//   filters: Filters,
//   searchQuery: string,
// ): Movie[] => {
//   let result = filterBySearchQuery(movies, searchQuery);
//   result = filterByStatus(result, filters.status);
//   result = filterByGenreAndPriority(result, filters.genre, filters.priority);
//   return sortMovies(result, filters.sortBy);
// };
