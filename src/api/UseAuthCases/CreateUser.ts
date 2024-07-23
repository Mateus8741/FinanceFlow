import { useMutation } from '@tanstack/react-query';

import { RegisterProps, UseApi } from '../UseApi';

export function useRegisterUser() {
  const { Register } = UseApi();

  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: ({ name, birthDate, email, lastName, password }: RegisterProps) =>
      Register({ name, birthDate, email, lastName, password }),
    onMutate: () => {
      console.log('Creating user...');
    },
    onSuccess(data, variables, context) {
      console.log('User created!', data.data);
    },
  });

  return { register: mutate, isSuccess, isPending };
}
