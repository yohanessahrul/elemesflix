import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MoviesPage from "../pages/Movies";
import WatchListPage from "../pages/WatchList";
import TvShowPage from "../pages/TVShows";
import SearchPage from "../pages/Search";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/tv-shows" element={<TvShowPage />} />
      <Route path="/watchlist" element={<WatchListPage />} />
      <Route path="/search/:query" element={<SearchPage />} />
    </Routes>
  )
}