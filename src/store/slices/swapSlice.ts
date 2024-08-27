import { StateCreator } from 'zustand';
import { RootStore } from '../root';
import { ERC20_TEST_TOKEN_LIST } from '../../constants/tokens';
import { Address } from 'viem';

export interface SwapSlice {
  from: Address;
  to: Address;
  selectedTolerance: number;
  setFrom: (tokenAddress: Address) => void;
  setTo: (tokenAddress: Address) => void;
  setSelectedTolerance: (tolerance: number) => void;
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
  selectedTolerance: 0.5,
  setFrom(tokenAddress) {
    set({ from: tokenAddress });
  },
  setTo(tokenAddress) {
    set({ to: tokenAddress });
  },
  setSelectedTolerance(value) {
    set({ selectedTolerance: value });
  },
  resetTokens: () =>
    set({
      from: ERC20_TEST_TOKEN_LIST[0].address,
      to: ERC20_TEST_TOKEN_LIST[1].address,
    }),
});
