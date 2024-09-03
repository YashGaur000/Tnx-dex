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
import PopupScreen from '../../../ManageVeTenex/Modules/PopupScreen';
import LiquidityToolTips from './LiquidityToolTips';
import { TitleWrapper } from '../styles/LiquidityTable.style';

const LiquidityHeroSection = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

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

              <InformImageStye
                src={QuestionIcon}
                onMouseEnter={handleTooltipShow}
              />
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
              <TitleWrapper fontSize={'16px'}>$1,547,658,000.28</TitleWrapper>
            </MetricDisplay>
            <MetricDisplay>
              <StatsCardtitle fontSize={16}>Fees</StatsCardtitle>
              <TitleWrapper fontSize={'16px'}>$1,547,658,000.28</TitleWrapper>
            </MetricDisplay>
            <MetricDisplay>
              <StatsCardtitle fontSize={16}>24H Volume</StatsCardtitle>
              <TitleWrapper fontSize={'16px'}>$1,547,658,000.28</TitleWrapper>
            </MetricDisplay>
          </MetricDisplayWrapper>
        </AsideSectionContains>
      </LiquidityHeroSectionMain>

      {isPopupVisible && (
        <PopupScreen isVisible={isPopupVisible} onClose={closeModal}>
          <PopupWrapper onMouseLeave={handleTooltipHide}>
            <LiquidityToolTips />
          </PopupWrapper>
        </PopupScreen>
      )}
    </>
  );
};

export default LiquidityHeroSection;
