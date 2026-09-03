import MovieSection from "../components/movies/MovieSection";
import TVSection from "../components/tv/TVSection";
import { usePopularMovies, useUpcomingMovies } from "../hooks/useMovies";
import { usePopularTv, useTopRatedTv } from "../hooks/useTvShows";

export default function Home () {
  return (
    <>
      {/* <section aria-labelledby="hero">
        <p className="text-yellow-400">Hero Component here...</p>
      </section> */}

      <MovieSection title="Upcoming Movies" customMovieHooks={useUpcomingMovies} hasCTA={true} />
      <MovieSection title="Popular Movies" customMovieHooks={usePopularMovies} hasCTA={true} />
      <TVSection title="Popular TV" customTVHooks={usePopularTv} hasCTA={true} />
      <TVSection title="TOP Rated TV" customTVHooks={useTopRatedTv} hasCTA={true} />
    </>
  )
}