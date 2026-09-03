import PosterCard from "../components/common/PosterCard";
import { useWatchlists } from "../stores/watchlist-store"

export default function WatchListPage () {
  const { watchList } = useWatchlists();

  if (watchList.length === 0) {
    return (
      <section aria-labelledby="Watchlist">
        <h2 className="text-white text-2xl font-bold">Watchlist</h2>
      </section>
    )
  }

  return (
    <section aria-labelledby="Watchlist">
      <h2 className="text-white text-2xl font-bold">Watchlist</h2>
      <div className="flex flex-wrap my-4">
        {watchList && watchList.length !== 0 && watchList.map((item: any) => {
          return (
            <div key={item.id} className="min-w-0 shrink-0 basis-1/3 px-2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 mb-4">
              <PosterCard item={item} alt={item.title} />
            </div>
          );
        })}
      </div>
    </section>
  )
}