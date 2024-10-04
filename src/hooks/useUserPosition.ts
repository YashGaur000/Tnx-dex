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
import { useCallback } from 'react';

const fetchUserPools = async (
  multicallClient: PublicClient,
  pools: LiquidityPoolNewType[],
  account: Address
) => {
  if (pools.length === 0) return [];

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

    if (Number(accountBalance) > 0.000001) {
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
        reserve0: pool.reserve0?.toString() ?? '0.00',
        reserve1: pool.reserve1?.toString() ?? '0.00',
        emissionsToken: 'OTK', // @Todo : our tenex token
        emissions: '0.00',
        poolBalance: accountBalance,
        accountDeposit0: '0.00',
        accountDeposit1: '0.00',
        claimable0: '0.00',
        claimable1: '0.00',
        gaugeBalance: '0.00',
        accountStaked0: '0.00',
        accountStaked1: '0.00',
        accountUnstaked0: '0.00',
        accountUnstaked1: '0.00',
      });
    }

    return acc;
  }, [] as UserPosition[]);

  if (userPools.length === 0) return [];

  const totalSupplyPoolCalls = userPools.map(({ lp }) => ({
    abi: poolAbi.abi as Abi,
    functionName: 'totalSupply',
    args: [],
    address: lp,
  }));

  const totalSupplyPoolResults = await multicallClient.multicall({
    contracts: totalSupplyPoolCalls,
  });

  const claimable0Calls = userPools.map(({ lp }) => ({
    abi: poolAbi.abi as Abi,
    functionName: 'claimable0',
    args: [account],
    address: lp,
  }));

  const claimable0Results = await multicallClient.multicall({
    contracts: claimable0Calls,
  });

  const claimable1Calls = userPools.map(({ lp }) => ({
    abi: poolAbi.abi as Abi,
    functionName: 'claimable1',
    args: [account],
    address: lp,
  }));

  const claimable1Results = await multicallClient.multicall({
    contracts: claimable1Calls,
  });

  const index0Calls = userPools.map(({ lp }) => ({
    abi: poolAbi.abi as Abi,
    functionName: 'index0',
    args: [],
    address: lp,
  }));

  const index0Results = await multicallClient.multicall({
    contracts: index0Calls,
  });

  const index1Calls = userPools.map(({ lp }) => ({
    abi: poolAbi.abi as Abi,
    functionName: 'index1',
    args: [],
    address: lp,
  }));

  const index1Results = await multicallClient.multicall({
    contracts: index1Calls,
  });

  const supply0Calls = userPools.map(({ lp }) => ({
    abi: poolAbi.abi as Abi,
    functionName: 'supplyIndex0',
    args: [account],
    address: lp,
  }));

  const supply0Results = await multicallClient.multicall({
    contracts: supply0Calls,
  });

  const supply1Calls = userPools.map(({ lp }) => ({
    abi: poolAbi.abi as Abi,
    functionName: 'supplyIndex1',
    args: [account],
    address: lp,
  }));

  const supply1Results = await multicallClient.multicall({
    contracts: supply1Calls,
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

  const earnedCalls = gaugesResults
    .filter(({ result }) => (result as Address) != AddressZero)
    .map(({ result }) => ({
      abi: gaugeAbi.abi as Abi,
      functionName: 'earned',
      args: [account],
      address: result as Address,
    }));

  const earnedResults = await multicallClient.multicall({
    contracts: earnedCalls,
  });

  let stakeIndex = 0;

  userPools.forEach((pool, index) => {
    const totalSupplyPool =
      formatAmounts(
        totalSupplyPoolResults[index].result as ethers.Numeric,
        18
      ) ?? '0';
    pool.accountDeposit0 = (
      (Number(pool.poolBalance) * Number(pool.reserve0)) /
      Number(totalSupplyPool)
    ).toFixed(5);
    pool.accountDeposit1 = (
      (Number(pool.poolBalance) * Number(pool.reserve1)) /
      Number(totalSupplyPool)
    ).toFixed(5);

    const claim0 =
      formatAmounts(claimable0Results[index].result as ethers.Numeric, 18) ??
      '0';

    pool.claimable0 = Number(claim0) > 0 ? Number(claim0).toFixed(5) : '0.00';

    const index0 =
      formatAmounts(index0Results[index].result as ethers.Numeric, 18) ?? '0';

    const supplyIndex0 =
      formatAmounts(supply0Results[index].result as ethers.Numeric, 18) ?? '0';

    const delta0 = Number(index0) - Number(supplyIndex0);

    if (delta0 > 0) {
      pool.claimable0 = (
        Number(claim0) +
        Number(pool.poolBalance) * delta0
      ).toFixed(5);
    }

    const claim1 =
      formatAmounts(claimable1Results[index].result as ethers.Numeric, 18) ??
      '0';

    pool.claimable1 = Number(claim1) > 0 ? Number(claim1).toFixed(5) : '0.00';

    const index1 =
      formatAmounts(index1Results[index].result as ethers.Numeric, 18) ?? '0';

    const supplyIndex1 =
      formatAmounts(supply1Results[index].result as ethers.Numeric, 18) ?? '0';

    const delta1 = Number(index1) - Number(supplyIndex1);

    if (delta1 > 0) {
      pool.claimable1 = (
        Number(claim1) +
        Number(pool.poolBalance) * delta1
      ).toFixed(5);
    }

    pool.accountUnstaked0 =
      Number(pool.accountDeposit0) > 0 ? pool.accountDeposit0 : '0.00';
    pool.accountUnstaked1 =
      Number(pool.accountDeposit1) > 0 ? pool.accountDeposit1 : '0.00';

    const gaugeAddress = gaugesResults[index]?.result as Address;

    if (gaugeAddress != AddressZero) {
      pool.gauge = gaugeAddress;

      const accountStaked =
        formatAmounts(stakeResults[stakeIndex].result as ethers.Numeric, 18) ??
        '0';

      pool.gaugeBalance = accountStaked;

      if (Number(pool.reserve0) > 0) {
        pool.accountStaked0 = (
          (Number(accountStaked) * Number(totalSupplyPool)) /
          Number(pool.reserve0)
        ).toFixed(5);

        if (Number(pool.accountStaked0) === 0) pool.accountStaked0 = '0.00';
      } else {
        pool.reserve0 = '0.00';
      }

      if (Number(pool.reserve1) > 0) {
        pool.accountStaked1 = (
          (Number(accountStaked) * Number(totalSupplyPool)) /
          Number(pool.reserve1)
        ).toFixed(5);

        if (Number(pool.accountStaked1) === 0) pool.accountStaked1 = '0.00';
      } else {
        pool.reserve1 = '0.00';
      }

      // earned
      pool.emissions =
        formatAmounts(earnedResults[stakeIndex].result as ethers.Numeric, 18) ??
        '0.00';

      stakeIndex++;
    }
  });

  return userPools;
};

export const useUserPosition = (account: Address) => {
  const { data: poolData } = useLiquidityPoolData();
  const multicallClient = useMultiCall();

  const fetchPoolData = useCallback(async () => {
    if (multicallClient && poolData) {
      return await fetchUserPools(
        multicallClient as PublicClient,
        poolData,
        account
      );
    }
    return [];
  }, [multicallClient, poolData, account]);

  const {
    data: userPools,
    isError,
    refetch: refetchUserPools,
    isFetching,
  } = useQuery<UserPosition[]>(
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
    userPools,
    isError,
    isFetching,
    refetchUserPools,
  };
};
