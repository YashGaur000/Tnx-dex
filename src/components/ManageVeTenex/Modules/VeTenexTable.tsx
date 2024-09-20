import React, { useState } from 'react';
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
import TenexIcon from '../../../assets/Tenex.png';
import { LockItemProps } from '../../../types/VotingEscrow';
import Pagination from '../../common/Pagination';
import { useNavigate } from 'react-router-dom';

const VeTenexTable: React.FC<{ nftData: LockItemProps[] }> = ({ nftData }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = nftData.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(nftData.length / itemsPerPage);

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
              ?.value ?? 'N/A';
          const votingPower =
            attributes.find((attr) => attr.trait_type === 'Voting Power')
              ?.value ?? 'N/A';
          const lockedVELO =
            attributes.find((attr) => attr.trait_type === 'Locked VELO')
              ?.value ?? 'N/A';

          return (
            <LockItemContainer key={index}>
              <LockDetails>
                <LockIcon>
                  <LockImg src={TenexIcon} alt="Lock Icon" />
                </LockIcon>
                <LockInfo>
                  <LockInfoDes fontsize={16} lineheight={23.92}>
                    {metadata.name}
                  </LockInfoDes>
                  <LockInfoDes fontsize={12} lineheight={17.94}>
                    {lockedVELO} VELO locked until {unlockDate}
                  </LockInfoDes>
                  <LockInfoCheck>
                    <LockInfoAction
                      onClick={() => handleLockButton('increase', lock.tokenId)}
                    >
                      Increase
                    </LockInfoAction>
                    <LockInfoAction
                      onClick={() => handleLockButton('extend', lock.tokenId)}
                    >
                      Extend
                    </LockInfoAction>
                    <LockInfoAction
                      onClick={() => handleLockButton('merge', lock.tokenId)}
                    >
                      Merge
                    </LockInfoAction>
                    <LockInfoAction
                      onClick={() => handleLockButton('transfer', lock.tokenId)}
                    >
                      Transfer
                    </LockInfoAction>
                  </LockInfoCheck>
                </LockInfo>
              </LockDetails>
              <Column>
                <LockInfoText>Voting Power</LockInfoText>
                <LockInfoTextValue>{votingPower}</LockInfoTextValue>
              </Column>
              <Column>
                <LockInfoText>Emissions</LockInfoText>
                <LockInfoTextValue>0 USD</LockInfoTextValue>
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
    </LockListContainer>
  );
};

export default VeTenexTable;
