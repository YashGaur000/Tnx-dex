import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tenxLogo from '../../../../assets/Tenex.png';
import { DashboardNavigation } from '../styles/DashBoard.styled';
import {
  DashBoardLockMainContainer,
  LockContainer,
  LockData,
  LockHeading,
  LockStyleText,
  Paragraph,
} from '../styles/DashBoardLocks.styled';
import {
  CardLogo,
  DepositeStakedData,
  DepositeStakedHeading,
  StakedContainer,
} from '../styles/DepositAndStake.styled';
import useNftData from '../../../../hooks/useUserNFTs';
import { Nft } from '../../../../types/VotingEscrow';
import Pagination from '../../../common/Pagination';
import { getTimeDifference } from '../../../../utils/common/voteTenex';

const DashBoardLocks = () => {
  const Navigate = useNavigate();
  const [lockData, setLockData] = useState<Nft[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 1;
  const nftData = useNftData();

  useEffect(() => {
    if (nftData.length > 0) {
      setLockData(nftData);
    } else {
      setLockData([]);
    }
  }, [nftData]);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = lockData.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(lockData.length / itemsPerPage);

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

  const handleLockButton = (option: string, tokenId: bigint) => {
    if (option) {
      Navigate(`/governance/managevetenex/${option}/${tokenId}`);
    } else {
      console.log('Route is undefined');
    }
  };

  return (
    <>
      {currentItems.length > 0 ? (
        currentItems.map((lock, index) => {
          if (!lock.metadata) {
            console.warn(
              `No metadata found for lock with tokenId: ${lock.tokenId}`
            );
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
          const formatUnlockData = getTimeDifference(unlockDate);
          return (
            <DashBoardLockMainContainer key={index}>
              <LockContainer>
                <CardLogo>
                  <img src={tenxLogo} alt="TENEX Logo" />
                </CardLogo>
                <LockData>
                  <LockHeading>Lock #{lock.tokenId.toString()}</LockHeading>
                  <Paragraph>
                    {
                      lock.metadata.attributes.find(
                        (attr) => attr.trait_type === 'Locked VELO'
                      )?.value
                    }{' '}
                    TENEX locked for {formatUnlockData}
                  </Paragraph>
                  <LockStyleText>
                    {formatUnlockData !== 'Expired' && !lock.votingStatus ? (
                      <>
                        <DashboardNavigation
                          onClick={() =>
                            handleLockButton('increase', lock.tokenId)
                          }
                        >
                          Increase
                        </DashboardNavigation>
                        <DashboardNavigation
                          onClick={() =>
                            handleLockButton('extend', lock.tokenId)
                          }
                        >
                          Extend
                        </DashboardNavigation>
                        <DashboardNavigation
                          onClick={() =>
                            handleLockButton('merge', lock.tokenId)
                          }
                        >
                          Merge
                        </DashboardNavigation>
                        <DashboardNavigation
                          onClick={() =>
                            handleLockButton('transfer', lock.tokenId)
                          }
                        >
                          Transfer
                        </DashboardNavigation>
                      </>
                    ) : (
                      <>
                        {!lock.votingStatus ? (
                          <DashboardNavigation
                            onClick={() =>
                              handleLockButton('transfer', lock.tokenId)
                            }
                          >
                            Transfer
                          </DashboardNavigation>
                        ) : (
                          <DashboardNavigation
                            onClick={() =>
                              handleLockButton('reset', lock.tokenId)
                            }
                          >
                            Reset
                          </DashboardNavigation>
                        )}
                      </>
                    )}
                  </LockStyleText>
                </LockData>
              </LockContainer>

              <StakedContainer>
                <DepositeStakedHeading>Rebases APR</DepositeStakedHeading>
                <DepositeStakedData>40.43%</DepositeStakedData>
              </StakedContainer>

              <StakedContainer>
                <DepositeStakedHeading>Rebases</DepositeStakedHeading>
                <DepositeStakedData>0.00 USDT</DepositeStakedData>
              </StakedContainer>
            </DashBoardLockMainContainer>
          );
        })
      ) : (
        <Paragraph>No locks found.</Paragraph>
      )}
      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePrevpage={handlePrevPage}
      />
    </>
  );
};

export default DashBoardLocks;
