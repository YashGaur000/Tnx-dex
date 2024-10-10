import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionIcon from '../../../../assets/questionMark.png';
import { GlobalButton } from '../../../common';
import {
  AsideSectionContains,
  LiquidityDespcriptionWrap,
  MetricDisplay,
  LiquidityTitle,
  CreateLiquidityButtonWrapper,
  LiquidityHeroSectionContent,
  LiquidityHeroSectionMain,
  MetricDisplayWrapper,
  StatsCardtitle,
  InformImageStye,
  TitleUnderLine,
  PopupWrapper,
  TitleWithImgWrapper,
} from '../styles/LiquidityHeroSection.style';
import PopupScreen from '../../../common/PopupScreen';
import LiquidityToolTips from './LiquidityToolTips';
import { TitleWrapper } from '../styles/LiquidityTable.style';
import { useLiquidityStore } from '../../../../store/slices/liquiditySlice';

const LiquidityHeroSection = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const { totalTVL, totalFees, totalVolume } = useLiquidityStore();

  const navigate = useNavigate();

  function handleCreatePool() {
    navigate('/liquidity/create');
  }

  function handleTooltipShow() {
    setPopupVisible(true);
  }

  function handleTooltipHide() {
    setPopupVisible(false);
  }

  const closeModal = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <LiquidityHeroSectionMain>
        <LiquidityHeroSectionContent>
          <LiquidityDespcriptionWrap>
            <TitleWithImgWrapper>
              <LiquidityTitle fontSize={16}>
                Liquidity Providers (LPs) make low-slippage swaps possible.
              </LiquidityTitle>

              <InformImageStye src={QuestionIcon} onClick={handleTooltipShow} />
            </TitleWithImgWrapper>

            <LiquidityTitle fontSize={16}>
              Deposit and Stake liquidity to earn TENEX
            </LiquidityTitle>
          </LiquidityDespcriptionWrap>

          <LiquidityTitle fontSize={12}>
            There are currently 100 tokens listed.{' '}
            <TitleUnderLine>See all tokens</TitleUnderLine> or{' '}
            <TitleUnderLine>request a new token listing.</TitleUnderLine>
          </LiquidityTitle>
        </LiquidityHeroSectionContent>
        <AsideSectionContains>
          <CreateLiquidityButtonWrapper>
            <GlobalButton
              width="155px"
              height="40px"
              margin="0px"
              onClick={handleCreatePool}
            >
              Create Pool
            </GlobalButton>
          </CreateLiquidityButtonWrapper>
          <MetricDisplayWrapper>
            <MetricDisplay>
              <StatsCardtitle fontSize={16}>TVL</StatsCardtitle>
              <TitleWrapper fontSize={'16px'}>${totalTVL}</TitleWrapper>
            </MetricDisplay>
            <MetricDisplay>
              <StatsCardtitle fontSize={16}>Weekly Fees</StatsCardtitle>
              <TitleWrapper fontSize={'16px'}>${totalFees}</TitleWrapper>
            </MetricDisplay>
            <MetricDisplay>
              <StatsCardtitle fontSize={16}>Weekly Volume</StatsCardtitle>
              <TitleWrapper fontSize={'16px'}>${totalVolume}</TitleWrapper>
            </MetricDisplay>
          </MetricDisplayWrapper>
        </AsideSectionContains>
      </LiquidityHeroSectionMain>

      {isPopupVisible && (
        <PopupScreen
          isvisible={isPopupVisible}
          onClose={closeModal}
          width="500px"
          height="518px"
        >
          <PopupWrapper onMouseLeave={handleTooltipHide}>
            <LiquidityToolTips />
          </PopupWrapper>
        </PopupScreen>
      )}
    </>
  );
};

export default LiquidityHeroSection;
