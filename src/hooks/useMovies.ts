import { useQuery } from '@tanstack/react-query';

import {
  getLatestMovies,
  getPopularMovies,
  getUpcomingMovies,
} from '../services/movieApi';

export const usePopularMovies = () => {
  return useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: getPopularMovies,
  });
};

export const useUpcomingMovies = () => {
  return useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: getUpcomingMovies,
  });
};

export const useLatestMovies = () => {
  return useQuery({
    queryKey: ['movies', 'latest'],
    queryFn: getLatestMovies,
  });
};
