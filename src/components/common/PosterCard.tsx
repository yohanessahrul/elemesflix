import { Check, Plus, Trash2 } from 'lucide-react';
import type { Movie } from '../../types/movies';
import type { TVShow } from '../../types/tvs';
import { useWatchlists } from '../../stores/watchlist-store';

interface PosterCardType {
  item: Movie | TVShow;
  alt: string;
  isHasCTA?: boolean;
}

export default function PosterCard(props: PosterCardType) {
  const { watchList, isSuccessAdd, addToWatchList, removeOnWatchlist } = useWatchlists();

  const addToWatchlistHandler = (item: Movie | TVShow) => {
    const available = watchList.find((list) => item.id === list.id);
    if (!available) {
      addToWatchList(item)
    }
}

  return (
    <div className="group rounded-lg overflow-hidden cursor-pointer relative">
      {props.item.poster_path ?
        <img
          src={`${import.meta.env.VITE_TMDB_IMAGE_URL}/w300${props.item.poster_path}`}
          alt={props.alt}
        />
        :
        <img src="/no-image.png" alt="no-image" />
      }
      
      {props.isHasCTA && (
        <div className="absolute bottom-0 left-0 w-full z-50  flex justify-center items-end transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-linear-to-t from-black to-transparent">
          <div className='flex flex-col'>
            <div className='flex justify-center items-center'>
              <button
                className={`${isSuccessAdd ? 'bg-green-500': 'bg-amber-300'} px-4 py-2 rounded-md cursor-pointer flex text-md`}
                onClick={() => addToWatchlistHandler(props.item)}
              >
                {isSuccessAdd ? <Check /> : <Plus />} &nbsp; {isSuccessAdd ? "Success" : "Watchlist"}
              </button>
            </div>
            <div className='text-center py-2'>
              <h2 className='text-white font-bold text-lg px-4'>{props.item.original_name ? props.item.original_name : props.item.original_title}</h2>
              <p className='text-yellow-400 text-[14px]'>Rating : {props.item.vote_average}</p>
            </div>
          </div>
        </div>
      )}

      {!props.isHasCTA && (
        <div className="absolute bottom-0 left-0 w-full z-50  flex justify-center items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-linear-to-t from-black to-transparent">
          <div className='flex flex-col'>

            <div className='flex justify-center items-center'>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer flex text-md"
                onClick={() => {
                  removeOnWatchlist(props.item.id)
                }}
              >
                <Trash2 /> &nbsp; Remove
              </button>
            </div>
            <div className='text-center py-2'>
              <h2 className='text-white font-bold text-lg px-4'>{props.item.original_name ? props.item.original_name : props.item.original_title}</h2>
              <p className='text-yellow-400 text-[14px]'>Rating : {props.item.vote_average}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
