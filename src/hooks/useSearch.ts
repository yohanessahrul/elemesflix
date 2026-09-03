import { useQuery } from '@tanstack/react-query';
import { multipleSearch } from '../services/searchApi';

export const useMultipleSearch = (query: string) => {
  return useQuery({
    queryKey: ['search', query],
    queryFn: () => multipleSearch(query),
  });
};
