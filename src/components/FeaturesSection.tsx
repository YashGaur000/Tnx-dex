import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 0px 180px;
  padding-bottom: 50px;
  background-color: ${({ theme }) => theme.colors.card};
`;

const Card = styled.div`
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardText = styled.p`
  font-size: 1.3em;
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
