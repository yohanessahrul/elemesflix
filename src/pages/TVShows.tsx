import PosterCard from "../components/common/PosterCard";
import SectionError from "../components/common/SectionError";
import SectionLoader from "../components/common/SectionLoader";
import { useLatestTv } from "../hooks/useTvShows";
import type { TVShow } from "../types/tvs";

export default function TvShowPage () {
  const {data, isLoading, isError, error} = useLatestTv();

  if (isLoading) {
    return <SectionLoader title="Latest TV" />;
  }

  if (isError) {
    return <SectionError title="Latest TV" error={error} />;
  }

  return (
    <section aria-labelledby="Latest TV">
      <h2 className="text-white text-2xl font-bold">Latest TV Show</h2>
      <div className="flex flex-wrap my-4">
        {data && data.results.length !== 0 && data.results.map((item: TVShow) => {
          return (
            <div key={item.id} className="min-w-0 shrink-0 basis-1/3 px-2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 mb-4">
              <PosterCard item={item} alt={item.original_name ? item.original_name : ""} />
            </div>
          );
        })}
      </div>
    </section>
  )
}