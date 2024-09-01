import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AddCardProps, UseApi } from '../UseApi';

export function useAddCreditCard() {
  const { AddCard } = UseApi();

  const queryClient = useQueryClient();

  const { mutate, isSuccess, isPending, error } = useMutation({
    mutationFn: (data: AddCardProps) => AddCard(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-cards'] });
    },
    onSettled(data, error, variables, context) {
      if (error) {
        console.error(error);
      }
    },
  });

  return { addCard: mutate, isSuccess, isPending, error };
}
