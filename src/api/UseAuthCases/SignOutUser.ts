import { useMutation } from '@tanstack/react-query';

import { UseApi } from '../UseApi';

import { useUserStorage } from '@/contexts';

export function useLogOutUser() {
  const { Logout } = UseApi();
  const { setUser } = useUserStorage();

  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: () => Logout(),
    onMutate: () => {
      console.log('loging user...');
    },
    onSuccess(data) {
      setUser(data.error as null);
    },
  });

  return { logout: mutate, isSuccess, isPending };
}
