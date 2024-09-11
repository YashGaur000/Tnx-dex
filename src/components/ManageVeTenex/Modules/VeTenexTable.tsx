import React from 'react';
import {
  LockItemContainer,
  LockListContainer,
  PaginationContainer,
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

const VeTenexTable: React.FC<{ nftData: LockItemProps[] }> = ({ nftData }) => (
  <LockListContainer>
    {nftData.length > 0 ? (
      nftData.map((lock, index) => {
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
          attributes.find((attr) => attr.trait_type === 'Unlock Date')?.value ??
          'N/A';
        const votingPower =
          attributes.find((attr) => attr.trait_type === 'Voting Power')
            ?.value ?? 'N/A';
        const lockedVELO =
          attributes.find((attr) => attr.trait_type === 'Locked VELO')?.value ??
          'N/A';

        return (
          <LockItemContainer key={index}>
            <LockDetails>
              <LockIcon>
                <LockImg src={TenexIcon} alt="Lock Icon" />
              </LockIcon>
              <LockInfo>
                <LockInfoDes fontSize={16} lineheight={23.92}>
                  {metadata.name}
                </LockInfoDes>
                <LockInfoDes fontSize={12} lineheight={17.94}>
                  {lockedVELO} VELO locked until {unlockDate}
                </LockInfoDes>
                <LockInfoCheck>
                  <LockInfoAction>Increase</LockInfoAction>
                  <LockInfoAction>Extend</LockInfoAction>
                  <LockInfoAction>Merge</LockInfoAction>
                  <LockInfoAction>Transfer</LockInfoAction>
                </LockInfoCheck>
              </LockInfo>
            </LockDetails>
            <Column>
              <LockInfoText>Voting Power</LockInfoText>
              <LockInfoTextValue>{votingPower}</LockInfoTextValue>
            </Column>
            <Column>
              <LockInfoText>Emissions</LockInfoText>
              <LockInfoTextValue>{votingPower}</LockInfoTextValue>
            </Column>
          </LockItemContainer>
        );
      })
    ) : (
      <p>No locks found.</p>
    )}
    <PaginationContainer>
      <button disabled>Prev</button>
      <button>Next</button>
    </PaginationContainer>
  </LockListContainer>
);

export default VeTenexTable;
