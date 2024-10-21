import { useEffect, useState } from 'react';

import { useVotingEscrowContract } from './useVotingEscrowContract';
import {
  decodeBase64,
  filterNftsByUnlockDate,
  sortNftsByUnlockDateDesc,
} from '../utils/common/voteTenex';
import { Nft } from '../types/VotingEscrow';
import { useAccount } from './useAccount';

// import { useVotingEscrowContract } from '../../../hooks/useVotingEscrowContract';
// import contractAddress from './constants/contract-address/address';

import ccontractAddress from '../constants/contract-address/address';

const useNftData = () => {
  const [nftData, setNftData] = useState<Nft[]>([]);
  const { address } = useAccount();
  const escrowAddress = ccontractAddress.VotingEscrow;
  const { fetchUserNFTs } = useVotingEscrowContract(escrowAddress);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (address) {
          const fetchedNftVal = await fetchUserNFTs(address);
          const formattedNftFormateData = fetchedNftVal.map((nft) => ({
            tokenId: nft.tokenId,
            metadata: decodeBase64(nft.metadata),
            votingStatus: nft.votingStatus,
            lastVoted: nft.lastVote,
          }));
          const filteredNftVal = filterNftsByUnlockDate(
            formattedNftFormateData
          );
          const formattedNftData = sortNftsByUnlockDateDesc(filteredNftVal);
          setNftData(formattedNftData);

          const sortedNftData =
            filteredNftVal
              ?.slice()
              .sort((a, b) => Number(b.tokenId) - Number(a.tokenId)) || [];
          setNftData(sortedNftData);
        } else {
          console.warn('Address is undefined');
        }
      } catch (error) {
        console.error('Error fetching NFT data:', error);
      }
    };

    void fetchData();
  }, [address, fetchUserNFTs]);

  return nftData;
};

export default useNftData;
