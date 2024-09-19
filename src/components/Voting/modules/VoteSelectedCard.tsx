import { GlobalButton } from '../../common';
import {
  TokenItemData,
  TokenItemImage,
  TokenItemWithAdressWrapper,
  TokenNameWrapper,
} from '../../modal/styles/TokenSelectModal.style';

import {
  SelectCardContainer,
  SelectedDataWrapper,
} from '../styles/VoteSelectedCard.style';
import { Title } from '../styles/VotingPoolBar.style';
import TenexLogo from '../../../assets/Tenex.png';
import { LockDescriptonTitle } from '../../ManageVeTenex/Styles/ManageVetenex.style';
import React, { useState } from 'react';
import { DashboardNavigation } from '../../Dashboard/Index/styles/DashBoard.styled';
import PopupScreen from '../../common/PopupScreen';
import VoteSelectModel from './VoteSelectModel';
import { PopupWrapper } from '../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import VottingPowerModel from './VottingPowerModel';

interface VoteSelectedCardProps {
  countSelectedItem: number;
}
const VoteSelectedCard: React.FC<VoteSelectedCardProps> = ({
  countSelectedItem,
}) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isModelOpen, setModelOpen] = useState(false);

  function handleModel(option: string) {
    setModelOpen(option === 'ChangeLock');
    setPopupVisible(true);
  }

  function handleModelHide() {
    setPopupVisible(false);
  }

  return (
    <>
      <SelectCardContainer>
        <TokenItemWithAdressWrapper>
          <TokenItemImage
            src={TenexLogo}
            width={36}
            height={36}
            alt={'wrong'}
          />
          <TokenNameWrapper>
            <SelectedDataWrapper gap={8}>
              <TokenItemData>Lock #{'7242'}</TokenItemData>
              <DashboardNavigation
                fontsize={14}
                onClick={() => handleModel('ChangeLock')}
              >
                Change lock
              </DashboardNavigation>
            </SelectedDataWrapper>
            <LockDescriptonTitle fontSize={12}>
              {'50.0'} TENEX locked for {'11 hours'}
            </LockDescriptonTitle>
          </TokenNameWrapper>
        </TokenItemWithAdressWrapper>
        <SelectedDataWrapper>
          <Title fontSize="16px">{countSelectedItem} pools selected</Title>
          <GlobalButton
            margin="0px"
            height="40px"
            width="82px"
            onClick={() => handleModel('Vote')}
          >
            Vote
          </GlobalButton>
        </SelectedDataWrapper>
      </SelectCardContainer>

      <PopupScreen
        isvisible={isPopupVisible}
        onClose={() => {
          setPopupVisible(false);
        }}
        height="540px"
        width="80%"
        padding="0px"
        scroll="none"
      >
        <PopupWrapper onClick={handleModelHide}></PopupWrapper>
        {isModelOpen ? <VoteSelectModel /> : <VottingPowerModel />}
      </PopupScreen>
    </>
  );
};

export default VoteSelectedCard;
