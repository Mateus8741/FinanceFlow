import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { UserSchema } from '@/schemas';

type UserProps = {
  user: UserSchema;
  setUser: (user: UserSchema) => void;
  removeUser: () => void;
};

const useUserStore = create<UserProps>()(
  persist(
    (set) => ({
      user: {
        session: {
          access_token: '',
          refresh_token: '',
        },
        user_metadata: {
          birth_date: '',
          email: '',
          first_name: '',
          last_name: '',
        },
      },
      setUser: (user) => set({ user }),
      removeUser: () =>
        set({
          user: {
            session: {
              access_token: '',
              refresh_token: '',
            },
            user_metadata: {
              birth_date: '',
              email: '',
              first_name: '',
              last_name: '',
            },
          },
        }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export function useUserStorage() {
  const { user, setUser, removeUser } = useUserStore();

  return { user, setUser, removeUser };
}
