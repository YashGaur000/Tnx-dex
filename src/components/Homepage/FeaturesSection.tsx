import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.section`
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

const Card = styled.div`
  width: 100%;
  height: 136px;
  float: left;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    width: 350px;
  }

  @media (max-width: 900px) {
    margin-top: 10px;
    grid-template-columns: none;
    justify-content: center;
  }
`;

const CardText = styled.p`
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
