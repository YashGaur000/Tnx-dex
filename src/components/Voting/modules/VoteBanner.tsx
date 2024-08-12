import React from 'react';
import {
  InfoItem,
  Title,
  VoteBoxWrapper,
  VoteDesc,
  VoteDescBox,
  VoteInfo,
  VoteInfoSubtitle,
  VoteInfoValues,
  VoteTitleBox,
} from '../styles/VotingBanner.style';

const VoteBanner: React.FC = () => {
  return (
    <VoteBoxWrapper>
      <VoteTitleBox>
        <Title fontSize={36}>Vote</Title>
      </VoteTitleBox>
      <VoteDescBox>
        <VoteDesc>
          Vote weekly to earn Fees & Bribes from your veEQUAL NFT
        </VoteDesc>
      </VoteDescBox>
      <VoteInfo>
        <VoteInfoValues>
          <InfoItem>
            <div>4d : 12h : 20m: 12s</div>
            <VoteInfoSubtitle>Epoch Ends in</VoteInfoSubtitle>
          </InfoItem>
          <InfoItem>
            <div>~$547,658.28</div>
            <VoteInfoSubtitle>Total Fees</VoteInfoSubtitle>
          </InfoItem>
          <InfoItem>
            <div>8,417,070.70</div>
            <VoteInfoSubtitle>New Emissions</VoteInfoSubtitle>
          </InfoItem>
          <InfoItem>
            <div>~$248.64</div>
            <VoteInfoSubtitle>Total Incentives</VoteInfoSubtitle>
          </InfoItem>
          <InfoItem>
            <div>~$147,070.40</div>
            <VoteInfoSubtitle>Total Rewards</VoteInfoSubtitle>
          </InfoItem>
        </VoteInfoValues>
      </VoteInfo>
    </VoteBoxWrapper>
  );
};

export default VoteBanner;
