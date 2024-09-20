import { create } from 'zustand';
import { TokenInfo } from '../../constants/tokens/type';

interface LiquidityState {
  selectedToken1: TokenInfo | null;
  selectedToken2: TokenInfo | null;
  poolType: string | null;
  deadLineValue: number;
  setSelectedToken1: (token: TokenInfo | null) => void;
  setSelectedToken2: (token: TokenInfo | null) => void;
  setDeadLineValue: (value: number) => void;
  setPoolType: (type: string) => void;
}

export const useLiquidityStore = create<LiquidityState>((set) => ({
  selectedToken1: null,
  selectedToken2: null,
  poolType: null,
  deadLineValue: 30,
  setSelectedToken1: (token: TokenInfo | null) =>
    set({ selectedToken1: token }),
  setSelectedToken2: (token: TokenInfo | null) =>
    set({ selectedToken2: token }),
  setPoolType: (type: string | null) => set({ poolType: type }),
  setDeadLineValue: (value: number) => set({ deadLineValue: value }),
}));
