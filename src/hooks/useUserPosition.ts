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

  let validPool = false;

  const userPools = balanceOfResults.reduce((acc, data, index) => {
    const poolId = balanceOfCalls[index].address;
    const pool = poolDetailsMap.get(poolId);

    if (!pool) return acc;

    const accountBalance =
      formatAmounts(data.result as ethers.Numeric, 18) ?? '0';

    if (Number(accountBalance) > 0) {
      validPool = true;
    }

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

    return acc;
  }, [] as UserPosition[]);

  if (!validPool) return [];

  const gaugesCalls = userPools.map(({ lp }) => ({
    abi: voterAbi.abi as Abi,
    functionName: 'gauges',
    args: [lp],
    address: contractAddresses.Voter,
  }));

  const gaugesResults = await multicallClient.multicall({
    contracts: gaugesCalls,
  });

  const poolsWithGauges = async () => {
    // Collect calls to batch for multicall
    const gaugeCalls: {
      pool: UserPosition;
      gaugeAddress: Address;
    }[] = [];
    const stakeBalanceCalls: {
      abi: Abi;
      functionName: string;
      args: [Address];
      address: Address;
    }[] = [];
    const earnedCalls: {
      abi: Abi;
      functionName: string;
      args: [Address];
      address: Address;
    }[] = [];

    userPools.forEach((pool, index) => {
      const gaugeAddress = gaugesResults[index].result as Address;
      if (gaugeAddress !== AddressZero) {
        // Prepare gauge calls for stake balance and earned emissions in a single multicall
        stakeBalanceCalls.push({
          abi: gaugeAbi.abi as Abi,
          functionName: 'balanceOf',
          args: [account],
          address: gaugeAddress,
        });

        earnedCalls.push({
          abi: gaugeAbi.abi as Abi,
          functionName: 'earned',
          args: [account],
          address: gaugeAddress,
        });

        // Store gauge address to link later
        gaugeCalls.push({ pool, gaugeAddress });
      }
    });

    // Perform a single multicall for stake balances and earned rewards
    const [stakeBalanceResults, earnedResults] = await Promise.all([
      multicallClient.multicall({ contracts: stakeBalanceCalls }),
      multicallClient.multicall({ contracts: earnedCalls }),
    ]);

    // Process the results
    return gaugeCalls
      .map(({ pool, gaugeAddress }, index) => {
        const gaugeBalance =
          formatAmounts(
            stakeBalanceResults[index].result as ethers.Numeric,
            18
          ) ?? '0';
        const emissions =
          formatAmounts(earnedResults[index].result as ethers.Numeric, 18) ??
          '0.00';

        // Only include pools with relevant balances
        if (
          Number(pool.poolBalance) > 0 ||
          Number(gaugeBalance) > 0 ||
          Number(emissions) > 0
        ) {
          return {
            ...pool,
            gauge: gaugeAddress,
            gaugeBalance,
            emissions,
          };
        }

        return null;
      })
      .filter((pool) => pool !== null); // Filter out null results
  };

  const filteredPools = await poolsWithGauges();

  const combinedCalls = filteredPools.flatMap(({ lp }) => [
    // Total supply call
    {
      abi: poolAbi.abi as Abi,
      functionName: 'totalSupply',
      args: [],
      address: lp,
    },
    // Claimable 0 call
    {
      abi: poolAbi.abi as Abi,
      functionName: 'claimable0',
      args: [account],
      address: lp,
    },
    // Claimable 1 call
    {
      abi: poolAbi.abi as Abi,
      functionName: 'claimable1',
      args: [account],
      address: lp,
    },
    // Index 0 call
    {
      abi: poolAbi.abi as Abi,
      functionName: 'index0',
      args: [],
      address: lp,
    },
    // Index 1 call
    {
      abi: poolAbi.abi as Abi,
      functionName: 'index1',
      args: [],
      address: lp,
    },
    // Supply index 0 call
    {
      abi: poolAbi.abi as Abi,
      functionName: 'supplyIndex0',
      args: [account],
      address: lp,
    },
    // Supply index 1 call
    {
      abi: poolAbi.abi as Abi,
      functionName: 'supplyIndex1',
      args: [account],
      address: lp,
    },
  ]);

  // Single multicall execution
  const combinedResults = await multicallClient.multicall({
    contracts: combinedCalls,
  });

  // Process the results
  const resultsPerPool = filteredPools.map((pool, index) => {
    const baseIndex = index * 7; // Each pool has 7 calls

    const totalSupply = combinedResults[baseIndex].result ?? '0';
    const claimable0 = combinedResults[baseIndex + 1].result ?? '0';
    const claimable1 = combinedResults[baseIndex + 2].result ?? '0';
    const index0 =
      formatAmounts(
        combinedResults[baseIndex + 3].result as ethers.Numeric,
        18
      ) ?? '0';
    const index1 =
      formatAmounts(
        combinedResults[baseIndex + 4].result as ethers.Numeric,
        18
      ) ?? '0';
    const supplyIndex0 =
      formatAmounts(
        combinedResults[baseIndex + 5].result as ethers.Numeric,
        18
      ) ?? '0';
    const supplyIndex1 =
      formatAmounts(
        combinedResults[baseIndex + 6].result as ethers.Numeric,
        18
      ) ?? '0';

    const totalSupplyPool =
      formatAmounts(totalSupply as ethers.Numeric, 18) ?? '0';

    // Account deposit calculations
    pool.accountDeposit0 = (
      (Number(pool.poolBalance) * Number(pool.reserve0)) /
      Number(totalSupplyPool)
    ).toFixed(5);

    pool.accountDeposit1 = (
      (Number(pool.poolBalance) * Number(pool.reserve1)) /
      Number(totalSupplyPool)
    ).toFixed(5);

    // Claimable0 calculations
    const claim0 = formatAmounts(claimable0 as ethers.Numeric, 18) ?? '0';
    pool.claimable0 = Number(claim0) > 0 ? Number(claim0).toFixed(5) : '0.00';

    const delta0 = Number(index0) - Number(supplyIndex0);

    if (delta0 > 0) {
      pool.claimable0 = (
        Number(claim0) +
        Number(pool.poolBalance) * delta0
      ).toFixed(5);
    }

    // Claimable1 calculations
    const claim1 = formatAmounts(claimable1 as ethers.Numeric, 18) ?? '0';
    pool.claimable1 = Number(claim1) > 0 ? Number(claim1).toFixed(5) : '0.00';

    const delta1 = Number(index1) - Number(supplyIndex1);

    if (delta1 > 0) {
      pool.claimable1 = (
        Number(claim1) +
        Number(pool.poolBalance) * delta1
      ).toFixed(5);
    }

    // Account unstaked calculations
    pool.accountUnstaked0 =
      Number(pool.accountDeposit0) > 0 ? pool.accountDeposit0 : '0.00';
    pool.accountUnstaked1 =
      Number(pool.accountDeposit1) > 0 ? pool.accountDeposit1 : '0.00';

    // Account staked calculations for reserve0
    if (Number(pool.reserve0) > 0) {
      pool.accountStaked0 = (
        (Number(pool.gaugeBalance) * Number(pool.reserve0)) /
        Number(totalSupplyPool)
      ).toFixed(5);

      if (Number(pool.accountStaked0) === 0) pool.accountStaked0 = '0.00';
    }

    // Account staked calculations for reserve1
    if (Number(pool.reserve1) > 0) {
      pool.accountStaked1 = (
        (Number(pool.gaugeBalance) * Number(pool.reserve1)) /
        Number(totalSupplyPool)
      ).toFixed(5);

      if (Number(pool.accountStaked1) === 0) pool.accountStaked1 = '0.00';
    }
    return {
      ...pool,
    };
  });

  console.log(resultsPerPool);

  return resultsPerPool;
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
  } = useQuery(
    {
      queryKey: ['userPosition', account],
      queryFn: fetchPoolData,
      gcTime: 10 * 60 * 1000,
      enabled: !!account && !!multicallClient,
      placeholderData: [],
      refetchInterval: 10 * 1000,
      refetchIntervalInBackground: true,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 3,
      retryOnMount: true,
      retryDelay: (retryCount) => Math.min(retryCount * 1000, 3000),
      staleTime: 5 * 60 * 1000,
    },
    queryClient
  );

  const userValidPools = userPools?.filter(
    (pool) =>
      Number(pool.poolBalance) > 1e-12 || Number(pool.gaugeBalance) > 1e-12
  );

  return {
    userValidPools: userValidPools,
    userRewardPools: userPools,
    isError,
    isFetching,
    refetchUserPools,
  };
};
