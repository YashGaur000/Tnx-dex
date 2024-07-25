import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';
import { Card } from '../common';

const FeaturesContainer = styled.section<{ theme: DefaultTheme }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-bottom: 50px;
  padding: 0px 50px;
  background-color: ${({ theme }) => theme.colors.card};

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    margin-top: 150px;
    grid-template-columns: none;
    justify-content: center;
  }
  @media (max-width: 768px) {
    margin-top: 200px;
  }
`;

const CardText = styled.p<{ theme: DefaultTheme }>`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 41.86px;

  @media (max-width: 1200px) {
    font-size: 22px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

const FeaturesSection: React.FC = () => (
  <FeaturesContainer>
    <Card height="136px">
      <CardText>Stable and Volatile trading for low fees</CardText>
    </Card>
    <Card height="136px">
      <CardText>Autonomous Liquidity Cycle</CardText>
    </Card>
    <Card height="136px">
      <CardText>All Protocol Incentives, fees distributed to Voters</CardText>
    </Card>
    <Card height="136px">
      <CardText>NFT-Based Liquid Locked Positions</CardText>
    </Card>
    <Card height="136px">
      <CardText>Capital Efficient Model</CardText>
    </Card>
    <Card height="136px">
      <CardText>Permissionless Pools, Gauges, and Incentives</CardText>
    </Card>
  </FeaturesContainer>
);

export default FeaturesSection;
