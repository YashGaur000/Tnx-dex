import { StateCreator } from 'zustand';
import { RootStore } from '../root';

interface Lp {
  lp: string;
  //   symbol: string;
  //   decimals: number;
  //   stable: boolean;
  //   totalSupply: string;

  //   token0: string;
  //   reserve0: string;
  //   claimable0: string;

  //   token1: string;
  //   reserve1: string;
  //   claimable1: string;

  //   gauge: string;
  //   gaugeTotalSupply: string;
  //   gaugeAlive: boolean;

  //   fee: string;
  //   bribe: string;
  //   factory: string;

  //   emissions: string;
  //   emissionsToken: string;

  accountBalance: bigint;
  //   accountEarned: string;
  //   accountStaked: string;

  //   poolFee: string;
  //   token0Fees: string;
  //   token1Fees: string;
}

export interface PositionSlice {
  lpData: Lp[]; // Store fetched LP data
  setLpData: (lpData: Lp[]) => void;
  refetch: boolean;
  setRefetch: (refetch: boolean) => void;
}

export const createPositionSlice: StateCreator<
  RootStore,
  [['zustand/subscribeWithSelector', never], ['zustand/devtools', never]],
  [],
  PositionSlice
> = (set) => ({
  lpData: [],
  refetch: false,
  setLpData(lpData) {
    set({ lpData });
  },
  setRefetch(refetch) {
    set({ refetch });
  },
});
