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
      <h2 className="text-white text-2xl font-bold">Latest TV</h2>
      <div className="flex flex-wrap my-4">
        {data && data.results.length !== 0 && data.results.map((item: TVShow) => {
          return (
            <div key={item.id} className="embla__slide mb-4">
              <PosterCard item={item} alt={item.original_name ? item.original_name : ""} />
            </div>
          );
        })}
      </div>
    </section>
  )
}