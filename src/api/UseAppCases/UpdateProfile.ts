import { useMutation, useQueryClient } from '@tanstack/react-query';

import { UseApi } from '../UseApi';

import { UpdateScheema } from '@/schemas';

export function useUpdateProfile() {
  const { UpdateProfile } = UseApi();

  const queryClient = useQueryClient();

  const { mutate, isSuccess, isPending, error } = useMutation({
    mutationFn: (data: UpdateScheema) => UpdateProfile(data),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['all-transactions'] });
      console.log('Profile updated!');
    },
    onSettled(data, error, variables, context) {
      if (error) {
        console.error(error);
      }

      console.log(data?.data.user?.user_metadata);
    },
  });

  return { update: mutate, isSuccess, isPending, error };
}
