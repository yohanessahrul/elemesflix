import { useParams } from 'react-router-dom';
import SectionError from '../components/common/SectionError';
import SectionLoader from '../components/common/SectionLoader';
import { useMultipleSearch } from '../hooks/useSearch';
import PosterCard from '../components/common/PosterCard';
import { useEffect, useState } from 'react';
import type { Movie } from '../types/movies';

export default function SearchPage() {
  const { query } = useParams();
  const [keyword, setKeyword] = useState("");
  const { data, isError, error, isFetching } = useMultipleSearch(keyword);

  useEffect(() => {
    if (query) {
      setTimeout(() => {
        setKeyword(query)
      }, 500)
    }
  }, [query]);

  if (isFetching) {
    return <SectionLoader title="Search Movies" />;
  }

  if (isError) {
    return <SectionError title="Search Movies" error={error} />;
  }

  return (
    <section aria-labelledby="Search Movies">
      <h2 className="text-white text-2xl font-bold">Search </h2>
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
  );
}
