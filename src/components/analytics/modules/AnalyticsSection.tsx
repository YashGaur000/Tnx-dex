import React from 'react';

import {
  AnalyticsCard,
  AnalyticsContainer,
  CardText,
  ChartTitle,
  SmallText,
} from '../style/AnalyticsSection.style';
import SupplyChart from './AnalyticsCharts/SupplyChart';
import LockedSupplyChart from './AnalyticsCharts/LockedSupplyChart';
import NonCirculatingSupplyChart from './AnalyticsCharts/NonCirculatingSupplyChart';
import VoteEscrowedSupplyChart from './AnalyticsCharts/VoteEscrowedSupplyChart';
import {
  ChartContainer,
  ClasificationColorBox,
  ClasificationCosHead,
  ClasificationDescription,
  ClasificationSection,
  ClasificationTitle,
} from '../style/AnalyticsChart.style';
import PriceTenexChart from './AnalyticsCharts/PriceTenexChart';
import DayTradingVitals from './AnalyticsCharts/DayTradingVitals';
import PoolTwoLiquidity from './AnalyticsCharts/PoolTwoLiquidityChart';
import MarketCapitalization from './AnalyticsCharts/MarketCapitalizationChart';

const AnlyticsSection: React.FC = () => (
  <AnalyticsContainer>
    <AnalyticsCard height="102px" width="1000px" Radius="20px">
      <CardText>TENEX Analytics</CardText>
    </AnalyticsCard>
    <SmallText>Best Decentralized Exchange in the Market</SmallText>
    <ChartContainer>
      <ChartTitle>Supply Classification</ChartTitle>
      <SupplyChart />
    </ChartContainer>
    <ChartContainer>
      <ClasificationTitle>Classification of Supply</ClasificationTitle>
      <ClasificationSection>
        <ClasificationColorBox color="#3EACFC" />
        <ClasificationCosHead>Circulating</ClasificationCosHead>
        <ClasificationDescription>
          <br />
          <br /> The Supply of EQUAL that is held by users in their wallets.
          Circulating Supply is fully unlocked and readily transferable.
        </ClasificationDescription>
      </ClasificationSection>
      <ClasificationSection>
        <ClasificationColorBox color="#16C062" />
        <ClasificationCosHead>Outstanding</ClasificationCosHead>
        <ClasificationDescription>
          <br />
          <br /> Includes all circulating supply, locked supply (EQUAL that is
          locked inside veNFTs) and also the unclaimed supply from gauge
          distributions.
        </ClasificationDescription>
      </ClasificationSection>
      <ClasificationSection>
        <ClasificationColorBox color="#FFC107" />
        <ClasificationCosHead>Diluted</ClasificationCosHead>
        <ClasificationDescription>
          <br />
          <br /> Includes everything! Its the Total of Outstanding plus the
          EQUAL left in Genesis Airdrop (20% of initial supply, = 500K), Genesis
          Boosted Farming Incentives (25% of initial supply, = 625K), Treasury
          holdings, Marketing wallet & unclaimed bribes as well.
        </ClasificationDescription>
      </ClasificationSection>
    </ChartContainer>
    <ChartContainer>
      <ChartTitle>Non-Circulating Supply</ChartTitle>
      <NonCirculatingSupplyChart />
    </ChartContainer>
    <ChartContainer>
      {' '}
      <ChartTitle>Vote Escrowed Supply</ChartTitle>
      <VoteEscrowedSupplyChart />
    </ChartContainer>
    <ChartContainer>
      <ChartTitle>Locked Supply of $TENEX (in%)</ChartTitle>
      <LockedSupplyChart />
    </ChartContainer>
    <ChartContainer>
      <ChartTitle>Price of $TENEX in $USD</ChartTitle>
      <PriceTenexChart />
    </ChartContainer>
    <ChartContainer>
      <ChartTitle>Day Trading Vital</ChartTitle>
      <DayTradingVitals />
    </ChartContainer>
    <ChartContainer>
      <ChartTitle>Pool2 Liquidity to Market Cap Ratio (in%)</ChartTitle>
      <PoolTwoLiquidity />
    </ChartContainer>
    <ChartContainer>
      <ChartTitle>Market Capitalization in $USD</ChartTitle>
      <MarketCapitalization />
    </ChartContainer>
  </AnalyticsContainer>
);

export default AnlyticsSection;
