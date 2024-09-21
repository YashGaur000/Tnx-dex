export { useHeaderStore } from './slices/headerSlice';

import { enableMapSet } from 'immer';
import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import {
  createTokenBalancesSlice,
  TokenBalancesSlice,
} from './slices/tokenBalances';
import { SwapSlice, createSwapSlice } from './slices/swapSlice';

enableMapSet();

export type RootStore = TokenBalancesSlice & SwapSlice;

export const useRootStore = create<RootStore>()(
  subscribeWithSelector(
    devtools((...args) => {
      return {
        ...createTokenBalancesSlice(...args),
        ...createSwapSlice(...args),
      };
    })
  )
);
