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
import InformIcon from '../../../assets/Tips.svg';
import Usdt from '../../../assets/usdc.png';
import Ftm from '../../../assets/ftm.png';

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
  SliderLabel,
  SliderStatusWrapper,
  StakeCard,
  StakeMainContainer,
  StakeRangeWrapper,
  StakeTitle,
  TokenAmountWrapper,
} from '../styles/Stake.style';
import {
  LoaderStatus,
  LoaderStyle,
  SliderDeadlineStyle,
} from '../../ManageVeTenex/Styles/CreateLock.style';
import {
  Slider,
  SliderContainer,
} from '../../Swap/styles/TransactionDeadline.style';
import StakeStepper from './StakeStepper';
import { ChangeEvent, useState } from 'react';

const StakeDeposit = () => {
  const [SelectStakeValue, SetSelectStakeValue] = useState<number>(0);

  const HandleStakeSlider = (e: ChangeEvent<HTMLInputElement>) => {
    const StakeValue = e.target.value;
    SetSelectStakeValue(Number(StakeValue));
  };

  const handleCustomSliderValue = (value: number) => {
    SetSelectStakeValue(Number(value));
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
                <IMG1Contains Top={5} Left={0}>
                  <Imgstyle src={Usdt} />
                </IMG1Contains>
                <IMG2Contains Top={5} Left={26}>
                  <Imgstyle src={Ftm} />
                </IMG2Contains>
              </GroupImgContains>

              <TokenDescription>
                <LiquidityHeaderTitle fontSize={20}>
                  {'USDT'}-{'FTM'}
                </LiquidityHeaderTitle>
                <TokenStatus>
                  <StatsCardtitle fontSize={12}>{'Stable'}</StatsCardtitle>
                  <LiquidityTitle fontSize={12}>0.01%</LiquidityTitle>
                  <LiquidityImgStyle
                    width={'17px'}
                    height={'17px'}
                    src={InformIcon}
                  />
                </TokenStatus>
              </TokenDescription>
            </DepositeTokenWithImage>

            <TokenContainer>
              <StatsCardtitle fontSize={16}>APR</StatsCardtitle>
              <LiquidityHeaderTitle fontSize={14}>226.18%</LiquidityHeaderTitle>
            </TokenContainer>
          </DepositeContentWrapper>

          <DepositeContentWrapper>
            <LiquidityStyleContainer>
              <LiquidityHeaderTitle fontSize={16}>
                Liquidity
              </LiquidityHeaderTitle>
              <TokenAmountWrapper>
                <LiquidityTitle fontSize={12}>
                  {'1,003,212.5643 USDT'}
                </LiquidityTitle>
                <LiquidityTitle fontSize={12}>
                  {'2,783,860.003 FTM'}
                </LiquidityTitle>
              </TokenAmountWrapper>
            </LiquidityStyleContainer>

            <DepositeStyle>
              <LiquidityHeaderTitle fontSize={16}>
                Your Deposits
              </LiquidityHeaderTitle>
              <TokenAmountWrapper>
                <LiquidityTitle fontSize={12}>{'0.0 USDT'}</LiquidityTitle>
                <LiquidityTitle fontSize={12}>{'0.0 FTM'}</LiquidityTitle>
              </TokenAmountWrapper>
            </DepositeStyle>
          </DepositeContentWrapper>
          <StakeRangeWrapper>
            <StakeTitle fontSize={16}>Staking 100%</StakeTitle>

            <SliderStatusWrapper>
              <LoaderStatus fontSize={12}>{SelectStakeValue}%</LoaderStatus>
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
              <SliderDeadlineStyle fontSize={10}>
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
          <StakeStepper selectedStakeValue={SelectStakeValue} />
        </StakeCard>
      </StakeMainContainer>
    </MainContainerStyle>
  );
};

export default StakeDeposit;
