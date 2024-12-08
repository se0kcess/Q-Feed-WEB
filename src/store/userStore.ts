import { UserStore } from '@/types/user';
import { create } from 'zustand';

export const useUserStore = create<UserStore>((set) => ({
  userId: null,
  setUserId: (userId) => set({ userId }),
  clearUserId: () => set({ userId: null }),
}));
