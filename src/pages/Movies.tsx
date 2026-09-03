import PosterCard from "../components/common/PosterCard";
import SectionError from "../components/common/SectionError";
import SectionLoader from "../components/common/SectionLoader";
import { useLatestMovies } from "../hooks/useMovies"
import type { Movie } from "../types/movies";

export default function MoviesPage () {
  const {data, isLoading, isError, error} = useLatestMovies();

  if (isLoading) {
    return <SectionLoader title="Latest Movies" />;
  }

  if (isError) {
    return <SectionError title="Latest Movies" error={error} />;
  }

  return (
    <section aria-labelledby="Latest Movies">
      <h2 className="text-white text-2xl font-bold">Latest Movies</h2>
      <div className="flex flex-wrap my-4">
        {data && data.results.length !== 0 && data.results.map((item: Movie) => {
          return (
            <div key={item.id} className="min-w-0 shrink-0 basis-1/3 px-2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 mb-4">
              <PosterCard item={item} alt={item.title} isHasCTA={true} />
            </div>
          );
        })}
      </div>
    </section>
  )
}