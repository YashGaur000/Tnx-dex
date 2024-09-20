import { useEffect, useState } from 'react';
import { useVotingEscrowContract } from './useVotingEscrowContract';
import contractAddress from '../constants/contract-address/address';
import { LockedBalance } from '../types/VotingEscrow';

export const useLockedDataWithVotingPower = (tokenId: string | undefined) => {
  const [lockData, setLockData] = useState<LockedBalance | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { getLockData } = useVotingEscrowContract(contractAddress.VotingEscrow);

  useEffect(() => {
    const fetchLockData = async () => {
      if (!tokenId) return;

      setIsLoading(true);
      setError(null);

      try {
        const data = await getLockData(Number(tokenId));
        console.log('lock data:', data);
        if (data) {
          setLockData(data);
        } else {
          setError('No lock data found');
        }
      } catch (err) {
        setError('Error fetching lock data');
        console.error('Error fetching lock data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchLockData;
  }, [tokenId, getLockData]);

  return { lockData, isLoading, error };
};
