import { StateCreator } from 'zustand';
import { TokenInfo } from '../../constants/tokens';
import { Abi, Address } from 'viem';
import { RootStore } from '../root';
import { testErc20Abi } from '../../constants/abis/testErc20';
import { multicallClient } from '../../components/Web3Provider/wagmi';
import { wethAbi } from '../../constants/abis/weth';

export interface TokenBalancesSlice {
  balances: Record<Address, string>; // Mapping of token address to balance
  loading: boolean;
  error: string | null;
  getTokenBalances: (tokens: TokenInfo[], account: Address) => Promise<void>;
}

export const createTokenBalancesSlice: StateCreator<
  RootStore,
  [['zustand/subscribeWithSelector', never], ['zustand/devtools', never]],
  [],
  TokenBalancesSlice
> = (set) => ({
  balances: {},
  loading: false,
  error: null,
  getTokenBalances: async (tokens, account) => {
    try {
      set({ loading: true, error: null });

      const contractCalls = tokens.map((token) => ({
        abi: token.symbol === 'WETH' ? (wethAbi as Abi) : (testErc20Abi as Abi),
        functionName: 'balanceOf',
        args: [account],
        address: token.address as Address,
      }));

      const results = await multicallClient.multicall({
        contracts: contractCalls,
      });

      const newBalances = tokens.reduce(
        (acc, token, index) => {
          acc[token.address] = (
            Number(results[index].result) /
            10 ** token.decimals
          ).toFixed(3);
          return acc;
        },
        {} as Record<string, string>
      );

      set((state) => ({
        balances: { ...state.balances, ...newBalances },
        loading: false,
      }));
    } catch (error: unknown) {
      let errorMessage = 'An unknown error occurred';

      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      } else if (typeof error === 'object' && error !== null) {
        errorMessage = JSON.stringify(error);
      }

      console.error('Error fetching balances:', errorMessage);
      set({ loading: false, error: errorMessage });
      throw error;
    }
  },
});
