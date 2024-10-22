import React, { useEffect, useState, useCallback } from 'react';
import {
  LockDescriptonTitle,
  LockHeaderTitle,
} from '../ManageVeTenex/Styles/ManageVetenex.style';
import {
  HeaderleftContent,
  HeaderRightContent,
  LockTokenContainer,
  HeaderTokenContent,
  ScrollContainer,
  TokenItem,
  TokenItemData,
  TokenItemImage,
  TokenItemWithAdressWrapper,
  TokenList,
  TokenListsWrapper,
  TokenNameWrapper,
} from './styles/TokenSelectModal.style';

import { LockModelProps, Nft } from '../../types/VotingEscrow'; // Define the Nft type based on your fetched lock data
import { useVotingEscrowContract } from '../../hooks/useVotingEscrowContract';
import { useAccount } from '../../hooks/useAccount';
import contractAddress from '../../constants/contract-address/address';
import {
  decodeBase64,
  getTimeDifference,
  locktokeninfo,
} from '../../utils/common/voteTenex';
import { useVoterContract } from '../../hooks/useVoterContract';

const LockModel: React.FC<LockModelProps> = ({
  handleSelectToken,
  tokenId,
}) => {
  const [userLocks, setUserLocks] = useState<Nft[]>([]);
  const [epochStartTime, setEpochStartTime] = useState<number | null>(null);
  const { address } = useAccount();
  const { fetchUserNFTs } = useVotingEscrowContract(
    contractAddress.VotingEscrow
  );
  const lockTokenInfo = locktokeninfo();
  const { epochStart } = useVoterContract();

  const fetchLocks = useCallback(async () => {
    if (address) {
      try {
        const fetchedLocks = await fetchUserNFTs(address);
        const formattedNftData = fetchedLocks.map((nft) => ({
          tokenId: nft.tokenId,
          metadata: decodeBase64(nft.metadata),
          votingStatus: nft.votingStatus,
          lastVoted: nft.lastVote,
        }));
        setUserLocks(formattedNftData);
      } catch (error) {
        console.error('Error fetching user locks:', error);
      }
    }
  }, [address, fetchUserNFTs]);

  useEffect(() => {
    if (address) {
      void fetchLocks();
    }
  }, [address, fetchLocks]);
  useEffect(() => {
    const fetchEpochStartTime = async () => {
      try {
        const timestamp = Math.floor(Date.now() / 1000);
        const epochStartTime = await epochStart(timestamp);
        setEpochStartTime(Number(epochStartTime));
      } catch (error) {
        console.error('Error fetching epoch start time:', error);
      }
    };

    void fetchEpochStartTime();
  }, [epochStart]);

  return (
    <LockTokenContainer>
      <LockHeaderTitle margin="0px 0px 0px 25px" fontSize={24}>
        Select your lock to merge
      </LockHeaderTitle>
      <TokenListsWrapper>
        <HeaderTokenContent>
          <HeaderleftContent>{userLocks.length} Tokens</HeaderleftContent>
          <HeaderRightContent>Voting Power</HeaderRightContent>
        </HeaderTokenContent>
        <ScrollContainer>
          <TokenList>
            {userLocks.length > 0 ? (
              userLocks.map((lock, index) => {
                if (tokenId === Number(lock.tokenId)) {
                  return null;
                }
                if (lock.lastVoted) {
                  if (Number(epochStartTime) <= lock.lastVoted) {
                    return;
                  }
                }

                if (!lock.metadata) {
                  console.warn(
                    `No metadata found for lock with tokenId: ${lock.tokenId}`
                  );
                  return null;
                }
                const metadata = lock.metadata;
                const attributes = metadata.attributes;

                const unlockDate =
                  attributes.find((attr) => attr.trait_type === 'Unlock Date')
                    ?.value ?? '';
                const formattedUnlockDate = getTimeDifference(unlockDate);

                if (formattedUnlockDate === 'Expired') {
                  return null;
                }
                const votingPower =
                  attributes.find((attr) => attr.trait_type === 'Voting Power')
                    ?.value ?? 'N/A';
                const lockedVELO =
                  attributes.find((attr) => attr.trait_type === 'Locked VELO')
                    ?.value ?? 'N/A';

                return (
                  <TokenItem
                    key={index}
                    onClick={() =>
                      handleSelectToken(
                        `Lock #${Number(lock.tokenId)} with ${parseFloat(lockedVELO).toFixed(2)} veTenex`,
                        Number(lock.tokenId),
                        Number(parseFloat(votingPower).toFixed(2)),
                        unlockDate,
                        lock.votingStatus ? lock.votingStatus : false
                      )
                    }
                  >
                    <TokenItemWithAdressWrapper>
                      <TokenItemImage
                        src={lockTokenInfo.logoURI}
                        width={36}
                        height={36}
                        alt={'Lock icon'}
                      />
                      <TokenNameWrapper>
                        <TokenItemData>
                          Lock #{Number(lock.tokenId)}
                        </TokenItemData>
                        <LockDescriptonTitle fontSize={12}>
                          {Number(lockedVELO)} {lockTokenInfo.symbol} locked for{' '}
                          {formattedUnlockDate}
                        </LockDescriptonTitle>
                      </TokenNameWrapper>
                    </TokenItemWithAdressWrapper>
                    <TokenItemData fontSize={16}>{votingPower}</TokenItemData>
                  </TokenItem>
                );
              })
            ) : (
              <p>No locks found.</p>
            )}
          </TokenList>
        </ScrollContainer>
      </TokenListsWrapper>
    </LockTokenContainer>
  );
};

export default LockModel;
