# 🎬 Movies TMDB App

A sleek, responsive web app to discover, track, and explore movies powered by **The Movie Database (TMDB)**. Perfect for movie enthusiasts who want to keep their watchlist organized and never miss a trailer.

Vercel link - https://movies-tmdb-app.vercel.app
# Use it with VPN 

---

## 🌟 Features

- **Discover Your Movies** – Browse and explore a vast library of movies.
- **Detailed Exploration** – See movie details, trailers, and overviews.
- **Filters & Sorting** – Narrow down movies using filters and sorting options.
- **Watchlist** – Add movies to your watchlist so you never forget what to watch.
- **Responsive Design** – Fully usable on desktops and mobile screens.
- **Personalized Experience** – Explore movies tailored to your taste.
- **Statistics** – Check your movie stats from your profile.

> **Coming Soon**

- In-app **movie watching**
- Enhanced **statistics dashboard**

---

## 🛠 Tech Stack

- **Framework:** Next.js + Turbopack
- **Styling:** TailwindCSS + Shadcn/UI + RadixUI
- **Data Fetching:** SWR
- **State management:** Zustand 
- **Language:** TypeScript

---

flowchart TD
    A[Origin<br/>Raw source: TMDB proxy / other API] --> B[Domain<br/>Domain APIs and services<br/>Normalization and model transformation]
    B --> C[App<br/>SSR + Streaming<br/>Next.js App Router]
    C --> D[SWR<br/>Cache and feature-level revalidation]
    D --> E[Client<br/>UI: Entities + Widgets]

---

## 🔧 Tech Debt / Roadmap

### Features

- [ ] Pagination with `searchParams`
- [ ] Filters with `searchParams`
- [ ] Discover search with all applied filters

### Fixes

- [ ] UI bugs for adaptive screens
- [ ] Error pages UI for different cases
- [ ] Dark mode toggle

### SEO Improvements

- [ ] `robots.txt`
- [ ] Dynamic sitemaps for movies
- [ ] [Schema.org](http://Schema.org) meta tags
- [ ] OpenGraph integration
- [ ] User-friendly links for movie details (`movies/movie?title=interstellar&id=123`)

### Optimization

- [ ] Prefetch movies on hover (Link prefetch after 3s focus)
- [x] Improved **LCP** for posters across different `MovieCard` sizes
- [ ] Image performance optimization via server requests
- [ ] Layout optimization using server `userAgent` for mobile screens
