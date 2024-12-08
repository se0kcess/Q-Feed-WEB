export interface UserStore {
  userId: string | null;
  setUserId: (userId: string) => void;
  clearUserId: () => void;
}
