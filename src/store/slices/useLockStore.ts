import create from 'zustand';

interface LockStore {
  isLoading: boolean;
  isTokenAllowed: boolean;
  isLocking: boolean;
  isPokeDisplay: boolean;
  isLocked: boolean;
  setIsLoading: (loading: boolean) => void;
  setIsTokenAllowed: (allowed: boolean) => void;
  setIsLocking: (locking: boolean) => void;
  setIsPokeDisplay: (display: boolean) => void;
  setIsLocked: (locked: boolean) => void;
}

export const useLockStore = create<LockStore>((set) => ({
  isLoading: false,
  isTokenAllowed: false,
  isLocking: false,
  isPokeDisplay: false,
  isLocked: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
  setIsTokenAllowed: (allowed) => set({ isTokenAllowed: allowed }),
  setIsLocking: (locking) => set({ isLocking: locking }),
  setIsPokeDisplay: (display) => set({ isPokeDisplay: display }),
  setIsLocked: (locked) => set({ isLocked: locked }),
}));
