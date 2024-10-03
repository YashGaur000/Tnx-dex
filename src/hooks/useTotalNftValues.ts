import { useMemo } from 'react';
import { Nft } from '../types/VotingEscrow';

export const useTotalValues = (nftData: Nft[]) => {
  return useMemo(() => {
    const totalLockedTENEX = nftData.reduce((total, lock) => {
      const lockedVELO = lock.metadata?.attributes.find(
        (attr) => attr.trait_type === 'Locked VELO'
      )?.value;
      return total + (lockedVELO ? parseFloat(lockedVELO) : 0);
    }, 0);

    const totalVotingPower = nftData.reduce((total, lock) => {
      const votingPower = lock.metadata?.attributes.find(
        (attr) => attr.trait_type === 'Voting Power'
      )?.value;
      return total + (votingPower ? parseFloat(votingPower) : 0);
    }, 0);

    const totalValueLocked = totalLockedTENEX * 1.0;

    return {
      totalLockedTENEX,
      totalVotingPower,
      totalValueLocked,
    };
  }, [nftData]);
};
