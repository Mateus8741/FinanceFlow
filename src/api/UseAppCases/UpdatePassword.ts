import { useMutation } from '@tanstack/react-query';

import { UseApi } from '../UseApi';

import { UpdateScheema } from '@/schemas';

export function useUpdatePassword() {
  const { UpdatePassword } = UseApi();

  const { mutate, isSuccess, isPending, error } = useMutation({
    mutationFn: ({ password }: UpdateScheema) => UpdatePassword({ password }),
    onSuccess: () => {
      console.log('Password updated!');
    },
    onSettled(data, error, variables, context) {
      if (error) {
        console.error(error);
      }
    },
  });

  return { update: mutate, isSuccess, isPending, error };
}
