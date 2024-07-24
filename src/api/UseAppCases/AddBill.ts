import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AddBillPropsApi, UseApi } from '../UseApi';

export function useAddBilll() {
  const { AddBill } = UseApi();

  const queryClient = useQueryClient();

  const { mutate, isSuccess, isPending, error } = useMutation({
    mutationFn: (data: AddBillPropsApi) => AddBill(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-transactions'] });
    },
    onSettled(data, error, variables, context) {
      if (error) {
        console.error(error);
      }
    },
  });

  return { mutate, isSuccess, isPending, error };
}
