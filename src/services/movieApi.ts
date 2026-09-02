import { api } from './api';

export const getPopularMovies = async () => {
  const response = await api.get('/movie/popular');
  return response.data;
};

export const getUpcomingMovies = async () => {
  const response = await api.get('/movie/upcoming');
  return response.data;
};
