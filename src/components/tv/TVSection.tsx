import { useEffect, useState } from 'react';
import type { TVShow, TVShowResponse } from '../../types/tvs';
import useEmblaCarousel from 'embla-carousel-react';
import SectionLoader from '../common/SectionLoader';
import SectionError from '../common/SectionError';
import PosterCard from '../common/PosterCard';

interface TVQueryResult {
  data?: TVShowResponse;
  isLoading: boolean;
  isError: boolean;
  error: any;
}

interface RowSectionType {
  title: string;
  customTVHooks: () => TVQueryResult;
}

export default function TVSection(props: RowSectionType) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { data, isLoading, isError, error } = props.customTVHooks();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: false,
    slidesToScroll: 5,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  if (isLoading) {
    return <SectionLoader title={props.title} />;
  }

  if (isError) {
    return <SectionError title={props.title} error={error} />;
  }

  console.log("data", data?.results);

  return (
    <section aria-labelledby={props.title.toLowerCase()}>
      <h2 className="text-white text-2xl font-bold">{props.title}</h2>
      <div className="w-full my-4">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {data &&
                data.results.length !== 0 &&
                data.results.map((item: TVShow) => {
                  return (
                    <div key={item.id} className="embla__slide">
                      <PosterCard item={item} alt={item.original_name ? item.original_name : ""} />
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="mt-4 flex justify-end gap-2">
            {emblaApi?.scrollSnapList().map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={selectedIndex === index ? 'true' : undefined}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  selectedIndex === index ? 'w-6 bg-white' : 'w-2 bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
