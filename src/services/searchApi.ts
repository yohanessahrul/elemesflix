import { api } from './api';

export const multipleSearch = async (query: string) => {
  const response = await api.get('/search/multi', {
    params: {
      query,
    },
  });
  return response.data;
};
