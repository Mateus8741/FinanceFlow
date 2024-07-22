import { useMutation } from '@tanstack/react-query';

import { UseApi } from '../UseApi';

import { useUserStorage } from '@/contexts';
import { LoginScheema } from '@/schemas';

export function useLoginUser() {
  const { Login } = UseApi();
  const { setUser } = useUserStorage();

  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: ({ email, password }: LoginScheema) => Login({ email, password }),
    onMutate: () => {
      console.log('loging user...');
    },
    onSuccess(data) {
      setUser({
        session: {
          access_token: data.data.session?.access_token || '',
          refresh_token: data.data.session?.refresh_token || '',
        },
        user_metadata: {
          id: data.data.user?.id ?? '',
          birth_date: data.data.user?.user_metadata.birth_date,
          email: data.data.user?.user_metadata.email,
          first_name: data.data.user?.user_metadata.first_name,
          last_name: data.data.user?.user_metadata.last_name,
        },
      });
    },
  });

  return { login: mutate, isSuccess, isPending };
}
