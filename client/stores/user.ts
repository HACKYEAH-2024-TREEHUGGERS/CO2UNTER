import { getUser } from '@/api/user';
import { create } from 'zustand';

const UserStatus = {
  UNKNOWN: 'UNKNOWN',
  AUTHENTICATED: 'AUTHENTICATED',
  NOT_EXISTING: 'NOT_EXISTING',
} as const;

type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];

type UserState = {
  status: UserStatus;
  user: any;
};

type Actions = {
  fetchUser: () => Promise<void>;
};

export const useUserStore = create<UserState & Actions>()((set) => ({
  status: UserStatus.UNKNOWN,
  user: null,
  fetchUser: async () => {
    const user = await getUser();
    if (!user) return set({ status: UserStatus.NOT_EXISTING, user: null });

    set({ status: UserStatus.AUTHENTICATED, user });
  },
}));
