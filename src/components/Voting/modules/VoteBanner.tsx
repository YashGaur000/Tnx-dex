import React, { useState } from 'react';
import {
  InfoItem,
  Title,
  VoteBoxWrapper,
  VoteDesc,
  VoteDescBox,
  VoteInfo,
  VoteInfoSubtitle,
  VoteTitleBox,
  VotingTitle,
} from '../styles/VotingBanner.style';
import { ImageContainer } from '../../ManageVeTenex/Styles/ManageVetenex.style';
import QuestionIcon from '../../../assets/questionmark.svg';
import PopupScreen from '../../common/PopupScreen';
import { PopupWrapper } from '../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import VotingToolTips from './VotingToolTips';

const VoteBanner: React.FC = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  function handleTooltipShow() {
    setPopupVisible(true);
  }

  function handleTooltipHide() {
    setPopupVisible(false);
  }

  const closeModal = () => {
    setPopupVisible(false);
  };
  return (
    <>
      <VoteBoxWrapper>
        <VoteTitleBox>
          <Title fontsize={36}>Vote</Title>
        </VoteTitleBox>
        <VoteDescBox>
          <VoteDesc>
            <VotingTitle>
              Vote weekly to earn Fees & Bribes from your veTENEX NFT
            </VotingTitle>
            <ImageContainer
              width="16px"
              height="16px"
              src={QuestionIcon}
              cursor="pointer"
              onClick={handleTooltipShow}
            />
          </VoteDesc>
        </VoteDescBox>
        <VoteInfo>
          <InfoItem>
            <Title fontsize={24}>4d : 12h : 20m: 12s</Title>
            <VoteInfoSubtitle>Epoch Ends in</VoteInfoSubtitle>
          </InfoItem>
          <InfoItem>
            <Title fontsize={24}>~$547,658.28</Title>
            <VoteInfoSubtitle>Total Fees</VoteInfoSubtitle>
          </InfoItem>
          <InfoItem>
            <Title fontsize={24}>8,417,070.70</Title>
            <VoteInfoSubtitle>New Emissions</VoteInfoSubtitle>
          </InfoItem>
          <InfoItem>
            <Title fontsize={24}>~$248.64</Title>
            <VoteInfoSubtitle>Total Incentives</VoteInfoSubtitle>
          </InfoItem>
          <InfoItem>
            <Title fontsize={24}>~$147,070.40</Title>
            <VoteInfoSubtitle>Total Rewards</VoteInfoSubtitle>
          </InfoItem>
        </VoteInfo>
      </VoteBoxWrapper>

      <PopupScreen
        isvisible={isPopupVisible}
        onClose={closeModal}
        width="500px"
        height="518px"
      >
        <PopupWrapper onMouseLeave={handleTooltipHide}>
          {<VotingToolTips />}
        </PopupWrapper>
      </PopupScreen>
    </>
  );
};

export default VoteBanner;
