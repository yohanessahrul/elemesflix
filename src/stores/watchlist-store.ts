import { create } from 'zustand';

export interface ItemType {
  id: number;
  title?: string;
  original_name?: string;
  vote_average: number;
  vote_count: number;
}

interface WatchlistStore {
  isSuccessAdd: boolean;
  watchList: ItemType[];
  addToWatchList: (movie: ItemType) => void;
  removeOnWatchlist: (id: number) => void;
}

export const useWatchlists = create<WatchlistStore>((set) => ({
  isSuccessAdd: false,
  watchList: JSON.parse(localStorage.getItem('watchlist') || '[]'),
  addToWatchList: (movie) => {
    set((state) => {
      const newWatchlist = [...state.watchList, movie];
      localStorage.setItem('watchlist', JSON.stringify(newWatchlist));

      return {
        watchList: newWatchlist,
        isSuccessAdd: true,
      };
    });
    setTimeout(() => {
      set(() => ({
        isSuccessAdd: false,
      }));
    }, 300);
  },
  removeOnWatchlist: (id) =>
    set((state) => {
      const newWatchlist = state.watchList.filter((list) => list.id !== id);
      localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
      return {
        watchList: newWatchlist,
      };
    }),
}));
