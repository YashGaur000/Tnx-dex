import { useEffect, useState } from 'react';
import { useVotingEscrowContract } from '../hooks/useVotingEscrowContract';
import contractAddress from '../constants/contract-address/address';
import { Nft } from '../types/VotingEscrow';
import { decodeBase64 } from '../utils/common/voteTenex';
import { useAccount } from '../hooks/useAccount';

export const useFetchNFTData = () => {
  const [nftData, setNftData] = useState<Nft[]>([]);
  const escrowAddress = contractAddress.VotingEscrow;
  const { fetchUserNFTs } = useVotingEscrowContract(escrowAddress);
  const { address } = useAccount();

  useEffect(() => {
    async function fetchData() {
      if (address) {
        try {
          const fetchedNftVal = await fetchUserNFTs(address);
          const formattedNftFormateData = fetchedNftVal.map((nft) => ({
            tokenId: nft.tokenId,
            metadata: decodeBase64(nft.metadata),
            votingStatus: nft.votingStatus,
          }));
          setNftData(formattedNftFormateData);
        } catch (error) {
          console.error('Error fetching NFT data:', error);
        }
      }
    }
    void fetchData();
  }, [address, fetchUserNFTs]);

  return nftData;
};
