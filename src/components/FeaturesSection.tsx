import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px 180px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 60px;
  text-align: center;
  color: ${({ theme }) => theme.colors.card};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardText = styled.p`
  font-size: 1em;
  line-height: 1.5;
`;

const FeaturesSection: React.FC = () => (
  <FeaturesContainer>
    <Card>
      <CardText>Stable and Volatile trading for low fees</CardText>
    </Card>
    <Card>
      <CardText>Autonomous Liquidity Cycle</CardText>
    </Card>
    <Card>
      <CardText>All Protocol Incentives, fees distributed to Voters</CardText>
    </Card>
    <Card>
      <CardText>NFT-Based Liquid Locked Positions</CardText>
    </Card>
    <Card>
      <CardText>Capital Efficient Model</CardText>
    </Card>
    <Card>
      <CardText>Permissionless Pools, Gauges, and Incentives</CardText>
    </Card>
  </FeaturesContainer>
);

export default FeaturesSection;
