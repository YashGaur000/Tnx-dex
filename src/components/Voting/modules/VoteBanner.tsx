import React, { useEffect, useState } from 'react';
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
import { useVoterContract } from '../../../hooks/useVoterContract';

const VoteBanner: React.FC = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState<string | null>(null);
  const [epochEnd, setEpochEnd] = useState<number | null>(null);
  const { epochVoteEnd } = useVoterContract();
  const timestamp = Math.floor(Date.now() / 1000);

  // Effect for fetching epoch end time
  useEffect(() => {
    const fetchEpochVoteEnd = async () => {
      try {
        const epochEndResult = await epochVoteEnd(timestamp);
        setEpochEnd(Number(epochEndResult)); // Convert and set epoch end
      } catch (error) {
        console.error('Error fetching epoch vote end:', error);
      }
    };

    void fetchEpochVoteEnd();
  }, [timestamp, epochVoteEnd]);

  useEffect(() => {
    if (epochEnd === null) return;

    let timerInterval: NodeJS.Timeout | null = null;

    const updateTimer = () => {
      const currentTime = Math.floor(Date.now() / 1000);
      const remainingTime = epochEnd - currentTime;

      if (remainingTime > 0) {
        const days = Math.floor(remainingTime / (24 * 60 * 60));
        const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
        const seconds = remainingTime % 60;

        setTimeLeft(`${days}d : ${hours}h : ${minutes}m : ${seconds}s`);
      } else {
        setTimeLeft('Time expired');
        if (timerInterval) {
          clearInterval(timerInterval);
        }
      }
    };

    void updateTimer();
    timerInterval = setInterval(updateTimer, 1000);

    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [epochEnd]);

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
          <Title fontSize={36}>Vote</Title>
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
            <Title fontSize={24} width={200}>
              {timeLeft}
            </Title>
            <VoteInfoSubtitle>Epoch Ends in</VoteInfoSubtitle>
          </InfoItem>
          <InfoItem>
            <Title fontSize={24}>~$547,658.28</Title>
            <VoteInfoSubtitle>Total Fees</VoteInfoSubtitle>
          </InfoItem>
          <InfoItem>
            <Title fontSize={24}>8,417,070.70</Title>
            <VoteInfoSubtitle>New Emissions</VoteInfoSubtitle>
          </InfoItem>
          <InfoItem>
            <Title fontSize={24}>~$248.64</Title>
            <VoteInfoSubtitle>Total Incentives</VoteInfoSubtitle>
          </InfoItem>
          <InfoItem>
            <Title fontSize={24}>~$147,070.40</Title>
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
