import React, { useCallback, useEffect, useState } from 'react';
import {
  LockItemContainer,
  LockListContainer,
  Column,
  LockDetails,
  LockIcon,
  LockImg,
  LockInfo,
  LockInfoDes,
  LockInfoAction,
  LockInfoCheck,
  LockInfoText,
  LockInfoTextValue,
} from '../Styles/VeTenexTable.style';
import { Nft } from '../../../types/VotingEscrow';
import Pagination from '../../common/Pagination';
import { useNavigate } from 'react-router-dom';
import {
  getTimeDifference,
  locktokeninfo,
} from '../../../utils/common/voteTenex';
import { useVotingEscrowContract } from '../../../hooks/useVotingEscrowContract';
import contractAddress from '../../../constants/contract-address/address';
import SuccessPopup from '../../common/SucessPopup';
import { useContract } from '../../../hooks/useContract';
import voterAbi from '../../../constants/artifacts/contracts/Voter.json';
import { checkIfVoted } from '../../../hooks/useHasVoted';
import { VoterContract } from '../../../types/Voter';

interface VotedTokenStatus {
  tokenId: bigint;
  hasVoted: boolean;
}

const VeTenexTable: React.FC<{ nftData: Nft[] }> = ({ nftData }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [withdrawTknId, setWithdrawTknId] = useState<bigint>(0n);
  const [iSuccessLock, setSuccessLock] = useState<boolean>(false);

  const itemsPerPage = 5;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = nftData.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(nftData.length / itemsPerPage);

  const escrowAddress = contractAddress.VotingEscrow;
  const { withdraw } = useVotingEscrowContract(escrowAddress);
  const lockTokenInfo = locktokeninfo();
  const Navigate = useNavigate();

  const [votedTokens, setVotedTokens] = useState<VotedTokenStatus[]>([]);
  const voterContract = useContract(
    contractAddress.Voter,
    voterAbi.abi
  ) as VoterContract;

  // Fetch voted status for each NFT tokenId
  useEffect(() => {
    const fetchVotedStatus = async () => {
      try {
        const votedStatuses: VotedTokenStatus[] = await Promise.all(
          nftData.map(async (lock) => {
            const hasVoted = await checkIfVoted(voterContract, lock.tokenId); // Call the function to get the value
            return {
              tokenId: lock.tokenId,
              hasVoted,
            };
          })
        );
        setVotedTokens(votedStatuses);
      } catch (error) {
        console.error('Error fetching voted status:', error);
      }
    };

    if (nftData.length > 0) {
      void fetchVotedStatus();
    }
  }, [nftData]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleLockButton = (option: string, pageID: bigint) => {
    if (option) {
      Navigate(`/governance/managevetenex/${option}/${pageID}`);
    } else {
      console.log('Route is undefined');
    }
  };

  const handleWithdraw = useCallback(
    async (tokenId: bigint): Promise<void> => {
      try {
        if (!tokenId) return;

        await withdraw(BigInt(tokenId));

        setWithdrawTknId(tokenId);
        setSuccessLock(true);
      } catch (error) {
        console.error('Error during token withdrawal:', error);
      }
    },
    [withdraw]
  );

  return (
    <LockListContainer>
      {currentItems.length > 0 ? (
        currentItems.map((lock, index) => {
          if (!lock.metadata) {
            console.warn(
              `No metadata found for lock with tokenId: ${lock.tokenId}`
            );
            return null;
          }
          if (lock.tokenId === withdrawTknId) {
            return null;
          }

          const votedToken = votedTokens.find(
            (voted) => voted.tokenId === lock.tokenId
          );
          const hasVoted = votedToken ? votedToken.hasVoted : false;

          const metadata = lock.metadata;
          if (!metadata.attributes) {
            console.warn(
              `No attributes found in metadata for lock with tokenId: ${lock.tokenId}`
            );
            return null;
          }

          const attributes = metadata.attributes;

          const unlockDate =
            attributes.find((attr) => attr.trait_type === 'Unlock Date')
              ?.value ?? '';
          const formatUnloackData = getTimeDifference(unlockDate);
          const votingPower =
            attributes.find((attr) => attr.trait_type === 'Voting Power')
              ?.value ?? 'N/A';
          const lockedVELO =
            attributes.find((attr) => attr.trait_type === 'Locked VELO')
              ?.value ?? 'N/A';

          return (
            <LockItemContainer key={index}>
              <LockDetails width="279px">
                <LockIcon>
                  <LockImg src={lockTokenInfo.logoURI} alt="Lock Icon" />
                </LockIcon>
                <LockInfo>
                  <LockInfoDes fontsize={16} lineheight={23.92}>
                    {metadata.name}
                  </LockInfoDes>
                  <LockInfoDes fontsize={12} lineheight={17.94}>
                    {lockedVELO} {lockTokenInfo.symbol} locked for{' '}
                    {formatUnloackData}
                  </LockInfoDes>
                  <LockInfoCheck>
                    {!hasVoted && formatUnloackData !== 'Expired' ? (
                      <>
                        <LockInfoAction
                          onClick={() =>
                            handleLockButton('increase', lock.tokenId)
                          }
                        >
                          Increase
                        </LockInfoAction>
                        <LockInfoAction
                          onClick={() =>
                            handleLockButton('extend', lock.tokenId)
                          }
                        >
                          Extend
                        </LockInfoAction>
                        <LockInfoAction
                          onClick={() =>
                            handleLockButton('merge', lock.tokenId)
                          }
                        >
                          Merge
                        </LockInfoAction>
                        <LockInfoAction
                          onClick={() =>
                            handleLockButton('transfer', lock.tokenId)
                          }
                        >
                          Transfer
                        </LockInfoAction>
                      </>
                    ) : (
                      <>
                        {!hasVoted && (
                          <LockInfoAction
                            onClick={() => handleWithdraw(lock.tokenId)}
                          >
                            Withdraw
                          </LockInfoAction>
                        )}
                      </>
                    )}
                  </LockInfoCheck>
                </LockInfo>
              </LockDetails>
              <Column>
                <LockInfoText>Voting Power</LockInfoText>
                <LockInfoTextValue>{votingPower}</LockInfoTextValue>
              </Column>
              <Column>
                <LockInfoText>Emissions</LockInfoText>
                <LockInfoTextValue>0 </LockInfoTextValue>
              </Column>
            </LockItemContainer>
          );
        })
      ) : (
        <p>No locks found.</p>
      )}

      <Pagination
        handleNextPage={handleNextPage}
        handlePrevpage={handlePrevPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      {iSuccessLock && <SuccessPopup message="Withdrawal successful!" />}
    </LockListContainer>
  );
};

export default VeTenexTable;
