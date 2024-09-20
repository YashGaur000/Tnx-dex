import { useEffect } from 'react';
import { useRootStore } from '../store/root';
import { useLiquidityPoolData } from './useLiquidityPoolData';
import { useMultiCall } from './useMultiCall';
import { Abi, Address, PublicClient } from 'viem';
import { LiquidityPoolNewType } from '../graphql/types/LiquidityPoolNew';
import poolAbi from '../constants/artifacts/contracts/Pool.json';

const fetchPoolData = async (
  multicallClient: PublicClient,
  pools: LiquidityPoolNewType[],
  account: string
) => {
  const contractCalls = pools.map(({ id }) => ({
    abi: poolAbi.abi as Abi,
    functionName: 'balanceOf',
    args: [account],
    address: id as Address,
  }));

  const results = await multicallClient.multicall({
    contracts: contractCalls,
  });

  const userPools = results
    .map((data, index) => ({
      lp: contractCalls[index].address, // Use pool ID from the call
      accountBalance: data.result as bigint, // Balance from multicall result
    }))
    .filter(({ accountBalance }) => accountBalance > 0n);

  return userPools;
};

export const useUserPosition = (account: Address) => {
  const { lpData, setLpData, transactionStatus, refetch } = useRootStore();
  const { data } = useLiquidityPoolData();

  const multicallClient = useMultiCall();

  useEffect(() => {
    const fetchAndStorePools = async () => {
      const results = await fetchPoolData(
        multicallClient as PublicClient,
        data,
        account
      );
      //const processedData = processMulticallResults(results);
      setLpData(results);
    };

    if (multicallClient && data) {
      void fetchAndStorePools();
    }
  }, [refetch, transactionStatus]);
  return lpData;
};
