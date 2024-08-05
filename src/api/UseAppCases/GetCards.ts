import { useQuery } from '@tanstack/react-query';

import { UseApi } from '../UseApi';

import { useUserStorage } from '@/contexts';

export function useGetCards() {
  const { user } = useUserStorage();
  const { GetCards } = UseApi();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['all-cards'],
    queryFn: async () => GetCards(user),
    persister(queryFn, context, query) {
      return queryFn(context);
    },
  });

  return {
    cards: data?.data,
    error,
    isLoading,
    refetch,
  };
}
