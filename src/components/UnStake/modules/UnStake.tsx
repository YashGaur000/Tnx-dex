import { MainContainerStyle } from '../../common/MainContainerStyle';
import {
  LiquidityImgStyle,
  LiquidityTitle,
  StatsCardtitle,
} from '../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import { LiquidityHeaderTitle } from '../../Liquidity/LiquidityHomePage/styles/Liquiditypool.style';
import {
  GroupImgContains,
  IMG1Contains,
  IMG2Contains,
  Imgstyle,
} from '../../Liquidity/LiquidityHomePage/styles/LiquidityTable.style';
import {
  DepositeContentWrapper,
  DepositeStyle,
  DepositeTokenWithImage,
  LiquidityStyleContainer,
  TokenContainer,
  TokenDescription,
  TokenStatus,
} from '../../Liquidity/ManageLiquidity/styles/TokenDeposite.style';
import {
  LoaderStatus,
  LoaderStyle,
  SliderDeadlineStyle,
} from '../../ManageVeTenex/Styles/CreateLock.style';
import {
  SliderLabel,
  SliderStatusWrapper,
  StakeCard,
  StakeMainContainer,
  StakeRangeWrapper,
  StakeTitle,
  TokenAmountWrapper,
} from '../../StakeDeposit/styles/Stake.style';
import {
  SliderContainer,
  Slider,
} from '../../Swap/styles/TransactionDeadline.style';

import InformationIcon from '../../../assets/Tips.svg';
import UnStakeStepper from './UnStakeStepper';
import { ChangeEvent, useEffect, useState } from 'react';
import useQueryParams from '../../../hooks/useQueryParams';
import { useUserPosition } from '../../../hooks/useUserPosition';
import { useAccount } from '../../../hooks/useAccount';
import { UserPosition } from '../../../types/Pool';
import { getTokenLogo } from '../../../utils/getTokenLogo';

const UnStake = () => {
  const [unstakedPool, setUnstakedPool] = useState<UserPosition | undefined>(
    undefined
  );

  const [selectUnsatkeValue, setSelectedUnstakeValue] = useState<number>(0);

  const getParam = useQueryParams();
  const poolId = getParam('pool');

  const { address } = useAccount();

  const { userPools } = useUserPosition(address!);

  useEffect(() => {
    if (userPools) {
      const pool = userPools.find((pool) => pool.lp === poolId);
      setUnstakedPool(pool);
    }
  }, [poolId, userPools]);

  const handleCustomSliderValue = (value: number) => {
    setSelectedUnstakeValue(Number(value));
  };
  const handleUnstakeSlider = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedUnstakeValue(Number(value));
  };

  const SliderPercentage = [
    { id: '1', value: 0 },
    { id: '2', value: 25 },
    { id: '3', value: 50 },
    { id: '4', value: 75 },
    { id: '5', value: 100 },
  ];

  if (!unstakedPool) return <p>Error Fetching ....</p>;

  return (
    <MainContainerStyle>
      <StakeMainContainer>
        <StakeCard>
          <DepositeContentWrapper>
            <DepositeTokenWithImage>
              <GroupImgContains>
                <IMG1Contains top={5} left={0}>
                  <Imgstyle
                    src={
                      unstakedPool?.token0.symbol &&
                      getTokenLogo(unstakedPool?.token0.symbol)
                    }
                  />
                </IMG1Contains>
                <IMG2Contains top={5} left={26}>
                  <Imgstyle
                    src={
                      unstakedPool?.token1.symbol &&
                      getTokenLogo(unstakedPool?.token1.symbol)
                    }
                  />
                </IMG2Contains>
              </GroupImgContains>

              <TokenDescription>
                <LiquidityHeaderTitle fontsize={16}>
                  {unstakedPool.token0.symbol}-{unstakedPool.token1.symbol}
                </LiquidityHeaderTitle>
                <TokenStatus>
                  <StatsCardtitle fontsize={12}>
                    {unstakedPool.isStable ? 'Stable' : 'Volatile'}
                  </StatsCardtitle>
                  <LiquidityTitle fontsize={12}>
                    {unstakedPool.isStable ? '0.05' : '0.3'} %
                  </LiquidityTitle>
                  <LiquidityImgStyle
                    width={'17px'}
                    height={'17px'}
                    src={InformationIcon}
                  />
                </TokenStatus>
              </TokenDescription>
            </DepositeTokenWithImage>

            <TokenContainer>
              <StatsCardtitle fontsize={16}>APR</StatsCardtitle>
              <LiquidityHeaderTitle fontsize={14}>226.18%</LiquidityHeaderTitle>
            </TokenContainer>
          </DepositeContentWrapper>

          <DepositeContentWrapper>
            <LiquidityStyleContainer>
              <LiquidityHeaderTitle fontsize={16}>
                Liquidity
              </LiquidityHeaderTitle>
              <TokenAmountWrapper>
                <LiquidityTitle fontsize={12}>
                  {unstakedPool.reserve0} {unstakedPool?.token0.symbol}
                </LiquidityTitle>
                <LiquidityTitle fontsize={12}>
                  {unstakedPool.reserve1} {unstakedPool?.token1.symbol}
                </LiquidityTitle>
              </TokenAmountWrapper>
            </LiquidityStyleContainer>

            <DepositeStyle>
              <LiquidityHeaderTitle fontsize={16}>
                Your Deposits
              </LiquidityHeaderTitle>
              <TokenAmountWrapper>
                <LiquidityTitle textalign="right" fontsize={12}>
                  {unstakedPool.accountStaked0} {unstakedPool?.token0.symbol}
                </LiquidityTitle>
                <LiquidityTitle textalign="right" fontsize={12}>
                  {unstakedPool.accountStaked1} {unstakedPool?.token0.symbol}
                </LiquidityTitle>
              </TokenAmountWrapper>
            </DepositeStyle>
          </DepositeContentWrapper>
          <StakeRangeWrapper>
            <StakeTitle fontsize={16}>
              Unstaking {selectUnsatkeValue}%
            </StakeTitle>

            <SliderStatusWrapper>
              <LoaderStatus fontsize={12}>{selectUnsatkeValue}%</LoaderStatus>
            </SliderStatusWrapper>
            <LoaderStyle>
              <SliderContainer margin="0px">
                <Slider
                  type="range"
                  min="0"
                  max="100"
                  step={1}
                  value={selectUnsatkeValue}
                  onChange={handleUnstakeSlider}
                />
              </SliderContainer>
              <SliderDeadlineStyle fontsize={10}>
                {SliderPercentage.map(({ value, id }) => (
                  <SliderLabel
                    key={id}
                    onClick={() => handleCustomSliderValue(value)}
                  >
                    {value}%
                  </SliderLabel>
                ))}
              </SliderDeadlineStyle>
            </LoaderStyle>
          </StakeRangeWrapper>
        </StakeCard>

        <StakeCard width="40%">
          <UnStakeStepper
            selectUnsatkeValue={selectUnsatkeValue}
            gauge={unstakedPool.gauge}
            gaugeBalance={unstakedPool.gaugeBalance}
            lp={unstakedPool.lp}
          />
        </StakeCard>
      </StakeMainContainer>
    </MainContainerStyle>
  );
};

export default UnStake;
