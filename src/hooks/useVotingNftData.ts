import { useState, useCallback, useEffect, useMemo } from 'react';
import { LockedBalance } from '../types/VotingEscrow';
import { MAX_LOCK_TIME } from '../utils/common/voteTenex';
import { useVotingEscrowContract } from './useVotingEscrowContract';
import contractAddress from '../constants/contract-address/address';

export const useVotingPowerCalculation = (tokenId: string | undefined) => {
  const [lockData, setLockData] = useState<LockedBalance | null>(null);
  const [timeStampValue, setTimeStamp] = useState<number>(1);
  const [sliderValue, setSliderValue] = useState<number>(1);
  const { getLockData } = useVotingEscrowContract(contractAddress.VotingEscrow);

  const calculateVotingPower = useCallback((weeks: number, amount: number) => {
    const currentTime = Math.floor(Date.now() / 1000);
    const selectedEndTime = currentTime + weeks * 7 * 24 * 60 * 60;
    const timeRemaining = selectedEndTime - currentTime;
    return Number(amount) * (timeRemaining / MAX_LOCK_TIME);
  }, []);

  const votingPower = useMemo(() => {
    if (lockData) {
      return calculateVotingPower(sliderValue, Number(lockData?.amount));
    }
    return 0;
  }, [lockData, sliderValue, calculateVotingPower]);

  useEffect(() => {
    let isMounted = true;
    const fetchLockData = async () => {
      if (tokenId) {
        try {
          const data = await getLockData(Number(tokenId));
          if (data && isMounted) {
            setTimeStamp(Number(data.end));
            setLockData(data);
            const currentTime = Math.floor(Date.now() / 1000);
            const timeRemaining =
              Number(data.end) > currentTime
                ? Number(data.end) - currentTime
                : 0;
            const weeksRemaining = Math.floor(
              timeRemaining / (7 * 24 * 60 * 60)
            );

            if (sliderValue === 1) {
              setSliderValue(weeksRemaining);
            }
          }
        } catch (error) {
          console.error('Error fetching lock data:', error);
        }
      }
    };
    void fetchLockData();
    return () => {
      isMounted = false;
    };
  }, [tokenId, getLockData]);

  const updateSliderValue = useCallback((newValue: number) => {
    setSliderValue(newValue);
  }, []);

  return {
    votingPower,
    lockData,
    timeStampValue,
    sliderValue,
    updateSliderValue,
  };
};
