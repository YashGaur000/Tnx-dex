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
} from '../styles/LiquidityHeroSection.style';
import PopupScreen from '../../../ManageVeTenex/Modules/PopupScreen';
import LiquidityToolTips from './LiquidityToolTips';

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
          <div>
            <LiquidityDespcriptionWrap>
              <LiquidityTitle fontSize={16}>
                Liquidity Providers (LPs) make low-slippage swaps possible.
                <span onMouseEnter={handleTooltipShow}>
                  <InformImageStye src={QuestionIcon} />
                </span>
              </LiquidityTitle>
              <LiquidityTitle fontSize={16}>
                Deposit and Stake liquidity to earn TENEX
              </LiquidityTitle>
            </LiquidityDespcriptionWrap>
          </div>
          <LiquidityTitle fontSize={12}>
            There are currently 100 tokens listed. <u>See all tokens</u> or{' '}
            <u>request a new token listing.</u>
          </LiquidityTitle>
        </LiquidityHeroSectionContent>
        <AsideSectionContains>
          <CreateLiquidityButtonWrapper>
            <GlobalButton
              width="130px"
              height="40px"
              onClick={handleCreatePool}
            >
              Create Pool
            </GlobalButton>
          </CreateLiquidityButtonWrapper>
          <MetricDisplayWrapper>
            <MetricDisplay>
              <StatsCardtitle fontSize={16}>TVL</StatsCardtitle>
              <label>$1,547,658,000.28</label>
            </MetricDisplay>
            <MetricDisplay>
              <StatsCardtitle fontSize={16}>Fees</StatsCardtitle>
              <label>$1,547,658,000.28</label>
            </MetricDisplay>
            <MetricDisplay>
              <StatsCardtitle fontSize={16}>24H Volume</StatsCardtitle>
              <label>$1,547,658,000.28</label>
            </MetricDisplay>
          </MetricDisplayWrapper>
        </AsideSectionContains>
      </LiquidityHeroSectionMain>

      {isPopupVisible && (
        <PopupScreen isVisible={isPopupVisible} onClose={closeModal}>
          <div onMouseLeave={handleTooltipHide}>
            <LiquidityToolTips />
          </div>
        </PopupScreen>
      )}
    </>
  );
};

export default LiquidityHeroSection;
