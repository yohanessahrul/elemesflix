import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MoviesPage from "../pages/Movies";
import WatchListPage from "../pages/WatchList";
import TvShowPage from "../pages/TVShows";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv-shows" element={<TvShowPage />} />
        <Route path="/watchlist" element={<WatchListPage />} />
      </Routes>
    </BrowserRouter>
  )
}