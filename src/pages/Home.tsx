import MovieSection from "../components/movies/MovieSection";
import TVSection from "../components/tv/TVSection";
import { usePopularMovies, useUpcomingMovies } from "../hooks/useMovies";
import { usePopularTv, useTopRatedTv } from "../hooks/useTvShows";

export default function Home () {
  return (
    <>
      <section aria-labelledby="hero">
        <p className="text-yellow-400">Hero Component here...</p>
        {/* {!isLoading && <p className="text-yellow-400">{JSON.stringify(data)}</p>} */}
      </section>

      <MovieSection title="Upcoming Movies" customMovieHooks={useUpcomingMovies} />
      <MovieSection title="Popular Movies" customMovieHooks={usePopularMovies} />
      <TVSection title="Popular TV" customTVHooks={usePopularTv} />
      <TVSection title="TOP Rated TV" customTVHooks={useTopRatedTv} />
    </>
  )
}