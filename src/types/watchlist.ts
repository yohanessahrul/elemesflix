export interface WatchListType {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  media_type: 'movie' | 'tv';
}
