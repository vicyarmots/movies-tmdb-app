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
  {
    title: "Avatar: The Way of Water",
    poster: "https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    genre: "Fantasy",
    priority: "High",
    isWatched: false,
    isFavorite: true,
    releaseDate: "2022-12-16T00:00:00.000Z",
    overview:
      "Jake Sully and Neytiri struggle to keep their family together, navigating the challenges of Pandora and facing new threats from humans.",
    rating: 8.4,
    tmdbId: 76600,
  },
  {
    title: "Black Panther: Wakanda Forever",
    poster: "https://image.tmdb.org/t/p/original/ps2oKfhY6DL3alynlSqY97gHSBG.jpg",
    genre: "Action",
    priority: "High",
    isWatched: true,
    isFavorite: true,
    releaseDate: "2022-11-11T00:00:00.000Z",
    overview:
      "Queen Ramonda and Shuri must protect Wakanda after the death of King T'Challa, facing new threats from Namor and the Talokan forces.",
    rating: 8.2,
    tmdbId: 505642,
  },
  {
    title: "Elvis",
    poster: "https://image.tmdb.org/t/p/original/94TYA2MJvZC7RjXkLgY5h39Yf4.jpg",
    genre: "Music",
    priority: "Medium",
    isWatched: false,
    isFavorite: false,
    releaseDate: "2022-06-24T00:00:00.000Z",
    overview:
      "The life story of Elvis Presley, exploring his rise to fame, love life, and iconic performances that shaped music history.",
    rating: 7.9,
    tmdbId: 646389,
  },
  {
    title: "Nope",
    poster: "https://image.tmdb.org/t/p/original/kE2oQXPaV8J6q2cLwE3rA4z7t3E.jpg",
    genre: "Horror",
    priority: "Medium",
    isWatched: true,
    isFavorite: false,
    releaseDate: "2022-07-22T00:00:00.000Z",
    overview:
      "Residents in a lonely valley experience terrifying and inexplicable events surrounding a mysterious spaceship.",
    rating: 7.5,
    tmdbId: 760161,
  },
  {
    title: "Killers of the Flower Moon",
    poster: "https://image.tmdb.org/t/p/original/yZQbPz28dQ1U0vLptK7Er3t2fF7.jpg",
    genre: "Crime",
    priority: "High",
    isWatched: false,
    isFavorite: true,
    releaseDate: "2023-10-20T00:00:00.000Z",
    overview:
      "The serial murders of Osage people in 1920s Oklahoma are investigated, exposing the dark side of the American oil boom.",
    rating: 8.8,
    tmdbId: 726684,
  },
  {
    title: "John Wick: Chapter 4",
    poster: "https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    genre: "Action",
    priority: "High",
    isWatched: true,
    isFavorite: true,
    releaseDate: "2023-03-24T00:00:00.000Z",
    overview:
      "John Wick faces new enemies and allies as he fights to protect those he loves and uncover the truth behind his past.",
    rating: 8.4,
    tmdbId: 624860,
  },
  {
    title: "The Fabelmans",
    poster: "https://image.tmdb.org/t/p/original/qG3RYlIVpTYclR9TYIsy8pR1s2X.jpg",
    genre: "Drama",
    priority: "Medium",
    isWatched: false,
    isFavorite: false,
    releaseDate: "2022-11-11T00:00:00.000Z",
    overview:
      "The young Steven Fabelman discovers a love for filmmaking while navigating family challenges and personal growth.",
    rating: 8.1,
    tmdbId: 634528,
  },
  {
    title: "Guardians of the Galaxy Vol. 3",
    poster: "https://image.tmdb.org/t/p/original/bqQLvShB2bW7RTl2x4dEAlkSxGO.jpg",
    genre: "Action",
    priority: "Medium",
    isWatched: true,
    isFavorite: true,
    releaseDate: "2023-05-03T00:00:00.000Z",
    overview:
      "The Guardians must protect the galaxy from a new threat, facing personal struggles and testing their bonds as a team.",
    rating: 8.3,
    tmdbId: 447404,
  },
  {
    title: "The Whale",
    poster: "https://image.tmdb.org/t/p/original/9o1lP2Qb0rQXjZc5r1JpG9hJxZH.jpg",
    genre: "Drama",
    priority: "High",
    isWatched: false,
    isFavorite: true,
    releaseDate: "2022-12-09T00:00:00.000Z",
    overview:
      "A reclusive English teacher attempts to reconnect with his estranged teenage daughter while struggling with his own personal demons.",
    rating: 8.0,
    tmdbId: 1015962,
  },
  {
    title: "Lightyear",
    poster: "https://image.tmdb.org/t/p/original/ikGNdXj9kOQZC4MwsOwYbJZqXEZ.jpg",
    genre: "Animation",
    priority: "Low",
    isWatched: false,
    isFavorite: false,
    releaseDate: "2022-06-15T00:00:00.000Z",
    overview:
      "The origin story of Buzz Lightyear, the hero who inspired the toy in Andy's room, embarking on a cosmic adventure.",
    rating: 7.3,
    tmdbId: 507086,
  },
  {
    title: "Barbie",
    poster: "https://image.tmdb.org/t/p/original/9BqB9y0v4UODcYFkgxHfYdlGMIh.jpg",
    genre: "Comedy",
    priority: "Medium",
    isWatched: true,
    isFavorite: true,
    releaseDate: "2023-07-21T00:00:00.000Z",
    overview:
      "A whimsical adventure following Barbie as she discovers her own identity and navigates challenges in the real world.",
    rating: 7.8,
    tmdbId: 502356,
  },
];
