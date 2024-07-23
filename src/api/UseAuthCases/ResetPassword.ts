import { useMutation } from '@tanstack/react-query';

import { UseApi } from '../UseApi';

import { ForgotPasswordSchema } from '@/schemas';

export function useResetPassword() {
  const { ResetPassword } = UseApi();

  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: (data: ForgotPasswordSchema) => ResetPassword(data.email),
    onMutate: () => {
      console.log('reseting password...');
    },
    onSuccess(data) {
      console.log(data);
    },
  });

  return { reset: mutate, isSuccess, isPending };
}
