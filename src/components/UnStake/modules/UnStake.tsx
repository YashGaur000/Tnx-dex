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

import UsdIcon from '../../../assets/usdc.png';
import FtmIcon from '../../../assets/ftm.png';
import InformationIcon from '../../../assets/Tips.svg';
import UnStakeStepper from './UnStakeStepper';
import { ChangeEvent, useState } from 'react';

const UnStake = () => {
  const [SelectStakeValue, SetSelectStakeValue] = useState<number>(0);

  const handleCustomSliderValue = (value: number) => {
    SetSelectStakeValue(Number(value));
  };
  const HandleStakeSlider = (e: ChangeEvent<HTMLInputElement>) => {
    const StakeValue = e.target.value;
    SetSelectStakeValue(Number(StakeValue));
  };

  const SliderPercentage = [
    { id: '1', value: 0 },
    { id: '2', value: 25 },
    { id: '3', value: 50 },
    { id: '4', value: 75 },
    { id: '5', value: 100 },
  ];
  return (
    <MainContainerStyle>
      <StakeMainContainer>
        <StakeCard>
          <DepositeContentWrapper>
            <DepositeTokenWithImage>
              <GroupImgContains>
                <IMG1Contains top={5} left={0}>
                  <Imgstyle src={UsdIcon} />
                </IMG1Contains>
                <IMG2Contains top={5} left={26}>
                  <Imgstyle src={FtmIcon} />
                </IMG2Contains>
              </GroupImgContains>

              <TokenDescription>
                <LiquidityHeaderTitle fontsize={16}>
                  USDT-FTM
                </LiquidityHeaderTitle>
                <TokenStatus>
                  <StatsCardtitle fontsize={12}>Stable</StatsCardtitle>
                  <LiquidityTitle fontsize={12}>0.01%</LiquidityTitle>
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
                  1,003,212.5643 USDT
                </LiquidityTitle>
                <LiquidityTitle fontsize={12}>2,783,860.003 FTM</LiquidityTitle>
              </TokenAmountWrapper>
            </LiquidityStyleContainer>

            <DepositeStyle>
              <LiquidityHeaderTitle fontsize={16}>
                Your Deposits
              </LiquidityHeaderTitle>
              <TokenAmountWrapper>
                <LiquidityTitle textalign="right" fontsize={12}>
                  0.0 USDT
                </LiquidityTitle>
                <LiquidityTitle textalign="right" fontsize={12}>
                  0.0 FTM
                </LiquidityTitle>
              </TokenAmountWrapper>
            </DepositeStyle>
          </DepositeContentWrapper>
          <StakeRangeWrapper>
            <StakeTitle fontsize={16}>Staking {SelectStakeValue}%</StakeTitle>

            <SliderStatusWrapper>
              <LoaderStatus fontsize={12}>{SelectStakeValue}%</LoaderStatus>
            </SliderStatusWrapper>
            <LoaderStyle>
              <SliderContainer margin="0px">
                <Slider
                  type="range"
                  min="0"
                  max="100"
                  step={1}
                  value={SelectStakeValue}
                  onChange={HandleStakeSlider}
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
          <UnStakeStepper />
        </StakeCard>
      </StakeMainContainer>
    </MainContainerStyle>
  );
};

export default UnStake;
