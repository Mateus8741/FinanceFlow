import { useQuery } from '@tanstack/react-query';

import { useUserStorage } from '@/contexts';
import { supabase } from '@/utils/supabase';

export function useGetTransactions() {
  const { user } = useUserStorage();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['all-transactions'],
    queryFn: async () => {
      const response = await supabase
        .from('Bills')
        .select()
        .eq('bill_id', user?.user_metadata.id || '')
        .order('created_at', { ascending: false });
      return response.data;
    },
    persister(queryFn, context, query) {
      return queryFn(context);
    },
  });

  return {
    transaction: data,
    error,
    isLoading,
    refetch,
  };
}
