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
    slidesToScroll: 1,
    startIndex: 2,
    loop: true,
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

  return (
    <section aria-labelledby={props.title.toLowerCase()}>
      <h2 className="text-white text-2xl font-bold">{props.title}</h2>
      <div className="w-full my-4">
        <div className="embla">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex [touch-action:pan-y_pinch-zoom]">
              {data &&
                data.results.length !== 0 &&
                data.results.map((item: TVShow) => {
                  return (
                    <div
                      key={item.id}
                      className="min-w-0 shrink-0 basis-1/3 px-2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                    >
                      <PosterCard
                        item={item}
                        alt={item.original_name ? item.original_name : ''}
                      />
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="mt-4 flex justify-end gap-1">
            {emblaApi?.scrollSnapList().map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={selectedIndex === index ? 'true' : undefined}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-1 sm:h-1 md:h-2 rounded-full transition-all ${
                  selectedIndex === index ? 'w-3 sm:w-3 md:w-6 bg-white' : 'w-1 sm:w-1 md:w-2 bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
