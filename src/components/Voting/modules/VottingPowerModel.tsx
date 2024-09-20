import {
  LockTokenContainer,
  ScrollContainer,
  TokenItemData,
  TokenItemImage,
  TokenItemWithAdressWrapper,
  TokenNameWrapper,
} from '../../modal/styles/TokenSelectModal.style';
import TenexLogo from '../../../assets/Tenex.png';
import {
  LockDescriptonTitle,
  LockHeaderTitle,
} from '../../ManageVeTenex/Styles/ManageVetenex.style';
import {
  VoteInput,
  VotingLockWrapper,
  VotingPowerContainer,
} from '../styles/VottingPowerModel.style';
import { SelectLockDataType } from './VoteSelectedCard';
import { DashboardNavigation } from '../../Dashboard/Index/styles/DashBoard.styled';
import {
  GroupImgContains,
  IMG1Contains,
  IMG2Contains,
  Imgstyle,
  LiquidityTokenWrapper,
  PairContain,
  SugestImgWrapper,
  SuggestImg,
  TokenAmountTitle,
  TokenCardContainer,
  TraidingSyleLabel,
} from '../../Liquidity/LiquidityHomePage/styles/LiquidityTable.style';
import {
  LiquidityTitle,
  StatsCardtitle,
} from '../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import ImpIcon from '../../../assets/Tips.svg';

import { getTokenLogo } from '../../../utils/getTokenLogo';
import { LiquidityPoolNewType } from '../../../graphql/types/LiquidityPoolNew';
import { Title } from '../styles/VotingPoolBar.style';

import {
  PercentageButton,
  PercentageOptions,
  PercentageSelectorContainer,
} from '../../Swap/styles/SwapForm.style.';
interface VottingPowerModelProps {
  selectLockData: SelectLockDataType;
  VoteSelectPoolData: LiquidityPoolNewType[];
}

const VottingPowerModel: React.FC<VottingPowerModelProps> = ({
  selectLockData,
  VoteSelectPoolData,
}) => {
  return (
    <LockTokenContainer padding="20px">
      <VotingLockWrapper>
        <TokenItemWithAdressWrapper>
          <TokenItemImage
            src={TenexLogo}
            width={36}
            height={36}
            alt={'wrong'}
          />
          <TokenNameWrapper>
            <TokenItemData>Lock #{selectLockData.id}</TokenItemData>

            <TokenItemWithAdressWrapper>
              <LockDescriptonTitle fontSize={12}>
                {selectLockData.amount} TENEX locked for {selectLockData.time}
              </LockDescriptonTitle>
              <DashboardNavigation fontsize={14}>Increase</DashboardNavigation>
              <DashboardNavigation fontsize={14}>Extend</DashboardNavigation>
              <DashboardNavigation fontsize={14}>
                Clear Votes
              </DashboardNavigation>
            </TokenItemWithAdressWrapper>
          </TokenNameWrapper>
        </TokenItemWithAdressWrapper>

        <VotingPowerContainer>
          <LockDescriptonTitle fontSize={12}>
            Total voting power
          </LockDescriptonTitle>
          <LockHeaderTitle fontSize={14}>15.0% available</LockHeaderTitle>
        </VotingPowerContainer>
      </VotingLockWrapper>

      <ScrollContainer height="350px">
        {VoteSelectPoolData.map((data, key) => (
          <VotingLockWrapper key={key}>
            <TokenCardContainer height={96}>
              <GroupImgContains>
                <IMG1Contains top={10} left={0}>
                  <Imgstyle src={getTokenLogo(data.token0.symbol)} />
                </IMG1Contains>
                <IMG2Contains top={10} left={25}>
                  <Imgstyle src={getTokenLogo(data.token1.symbol)} />
                </IMG2Contains>
              </GroupImgContains>

              <PairContain>
                <TraidingSyleLabel>
                  {data.token0.symbol}-{data.token1.symbol}
                </TraidingSyleLabel>
                <LiquidityTokenWrapper alignitem="flex-start">
                  <TokenAmountTitle>
                    <StatsCardtitle lineheight="17px" fontSize={12}>
                      {data.isStable ? 'Stable' : 'Volatile'}
                    </StatsCardtitle>

                    <LiquidityTitle fontSize={12}>{0.01} %</LiquidityTitle>
                    <SugestImgWrapper>
                      <SuggestImg src={ImpIcon} />
                    </SugestImgWrapper>
                  </TokenAmountTitle>
                  <TokenAmountTitle>
                    <DashboardNavigation fontsize={12}>
                      Clear Vote
                    </DashboardNavigation>
                  </TokenAmountTitle>
                </LiquidityTokenWrapper>
              </PairContain>
            </TokenCardContainer>

            <PairContain>
              <LockDescriptonTitle fontSize={12}>
                Votes 8,923,342.27
              </LockDescriptonTitle>
              <LiquidityTokenWrapper alignitem="flex-start">
                <LockDescriptonTitle fontSize={12}>
                  Total rewards ~$10,180
                </LockDescriptonTitle>
                <LockDescriptonTitle fontSize={12}>
                  Voting APR 45.9%
                </LockDescriptonTitle>
              </LiquidityTokenWrapper>
            </PairContain>

            <PairContain>
              <Title fontSize="14">0.0 veTENEX</Title>
              <LiquidityTokenWrapper alignitem="flex-start">
                <LockDescriptonTitle fontSize={12}>
                  0.0 veTENEX
                </LockDescriptonTitle>
              </LiquidityTokenWrapper>
            </PairContain>

            <LiquidityTokenWrapper alignitem="flex-start">
              <VoteInput type="number" />

              <PercentageSelectorContainer>
                <PercentageOptions>
                  <PercentageButton
                  // onClick={() => handleSelectPercentage(25)}
                  >
                    25%
                  </PercentageButton>
                  <PercentageButton
                  // onClick={() => handleSelectPercentage(50)}
                  >
                    50%
                  </PercentageButton>
                  <PercentageButton
                  // onClick={() => handleSelectPercentage(75)}
                  >
                    75%
                  </PercentageButton>
                  <PercentageButton
                  // onClick={() => handleSelectPercentage(100)}
                  >
                    MAX
                  </PercentageButton>
                </PercentageOptions>
              </PercentageSelectorContainer>
            </LiquidityTokenWrapper>
          </VotingLockWrapper>
        ))}
      </ScrollContainer>
    </LockTokenContainer>
  );
};

export default VottingPowerModel;
