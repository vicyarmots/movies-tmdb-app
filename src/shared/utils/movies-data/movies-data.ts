export interface Movie {
  id: string;
  tmdbId?: number;
  title: string;
  poster: string;
  genre: string;
  priority: "High" | "Medium" | "Low";
  isWatched: boolean;
  isFavorite: boolean;
  releaseDate: string;
  overview: string;
  rating?: number;
  addedDate: string;
}

export const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "Thriller",
  "War",
  "Western",
];

export interface MovieFilters {
  status: "all" | "watched" | "unwatched" | "favorites";
  genre: string;
  priority: "all" | "High" | "Medium" | "Low";
  sortBy: "title" | "dateAdded" | "releaseDate" | "priority";
}

export const sampleMovies: Omit<Movie, "id" | "addedDate">[] = [
  {
    title: "Dune: Part Two",
    poster: "https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    genre: "Science Fiction",
    priority: "High",
    isWatched: false,
    isFavorite: true,
    releaseDate: "2024-02-29T00:00:00.000Z",
    overview:
      "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
    rating: 8.5,
    tmdbId: 693134,
  },
  {
    title: "The Batman",
    poster: "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    genre: "Action",
    priority: "High",
    isWatched: true,
    isFavorite: true,
    releaseDate: "2022-03-04T00:00:00.000Z",
    overview:
      "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    rating: 9.2,
    tmdbId: 414906,
  },
  {
    title: "Everything Everywhere All at Once",
    poster: "https://image.tmdb.org/t/p/original/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    genre: "Science Fiction",
    priority: "High",
    isWatched: true,
    isFavorite: true,
    releaseDate: "2022-03-25T00:00:00.000Z",
    overview:
      "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
    rating: 9.8,
    tmdbId: 545611,
  },
  {
    title: "Top Gun: Maverick",
    poster: "https://image.tmdb.org/t/p/original/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    genre: "Action",
    priority: "Medium",
    isWatched: true,
    isFavorite: false,
    releaseDate: "2022-05-27T00:00:00.000Z",
    overview:
      "After more than thirty years of service as one of the Navy's top aviators, Pete 'Maverick' Mitchell is where he belongs, pushing the envelope as a courageous test pilot.",
    rating: 8.7,
    tmdbId: 361743,
  },
  {
    title: "Oppenheimer",
    poster: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    genre: "Drama",
    priority: "High",
    isWatched: false,
    isFavorite: false,
    releaseDate: "2023-07-21T00:00:00.000Z",
    overview:
      "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    rating: 8.9,
    tmdbId: 872585,
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    poster: "https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    genre: "Animation",
    priority: "Medium",
    isWatched: false,
    isFavorite: true,
    releaseDate: "2023-06-02T00:00:00.000Z",
    overview:
      "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse.",
    rating: 9.1,
    tmdbId: 569094,
  },
  {
    title: "The Holdovers",
    poster: "https://image.tmdb.org/t/p/original/VHSzNBTwxV8vh7wylo7O9CLdac.jpg",
    genre: "Comedy",
    priority: "Low",
    isWatched: false,
    isFavorite: false,
    releaseDate: "2023-10-27T00:00:00.000Z",
    overview:
      "A curmudgeonly instructor at a New England prep school is forced to remain on campus during Christmas break to babysit the handful of students with nowhere to go.",
    rating: 8.3,
    tmdbId: 840430,
  },
  {
    title: "Past Lives",
    poster: "https://image.tmdb.org/t/p/original/k3waqVXSnvCZWfJYNtVGz2Rj8bg.jpg",
    genre: "Romance",
    priority: "Medium",
    isWatched: true,
    isFavorite: false,
    releaseDate: "2023-06-02T00:00:00.000Z",
    overview:
      "Nora and Hae Sung, two childhood friends, are reunited in New York for one fateful week as they confront notions of destiny, love, and the choices that make a life.",
    rating: 8.6,
    tmdbId: 1023922,
  },
];
