import { useState, useEffect } from 'react';
import { useLiquidityPoolData } from './useLiquidityPoolData';
import { Abi } from 'viem';
import { LiquidityPoolNewType } from '../graphql/types/LiquidityPoolNew';
import voterAbi from '../constants/artifacts/contracts/Voter.json';
import contractAddress from '../constants/contract-address/address';
import { useMultiCall } from './useMultiCall';
const votingAddress = contractAddress.Voter;

const useVoterData = () => {
  const multicallClient = useMultiCall(); // Move inside hook
  const [voteData, setVoteData] = useState<LiquidityPoolNewType[]>([]);
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
        const filteredPools = LiquidityData.filter((pool, index) => {
          const result = poolResults[index];
          if (
            pool &&
            result &&
            result.status === 'success' &&
            result.result !== '0x0000000000000000000000000000000000000000' &&
            result.result !== null
          ) {
            return poolResults[index];
          }
        });
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
  };
};

export default useVoterData;
