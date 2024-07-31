import { useMutation } from '@tanstack/react-query';

import { UseApi } from '../UseApi';

import { useUserStorage } from '@/contexts';
import { UpdateScheema } from '@/schemas';

export function useUpdateProfile() {
  const { UpdateProfile } = UseApi();
  const { setUser } = useUserStorage();

  const { mutate, isSuccess, isPending, error } = useMutation({
    mutationFn: (data: UpdateScheema) => UpdateProfile(data),
    onSuccess: () => {
      console.log('Profile updated!');
    },
    onSettled(data, error, variables, context) {
      if (error) {
        console.error(error);
      }

      setUser({
        user_metadata: {
          id: data?.data.user?.id!,
          birth_date: data?.data.user?.user_metadata.birth_date,
          email: data?.data.user?.user_metadata.email,
          first_name: data?.data.user?.user_metadata.first_name,
          last_name: data?.data.user?.user_metadata.last_name,
        },
      });
    },
  });

  return { update: mutate, isSuccess, isPending, error };
}
