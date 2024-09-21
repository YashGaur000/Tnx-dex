import { useLiquidityPoolData } from './useLiquidityPoolData';
import { useMultiCall } from './useMultiCall';
import { Abi, Address, PublicClient } from 'viem';
import { LiquidityPoolNewType } from '../graphql/types/LiquidityPoolNew';
import poolAbi from '../constants/artifacts/contracts/Pool.json';
import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../web3Provider/wagmi';
import { formatAmounts } from '../utils/transaction/parseAmounts';
import { ethers } from 'ethers';
import { UserPosition } from '../types/Pool';

const fetchUserPools = async (
  multicallClient: PublicClient,
  pools: LiquidityPoolNewType[],
  account: string
) => {
  const balanceOfCalls = pools.map(({ id }) => ({
    abi: poolAbi.abi as Abi,
    functionName: 'balanceOf',
    args: [account],
    address: id as Address,
  }));

  const balanceOfResults = await multicallClient.multicall({
    contracts: balanceOfCalls,
  });

  // Create a map for fast access to pool details
  const poolDetailsMap = new Map<Address, LiquidityPoolNewType>(
    pools.map((pool) => [pool.id as Address, pool])
  );

  const userPools = balanceOfResults.reduce((acc, data, index) => {
    const poolId = balanceOfCalls[index].address;
    const pool = poolDetailsMap.get(poolId);

    if (!pool) return acc;

    const accountBalance =
      formatAmounts(data.result as ethers.Numeric, 18) ?? '0';

    if (Number(accountBalance) > 0) {
      acc.push({
        lp: poolId,
        accountBalance,
        isStable: pool.isStable,
        token0: {
          id: pool.token0.id.split('-')[0] ?? '',
          symbol: pool.token0.symbol ?? '',
        },
        token1: {
          id: pool.token1.id.split('-')[0] ?? '',
          symbol: pool.token1.symbol ?? '',
        },
        reserve0: pool.reserve0?.toString() ?? '0',
        reserve1: pool.reserve1?.toString() ?? '0',
      });
    }

    return acc;
  }, [] as UserPosition[]);

  return userPools;
};

export const useUserPosition = (account: Address) => {
  const { data: poolData } = useLiquidityPoolData(); // Assuming you still use Zustand for this
  const multicallClient = useMultiCall();

  const fetchPoolData = async () => {
    if (multicallClient && poolData) {
      return await fetchUserPools(
        multicallClient as PublicClient,
        poolData,
        account
      );
    }
    return [];
  };

  const { data, isError, refetch, isFetching } = useQuery<UserPosition[]>(
    {
      queryKey: ['userPosition', account], // Unique query key for this data
      queryFn: fetchPoolData, // Function to fetch pool data
      gcTime: 60 * 1000, // Time in ms before unused data is garbage collected
      enabled: !!account && !!multicallClient, // Only enable query if account exists
      placeholderData: [], // Placeholder data until query resolves
      refetchInterval: 10000, // Refetch every 10 seconds
      refetchIntervalInBackground: true, // Continue refetching in the background
      refetchOnMount: true, // Refetch data when component mounts
      refetchOnReconnect: true, // Refetch when the app reconnects to the network
      refetchOnWindowFocus: true, // Refetch when window regains focus
      retry: 3, // Number of retry attempts on failure
      retryOnMount: true, // Retry the query if it fails on mount
      retryDelay: (retryCount) => Math.min(retryCount * 1000, 3000), // Retry delay logic
      staleTime: 5000, // Consider data fresh for 5 seconds
    },
    queryClient // Query client instance
  );

  // Return the necessary values or the whole object as per your needs
  return {
    data,
    isError,
    isFetching,
    refetch,
  };
};
