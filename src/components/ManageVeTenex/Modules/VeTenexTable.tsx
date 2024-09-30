import React, { useCallback, useState } from 'react';
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
  const Navigate = useNavigate();

  const handleLockButton = (option: string, pageID: bigint) => {
    if (option) {
      Navigate(`/governance/managevetenex/${option}/${pageID}`);
    } else {
      console.log('Route is undefine ');
    }
  };

  const handleWithdrawNreset = useCallback(
    async (type: string, tokenId: bigint): Promise<void> => {
      try {
        if (!tokenId) return;
        if (type === 'withdraw') {
          await withdraw(BigInt(tokenId));
        } else {
          await withdraw(BigInt(tokenId));
        }
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
                  <LockInfoDes fontSize={16} lineheight={23.92}>
                    {metadata.name}
                  </LockInfoDes>
                  <LockInfoDes fontSize={12} lineheight={17.94}>
                    {lockedVELO} {lockTokenInfo.symbol} locked for{' '}
                    {formatUnloackData}
                  </LockInfoDes>
                  <LockInfoCheck>
                    {formatUnloackData !== 'Expired' && !lock.votingStatus ? (
                      <>
                        {!lock.votingStatus && (
                          <LockInfoAction
                            onClick={() =>
                              handleLockButton('increase', lock.tokenId)
                            }
                          >
                            Increase
                          </LockInfoAction>
                        )}
                        {!lock.votingStatus && (
                          <LockInfoAction
                            onClick={() =>
                              handleLockButton('extend', lock.tokenId)
                            }
                          >
                            Extend
                          </LockInfoAction>
                        )}
                        {!lock.votingStatus && (
                          <LockInfoAction
                            onClick={() =>
                              handleLockButton('merge', lock.tokenId)
                            }
                          >
                            Merge
                          </LockInfoAction>
                        )}

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
                        <LockInfoCheck>
                          {lock.votingStatus ? (
                            <LockInfoAction
                              onClick={() =>
                                handleWithdrawNreset('reset', lock.tokenId)
                              }
                            >
                              Reset
                            </LockInfoAction>
                          ) : (
                            <LockInfoAction
                              onClick={() =>
                                handleWithdrawNreset('withdraw', lock.tokenId)
                              }
                            >
                              Withdraw
                            </LockInfoAction>
                          )}
                        </LockInfoCheck>
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
