import React from 'react';
import { Card } from '../../common';
import { FeaturesContainer, CardText } from '../styles/FeatureSection.style';

const FeaturesSection: React.FC = () => (
  <FeaturesContainer>
    <Card height="136px">
      <CardText>
        Minimal Slippage trades
        <br /> for low fees
      </CardText>
    </Card>
    <Card height="136px">
      <CardText>
        Autonomous Liquidity
        <br /> Cycle
      </CardText>
    </Card>
    <Card height="136px">
      <CardText>
        All Protocol Incentives, <br />
        fees distributed to Voters
      </CardText>
    </Card>
    <Card height="136px">
      <CardText>
        NFT-Based Liquid Locked
        <br />
        Positions
      </CardText>
    </Card>
    <Card height="136px">
      <CardText>Capital Efficient Model</CardText>
    </Card>
    <Card height="136px">
      <CardText>
        Permissionless Pools,
        <br />
        Gauges, and Incentives
      </CardText>
    </Card>
  </FeaturesContainer>
);

export default FeaturesSection;
