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
  watchList: [],
  addToWatchList: (movie) => {
    set((state) => ({
      watchList: [...state.watchList, movie],
      isSuccessAdd: true,
    }));
    setTimeout(() => {
      set(() => ({
        isSuccessAdd: false,
      }));
    }, 1000);
  },
  removeOnWatchlist: (id) =>
    set((state) => ({
      watchList: state.watchList.filter((list) => list.id !== id),
    })),
}));
