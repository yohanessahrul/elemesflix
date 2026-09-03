import { Link, useLocation } from "react-router-dom";
import { useWatchlists } from "../../stores/watchlist-store";
import { useEffect, useState } from "react";

export default function Header() {
  const { watchList } = useWatchlists();
  const [activeMenu, setActiveMenu] = useState("");
  const location = useLocation();

  useEffect(() => {
  setActiveMenu(location.pathname);
}, [location.pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-100 bg-linear-to-b from-black to-transparent">
      <div className="flex h-17 items-center px-4 md:px-8 lg:px-12">
        {/* Logo */}
        <Link to="/" className="mr-8 shrink-0">
          <span className="text-[24px] font-black tracking-[-1.5px] text-red-600 md:text-[28px]">
            ELEMESFLIX
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 text-[14px] md:flex">
          <Link to="/movies" className={`text-gray-300 transition hover:text-white text-xl px-4 py-1 rounded-3xl ${activeMenu == '/movies' ? "bg-gray-900 " : ""}`}>
            Movies
          </Link>
          <Link to="/tv-shows" className={`text-gray-300 transition hover:text-white text-xl px-4 py-1 rounded-3xl ${activeMenu == '/tv-shows' ? "bg-gray-900 " : ""}`}>
            TV Shows
          </Link>
          <Link to="/watchlist" className={`text-gray-300 transition hover:text-white text-xl px-4 py-1 rounded-3xl ${activeMenu == '/watchlist' ? "bg-gray-900 " : ""}`}>
            My List {watchList.length > 0 ? `(${watchList.length})`: ""}
          </Link>
        </nav>

        {/* Right Side */}
        <div className="ml-auto flex items-center gap-5 text-white">
          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="transition hover:text-gray-300"
          >
            {/* <Search size={21} strokeWidth={2} /> */}
            Search
          </button>

          {/* Mobile Menu */}
          <button type="button" aria-label="Menu" className="md:hidden">
            {/* <Menu size={24} /> */}M
          </button>
        </div>
      </div>
    </header>
  );
}
