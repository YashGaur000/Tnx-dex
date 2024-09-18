import { StateCreator } from 'zustand';
import { RootStore } from '../root';
import { ERC20_TEST_TOKEN_LIST } from '../../constants/tokens';
import { Address } from 'viem';

export interface SwapSlice {
  from: Address;
  to: Address;
  selectedTolerance: string;
  priceImpact: string;
  allowUnsafe: boolean;
  setFrom: (tokenAddress: Address) => void;
  setTo: (tokenAddress: Address) => void;
  setSelectedTolerance: (tolerance: string) => void;
  setPriceImpact: (impact: string) => void;
  setAllowUnsafe: (allowUnsafe: boolean) => void;
  resetTokens: () => void;
}

export const createSwapSlice: StateCreator<
  RootStore,
  [['zustand/subscribeWithSelector', never], ['zustand/devtools', never]],
  [],
  SwapSlice
> = (set) => ({
  from: ERC20_TEST_TOKEN_LIST[0].address,
  to: ERC20_TEST_TOKEN_LIST[1].address,
  selectedTolerance: '1',
  priceImpact: '',
  allowUnsafe: false,
  setFrom(tokenAddress) {
    set({ from: tokenAddress });
  },
  setTo(tokenAddress) {
    set({ to: tokenAddress });
  },
  setSelectedTolerance(value) {
    set({ selectedTolerance: value });
  },
  setPriceImpact(value) {
    set({ priceImpact: value });
  },
  setAllowUnsafe(value) {
    set({ allowUnsafe: value });
  },
  resetTokens: () =>
    set({
      from: ERC20_TEST_TOKEN_LIST[0].address,
      to: ERC20_TEST_TOKEN_LIST[1].address,
    }),
});
