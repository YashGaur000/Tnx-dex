import QuestionIcon from '../../../../assets/questionMark.png';
import { GlobalButton } from '../../../common';
import { useNavigate } from 'react-router-dom';
import {
  LiquidityAsideSection,
  LiquidityDespcriptionWrap,
  LiquidityMetricDisplay,
  LiquidityTitle,
  CreateLiquidityButtonWrapper,
  LiquidityHeroSectionContent,
  LiquidityHeroSectionMain,
  LiquiditymetricDisplayWrapper,
  StatsCardtitle,
  InformImageStye,
} from '../styles/LiquidityHeroSection.style';
import { useState } from 'react';
import PopupScreen from '../../../ManageVeTenex/Modules/PopupScreen';
import LiquidityToolTips from './LiquidityToolTips';
const LiquidityHeroSection = () => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const Navigate = useNavigate();

  function handleCreatePool() {
    Navigate('/liquidity/create');
  }

  function handleTooolTipShow() {
    setPopUpVisible(true);
  }

  const closeModal = () => {
    setPopUpVisible(false);
  };
  return (
    <>
      <LiquidityHeroSectionMain>
        <LiquidityHeroSectionContent>
          <div>
            <LiquidityDespcriptionWrap>
              <LiquidityTitle fontSize={16}>
                Liquidity Providers (LPs) make low-slippage swaps possible.
                <span onMouseEnter={handleTooolTipShow}>
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
        <LiquidityAsideSection>
          <CreateLiquidityButtonWrapper>
            <GlobalButton
              width="130px"
              height="40px"
              onClick={handleCreatePool}
            >
              Create Pool
            </GlobalButton>
          </CreateLiquidityButtonWrapper>
          <LiquiditymetricDisplayWrapper>
            <LiquidityMetricDisplay>
              <StatsCardtitle fontSize={16}>TVL</StatsCardtitle>
              <label>$1,547,658,000.28</label>
            </LiquidityMetricDisplay>
            <LiquidityMetricDisplay>
              <StatsCardtitle fontSize={16}>Fees</StatsCardtitle>
              <label>$1,547,658,000.28</label>
            </LiquidityMetricDisplay>
            <LiquidityMetricDisplay>
              <StatsCardtitle fontSize={16}>24H Volume</StatsCardtitle>
              <label>$1,547,658,000.28</label>
            </LiquidityMetricDisplay>
          </LiquiditymetricDisplayWrapper>
        </LiquidityAsideSection>
      </LiquidityHeroSectionMain>

      <PopupScreen isVisible={isPopUpVisible} onClose={closeModal}>
        {<LiquidityToolTips />}
      </PopupScreen>
    </>
  );
};

export default LiquidityHeroSection;
