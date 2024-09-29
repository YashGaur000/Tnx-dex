import { useState, useCallback, useEffect } from 'react';
import { useLiquidityPoolData } from './useLiquidityPoolData';
import { useVoterContract } from './useVoterContract';
import { Address } from 'viem';
import { LiquidityPoolNewType } from '../graphql/types/LiquidityPoolNew';

const useVoterData = () => {
  const [voteData, setVoteData] = useState<LiquidityPoolNewType[]>([]);
  const [LiquidityData, setLiquidityData] = useState<LiquidityPoolNewType[]>(
    []
  );
  const [Loading, setLoading] = useState(true);
  const { loading, data: poolData } = useLiquidityPoolData();
  const { gauges } = useVoterContract();

  useEffect(() => {
    if (!loading && poolData && LiquidityData.length === 0) {
      setLiquidityData(poolData);
    }
  }, [loading, poolData, LiquidityData.length]);

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
        const filteredPools = await Promise.all(
          LiquidityData.map(async (pool) => {
            const hasGauge = await isGaugeCreated(pool.id);

            return hasGauge ? pool : null;
          })
        );

        const filteredpoolData = filteredPools.filter((pool) => pool != null);

        setVoteData(filteredpoolData);
        setLoading(false);
      } catch (error) {
        console.error('Error filtering pools:', error);
      } finally {
        setLoading(false);
      }
    };

    void filterPools();
  }, [isGaugeCreated, LiquidityData]);

  return {
    voteData,
    Loading,
  };
};

export default useVoterData;
