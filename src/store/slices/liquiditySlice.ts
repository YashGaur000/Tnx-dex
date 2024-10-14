import { create } from 'zustand';
import { TokenInfo } from '../../constants/tokens/type';
import { PoolFeeMapping } from '../../types/PoolFactory';

interface LiquidityState {
  selectedToken1: TokenInfo | null;
  selectedToken2: TokenInfo | null;
  poolType: string | null;
  deadLineValue: number;
  totalTVL: string;
  totalFees: string;
  totalVolume: string;
  poolFeesMapping: PoolFeeMapping[];
  setSelectedToken1: (token: TokenInfo | null) => void;
  setSelectedToken2: (token: TokenInfo | null) => void;
  setDeadLineValue: (value: number) => void;
  setPoolType: (type: string) => void;
  setTotalTVL: (tvl: string) => void;
  setTotalFees: (fees: string) => void;
  setTotalVolume: (vol: string) => void;
  setPoolFeesMapping: (feesMapping: PoolFeeMapping[]) => void;
  getPoolFeeById: (poolId: string) => number;
}

export const useLiquidityStore = create<LiquidityState>((set, get) => ({
  selectedToken1: null,
  selectedToken2: null,
  poolType: null,
  deadLineValue: 30,
  totalTVL: '0',
  totalFees: '0',
  totalVolume: '0',
  poolFeesMapping: [],
  setSelectedToken1: (token: TokenInfo | null) =>
    set({ selectedToken1: token }),
  setSelectedToken2: (token: TokenInfo | null) =>
    set({ selectedToken2: token }),
  setPoolType: (type: string | null) => set({ poolType: type }),
  setDeadLineValue: (value: number) => set({ deadLineValue: value }),
  setTotalTVL: (tvl: string) => set({ totalTVL: tvl }),
  setTotalFees: (fees: string) => set({ totalFees: fees }),
  setTotalVolume: (vol: string) => set({ totalVolume: vol }),
  setPoolFeesMapping: (feesMapping: PoolFeeMapping[]) =>
    set({ poolFeesMapping: feesMapping }),
  getPoolFeeById: (poolId: string) => {
    const { poolFeesMapping } = get(); // Access state
    const poolFee = poolFeesMapping.find(
      (pool: PoolFeeMapping) => pool.poolId === poolId
    );
    return poolFee ? Number(poolFee.feePercentage) : 0; // Return the fee percentage or null if not found
  },
}));
