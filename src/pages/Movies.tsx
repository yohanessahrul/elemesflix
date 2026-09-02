import PosterCard from "../components/common/PosterCard";
import SectionError from "../components/common/SectionError";
import SectionLoader from "../components/common/SectionLoader";
import { useLatestMovies } from "../hooks/useMovies"
import type { Movie } from "../types/movies";

export default function MoviesPage () {
  const {data, isLoading, isError, error} = useLatestMovies();

  if (isLoading) {
    return <SectionLoader title="Latest Movie" />;
  }

  if (isError) {
    return <SectionError title="Latest Movie" error={error} />;
  }

  return (
    <section aria-labelledby="Latest Movie">
      <h2 className="text-white text-2xl font-bold">Latest Movie</h2>
      <div className="flex flex-wrap my-4">
        {data && data.results.length !== 0 && data.results.map((item: Movie) => {
          return (
            <div key={item.id} className="embla__slide mb-4">
              <PosterCard item={item} alt={item.title} />
            </div>
          );
        })}
      </div>
    </section>
  )
}