import { useState, useEffect } from 'react';
import { useLiquidityPoolData } from './useLiquidityPoolData';
import { Abi } from 'viem';
import { LiquidityPoolNewType } from '../graphql/types/LiquidityPoolNew';
import voterAbi from '../constants/artifacts/contracts/Voter.json';
import contractAddress from '../constants/contract-address/address';
import { useMultiCall } from './useMultiCall';
import { VoteDataType } from '../types/VoteData';

export interface totalVoteDataProps {
  totalFees: number;
  totalIncentive: number;
  totalRewards: number;
}

const votingAddress = contractAddress.Voter;

let TotalVoteData: totalVoteDataProps = {
  totalFees: 0,
  totalIncentive: 0,
  totalRewards: 0,
};

const useVoterData = () => {
  const multicallClient = useMultiCall();
  const [voteData, setVoteData] = useState<VoteDataType[]>([]);
  const [LiquidityData, setLiquidityData] = useState<LiquidityPoolNewType[]>(
    []
  );

  const [Loading, setLoading] = useState(true);
  const { loading, error, data: poolData } = useLiquidityPoolData();

  useEffect(() => {
    if (!loading) {
      setLiquidityData(poolData);
    }
  }, [loading]);

  useEffect(() => {
    const filterPools = async () => {
      if (!LiquidityData?.length) return;

      setLoading(true);
      try {
        const filteredpoolData = LiquidityData.map((pool) => ({
          abi: voterAbi.abi as Abi,
          functionName: 'gauges',
          args: [pool.id],
          address: votingAddress,
        }));

        if (!filteredpoolData) throw new Error('Failed to fetch tokens');
        const poolResults = await multicallClient?.multicall({
          contracts: filteredpoolData,
        });

        if (!poolResults) throw new Error('Failed to fetch');

        let totalIncentiveSum = 0;
        let totalFeesSum = 0;
        let totalRewardsSum = 0;

        const filteredPools = LiquidityData.map((pool, index) => {
          const result = poolResults[index];
          if (
            pool &&
            result &&
            result.status === 'success' &&
            result.result !== '0x0000000000000000000000000000000000000000' &&
            result.result !== null
          ) {
            totalIncentiveSum = totalIncentiveSum + Number(pool.totalBribesUSD);
            totalFeesSum = totalFeesSum + Number(pool.totalFeesUSD);
            totalRewardsSum +=
              Number(pool.totalBribesUSD) + Number(pool.totalFeesUSD);

            return {
              ...pool,
              gauge: result.result,
            };
          }
          return undefined;
        }).filter(Boolean) as VoteDataType[];

        TotalVoteData = {
          totalFees: totalFeesSum,
          totalIncentive: totalIncentiveSum,
          totalRewards: totalRewardsSum,
        };
        setVoteData(filteredPools);
        setLoading(false);
      } catch (error) {
        console.error('Error filtering pools:', error);
      } finally {
        setLoading(false);
      }
    };

    void filterPools();
  }, [LiquidityData, multicallClient]);

  return {
    voteData,
    Loading,
    error,
    TotalVoteData,
  };
};

export default useVoterData;
