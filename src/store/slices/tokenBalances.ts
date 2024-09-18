import { StateCreator } from 'zustand';
import { TokenInfo } from '../../constants/tokens';
import { Abi, Address, PublicClient } from 'viem';
import { RootStore } from '../root';
import { testErc20Abi } from '../../constants/abis/testErc20';
import { wethAbi } from '../../constants/abis/weth';
import { ethers } from 'ethers';
import { TransactionStatus } from '../../types/Transaction';

export interface TokenBalancesSlice {
  balances: Record<Address, ethers.Numeric>; // Mapping of token address to balance
  loading: boolean;
  error: string | null;
  transactionStatus: TransactionStatus;
  setTransactionStatus: (status: TransactionStatus) => void;
  getTokenBalances: (
    multicallClient: PublicClient,
    tokens: TokenInfo[],
    account: Address
  ) => Promise<void>;
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
  transactionStatus: TransactionStatus.IDEAL,
  setTransactionStatus(status) {
    set({ transactionStatus: status });
  },
  getTokenBalances: async (multicallClient, tokens, account) => {
    try {
      set({ loading: true, error: null });

      const contractCalls = tokens.map((token) => ({
        abi: token.symbol === 'WETH' ? (wethAbi as Abi) : (testErc20Abi as Abi),
        functionName: 'balanceOf',
        args: [account],
        address: token.address,
      }));

      const results = await multicallClient.multicall({
        contracts: contractCalls,
      });

      const newBalances = tokens.reduce(
        (acc, token, index) => {
          acc[token.address] = (
            Number(results[index].result) /
            10 ** token.decimals
          ).toFixed(5);
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
