import { useLiquidityPoolData } from './useLiquidityPoolData';
import { useMultiCall } from './useMultiCall';
import { Abi, Address, PublicClient } from 'viem';
import { LiquidityPoolNewType } from '../graphql/types/LiquidityPoolNew';
import poolAbi from '../constants/artifacts/contracts/Pool.json';
import voterAbi from '../constants/artifacts/contracts/Voter.json';
import gaugeAbi from '../constants/artifacts/contracts/Gauge.json';
import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../web3Provider/wagmi';
import { formatAmounts } from '../utils/transaction/parseAmounts';
import { ethers } from 'ethers';
import { UserPosition } from '../types/Pool';
import contractAddresses from '../constants/contract-address/address';
import { AddressZero } from '@ethersproject/constants';

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
        gauge: AddressZero,
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
        poolBalance: accountBalance,
        accountDeposit0: '0',
        accountDeposit1: '0',
        gaugeBalance: '0',
        accountStaked0: '0',
        accountStaked1: '0',
        accountUnstaked0: '0',
        accountUnstaked1: '0',
      });
    }

    return acc;
  }, [] as UserPosition[]);

  const totalSupplyPoolCalls = userPools.map(({ lp }) => ({
    abi: poolAbi.abi as Abi,
    functionName: 'totalSupply',
    args: [],
    address: lp,
  }));

  const totalSupplyPoolResults = await multicallClient.multicall({
    contracts: totalSupplyPoolCalls,
  });

  const gaugesCalls = userPools.map(({ lp }) => ({
    abi: voterAbi.abi as Abi,
    functionName: 'gauges',
    args: [lp],
    address: contractAddresses.Voter,
  }));

  const gaugesResults = await multicallClient.multicall({
    contracts: gaugesCalls,
  });

  const stakeBalanceCalls = gaugesResults
    .filter(({ result }) => (result as Address) != AddressZero)
    .map(({ result }) => ({
      abi: gaugeAbi.abi as Abi,
      functionName: 'balanceOf',
      args: [account],
      address: result as Address,
    }));

  const stakeResults = await multicallClient.multicall({
    contracts: stakeBalanceCalls,
  });

  userPools.forEach((pool, index) => {
    const totalSupplyPool =
      formatAmounts(
        totalSupplyPoolResults[index].result as ethers.Numeric,
        18
      ) ?? '0';
    pool.accountDeposit0 = (
      (Number(pool.poolBalance) * Number(totalSupplyPool)) /
      Number(pool.reserve0)
    ).toFixed(5);
    pool.accountDeposit1 = (
      (Number(pool.poolBalance) * Number(totalSupplyPool)) /
      Number(pool.reserve1)
    ).toFixed(5);

    const gaugeAddress = gaugesResults[index]?.result as Address;

    if (gaugeAddress != AddressZero) {
      pool.gauge = gaugeAddress;

      const accountStaked =
        formatAmounts(stakeResults[index].result as ethers.Numeric, 18) ?? '0';

      pool.gaugeBalance = accountStaked;

      pool.accountStaked0 = (
        (Number(accountStaked) * Number(totalSupplyPool)) /
        Number(pool.reserve0)
      ).toFixed(5);

      pool.accountStaked1 = (
        (Number(accountStaked) * Number(totalSupplyPool)) /
        Number(pool.reserve1)
      ).toFixed(5);

      pool.accountUnstaked0 = (
        Number(pool.accountDeposit0) - Number(pool.accountStaked0)
      ).toFixed(5);
      pool.accountUnstaked1 = (
        Number(pool.accountDeposit1) - Number(pool.accountStaked1)
      ).toFixed(5);
    }
  });

  return userPools;
};

export const useUserPosition = (account: Address) => {
  const { data: poolData } = useLiquidityPoolData();
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
      queryKey: ['userPosition', account],
      queryFn: fetchPoolData,
      gcTime: 60 * 1000,
      enabled: !!account && !!multicallClient,
      placeholderData: [],
      refetchInterval: 10000,
      refetchIntervalInBackground: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      retry: 3,
      retryOnMount: true,
      retryDelay: (retryCount) => Math.min(retryCount * 1000, 3000),
      staleTime: 5000,
    },
    queryClient
  );

  return {
    data,
    isError,
    isFetching,
    refetch,
  };
};
