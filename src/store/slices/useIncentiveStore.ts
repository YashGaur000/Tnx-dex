import create from 'zustand';
import { Address } from 'viem';
import { TokenInfo } from '../../constants/tokens';
import { Abi, PublicClient } from 'viem';
import { testErc20Abi } from '../../constants/abis/testErc20';
import { wethAbi } from '../../constants/abis/weth';
import { ethers } from 'ethers';
import { AddressZero } from '@ethersproject/constants';
interface IncentiveState {
  gaugeAddress: Address;
  bribeAddress: Address;
  rewardTokens: TokenInfo[];
  balances: Record<Address, ethers.Numeric>; // Mapping of token address to balance
  loading: boolean;
  error: string | null;
  setRewardTokens: (tokens: TokenInfo[]) => void;
  setGaugeAddress: (address: Address) => void;
  setBribeAddress: (address: Address) => void;
  setTokenBalances: (balance: Record<Address, ethers.Numeric>) => void;
  getTokenBalances: (
    multicallClient: PublicClient,
    tokens: TokenInfo[],
    account: Address
  ) => Promise<Record<string, string>>;
}

export const useIncentiveStore = create<IncentiveState>((set) => ({
  gaugeAddress: AddressZero,
  bribeAddress: AddressZero,
  rewardTokens: [],
  balances: {} as Record<Address, ethers.Numeric>,
  loading: false,
  error: null,
  setRewardTokens: (tokens: TokenInfo[]) => set({ rewardTokens: tokens }),
  setGaugeAddress: (address: Address) => set({ gaugeAddress: address }),
  setBribeAddress: (address: Address) => set({ bribeAddress: address }),
  setTokenBalances: (balance: Record<Address, ethers.Numeric>) =>
    set({ balances: balance }),
  getTokenBalances: async (multicallClient, tokens, account) => {
    try {
      set({ loading: true, error: null });

      const contractCalls = tokens?.map((token) => ({
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

      return newBalances;
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
}));
