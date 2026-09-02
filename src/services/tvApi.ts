import { api } from './api';

export const getPopularTv = async () => {
  const response = await api.get('/tv/popular');
  return response.data;
};

export const getTopRatedTv = async () => {
  const response = await api.get('/tv/top_rated');
  return response.data;
};
