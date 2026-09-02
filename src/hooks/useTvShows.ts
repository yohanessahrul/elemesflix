import { useQuery } from '@tanstack/react-query';

import { getPopularTv, getTopRatedTv } from '../services/tvApi';

export const usePopularTv = () => {
  return useQuery({
    queryKey: ['tv', 'popular'],
    queryFn: getPopularTv,
  });
};

export const useTopRatedTv = () => {
  return useQuery({
    queryKey: ['tv', 'top-rated'],
    queryFn: getTopRatedTv,
  });
};
