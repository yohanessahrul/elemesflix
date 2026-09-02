import type { Movie } from '../../types/movies';
import type { TVShow } from '../../types/tvs';

interface PosterCardType {
  item: Movie | TVShow;
  alt: string;
}

export default function PosterCard(props: PosterCardType) {
  return (
    <div className="rounded-lg overflow-hidden cursor-pointer">
      <img
        src={`${import.meta.env.VITE_TMDB_IMAGE_URL}/w300${props.item.poster_path}`}
        alt={props.alt}
      />
    </div>
  );
}
