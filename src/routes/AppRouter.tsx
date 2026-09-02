import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailPage from "../pages/Detail";
import MoviesPage from "../pages/Movies";
import WatchListPage from "../pages/WatchList";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv-shows" element={<DetailPage />} />
        <Route path="/watchlist" element={<WatchListPage />} />
      </Routes>
    </BrowserRouter>
  )
}