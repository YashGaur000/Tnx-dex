import { useState, useCallback, useEffect } from 'react';
import { useLiquidityPoolData } from './useLiquidityPoolData';
import { useVoterContract } from './useVoterContract';
import { Abi, Address } from 'viem';
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
  const { gauges } = useVoterContract();

  useEffect(() => {
    if (!loading) {
      setLiquidityData(poolData);
    }
  }, [loading]);

  const isGaugeCreated = useCallback(
    async (poolId: string): Promise<boolean> => {
      try {
        if (!poolId) return false;
        const poolid = poolId as Address;
        const gaugeAddress = await gauges(poolid);

        if (!gaugeAddress) return false;
        else return true;
      } catch (error) {
        console.error('Error fetching GaugeAddress:', error);
        return false;
      }
    },
    [gauges]
  );

  useEffect(() => {
    const filterPools = async () => {
      if (!LiquidityData?.length) return;

      setLoading(true);
      try {
        console.log('LiquidityData:', LiquidityData);
        const filteredpoolData = LiquidityData.map((pool) => ({
          abi: voterAbi.abi as Abi,
          functionName: 'gauges',
          args: [pool.id],
          address: votingAddress,
        }));

        if (!filteredpoolData) throw new Error('Failed to fetch tokens');
        //console.log('filteredpoolData:', filteredpoolData);
        const poolResults = await multicallClient?.multicall({
          contracts: filteredpoolData,
        });
        if (!poolResults) throw new Error('Failed to fetch');
        //console.log('poolResults:', poolResults);
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

        //console.log('filteredData:', filteredPools);
        setVoteData(filteredPools);
        setLoading(false);
      } catch (error) {
        console.error('Error filtering pools:', error);
      } finally {
        setLoading(false);
      }
    };

    void filterPools();
  }, [isGaugeCreated, LiquidityData, multicallClient]);

  return {
    voteData,
    Loading,
    error,
  };
};

export default useVoterData;
