import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';

const VoteBoxWrapper = styled.div<{ theme: DefaultTheme }>`
  margin-bottom: 20px;
`;

const VoteTitleBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  line-height: 71.76px;
  margin-bottom: 24px;
`;

export const Title = styled.p<{ fontSize: number; theme: DefaultTheme }>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const VoteDescBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  line-height: 35.88px;
`;

const VoteDesc = styled.p<{ theme: DefaultTheme }>`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const VoteInfo = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 36px;
  margin-top: 36px;
  margin-left: 40px;
  margin-right: 40px;
`;

const VoteInfoValues = styled.div<{ theme: DefaultTheme }>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: -50px;
  // justify-content: center;
  text-align: center;
`;

const VoteInfoSubtitle = styled.div<{ theme: DefaultTheme }>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 65px;
  // justify-content: center;
  text-align: center;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const EpochEndsIn = styled.div<{ Marginright?: string; theme: DefaultTheme }>`
  margin-right: ${({ Marginright }) => Marginright};
`;

const TotalFees = styled.div<{ Marginright?: string; theme: DefaultTheme }>`
  margin-right: ${({ Marginright }) => Marginright};
`;

const NewEmissions = styled.div<{ Marginright?: string; theme: DefaultTheme }>`
  margin-right: ${({ Marginright }) => Marginright};
`;

const TotalIncentives = styled.div<{
  Marginright?: string;
  theme: DefaultTheme;
}>`
  margin-right: ${({ Marginright }) => Marginright};
`;

const TotalRewards = styled.div<{ Marginright?: string; theme: DefaultTheme }>`
  margin-right: ${({ Marginright }) => Marginright};
`;

const EpochEndsInSubtitle = styled.div<{
  Marginright?: string;
  theme: DefaultTheme;
}>`
  margin-right: ${({ Marginright }) => Marginright};
`;

const TotalFeesSubtitle = styled.div<{
  Marginright?: string;
  Marginleft?: string;
  theme: DefaultTheme;
}>`
margin-right: ${({ Marginright }) => Marginright}
margin-left: ${({ Marginleft }) => Marginleft}
`;

const NewEmissionsSubtitle = styled.div<{
  Marginright?: string;
  theme: DefaultTheme;
}>`
  margin-right: ${({ Marginright }) => Marginright};
`;

const TotalIncentivesSubtitle = styled.div<{
  Marginright?: string;
  theme: DefaultTheme;
}>`
  margin-right: ${({ Marginright }) => Marginright};
`;

const TotalRewardsSubtitle = styled.div<{
  Marginright?: string;
  theme: DefaultTheme;
}>`
  margin-right: ${({ Marginright }) => Marginright};
`;

const VoteBanner: React.FC = () => {
  return (
    <VoteBoxWrapper>
      <VoteTitleBox>
        <Title fontSize={48}>Vote</Title>
      </VoteTitleBox>
      <VoteDescBox>
        <VoteDesc>
          Vote weekly to earn Fees & Bribes from your veEQUAL NFT
        </VoteDesc>
      </VoteDescBox>
      <VoteInfo>
        <VoteInfoValues>
          <EpochEndsIn>4d : 12h : 20m: 12s</EpochEndsIn>
          <TotalFees>~$547,658.28</TotalFees>
          <NewEmissions Marginright="10px">8,417,070.70</NewEmissions>
          <TotalIncentives Marginright="40px">~$248.64</TotalIncentives>
          <TotalRewards Marginright="100px">~$147,070.40</TotalRewards>
        </VoteInfoValues>
        <VoteInfoSubtitle>
          <EpochEndsInSubtitle>Epoch Ends in</EpochEndsInSubtitle>
          <TotalFeesSubtitle>Total Fees</TotalFeesSubtitle>
          <NewEmissionsSubtitle Marginright="10px">
            New Emissions
          </NewEmissionsSubtitle>
          <TotalIncentivesSubtitle Marginright="40px">
            Total Incentives
          </TotalIncentivesSubtitle>
          <TotalRewardsSubtitle Marginright="140px">
            Total Rewards
          </TotalRewardsSubtitle>
        </VoteInfoSubtitle>
      </VoteInfo>
    </VoteBoxWrapper>
  );
};

export default VoteBanner;
