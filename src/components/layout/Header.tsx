// import { Search, Bell, ChevronDown, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
      <div className="flex h-[68px] items-center px-4 md:px-8 lg:px-12">
        {/* Logo */}
        <a href="/" className="mr-8 shrink-0">
          <span className="text-[24px] font-black tracking-[-1.5px] text-red-600 md:text-[28px]">
            NETFLIX
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 text-[14px] md:flex">
          <a href="/movies" className="font-medium text-white">
            Movies
          </a>

          <a
            href="/tv-shows"
            className="text-gray-300 transition hover:text-white"
          >
            TV Shows
          </a>

          <a
            href="/watchlist"
            className="text-gray-300 transition hover:text-white"
          >
            My List
          </a>
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

          {/* Kids */}
          <span className="hidden text-sm md:block">Kids</span>

          {/* Notification */}
          <button
            type="button"
            aria-label="Notifications"
            className="hidden transition hover:text-gray-300 sm:block"
          >
            {/* <Bell size={21} /> */}
            Bell
          </button>

          {/* Profile */}
          <button
            type="button"
            className="flex items-center gap-1"
            aria-label="Profile"
          >
            <img src="/avatar.png" alt="Profile" className="h-8 w-8 rounded" />
            {/* <ChevronDown
              size={15}
              className="hidden transition-transform md:block"
            /> */}
            V
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
