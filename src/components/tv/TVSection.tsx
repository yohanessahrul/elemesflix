import type { TVShow, TVShowResponse } from "../../types/tvs";
import useEmblaCarousel from 'embla-carousel-react';

interface TVQueryResult {
  data?: TVShowResponse;
  isLoading: boolean;
  isError: boolean;
}

interface RowSectionType {
  title: string,
  customTVHooks: () => TVQueryResult
}

export default function TVSection (props: RowSectionType) {
  const {data, isLoading, isError} = props.customTVHooks();
  const [emblaRef] = useEmblaCarousel({ containScroll: false, slidesToScroll: 5 });

  if (isLoading) {
    return (
      <>
        <h2 className="text-white text-2xl">{props.title}</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="w-full min-h-87.5 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gray-700" />
            </div>
          ))}
        </div>
      </>
    )
  }

  if (isError) {
    return (
      <div className="w-full min-h-12.5 bg-red-200 my-4">
        Error !
      </div>
    )
  }

  return (
    <section aria-labelledby={props.title.toLowerCase()}>
      <h2 className="text-white text-2xl">{props.title}</h2>
      <div className="w-full my-4">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
                {data && data.results.length !== 0 && data.results.map((item: TVShow) => {
                  return (
                    <div key={item.id} className="embla__slide">
                      <div className="rounded-lg overflow-hidden">
                        <img src={`${import.meta.env.VITE_TMDB_IMAGE_URL}/w300${item.poster_path}`} alt={item.original_title}/>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}