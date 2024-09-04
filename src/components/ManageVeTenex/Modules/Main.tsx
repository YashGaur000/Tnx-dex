import TenexIcon from '../../../assets/Tenex.png';

import { GlobalButton } from '../../common';
import { useNavigate } from 'react-router-dom';
import QuestionIcon from '../../../assets/question-mark.png';

import {
  MetricDisplay,
  MetricDisplayWrapper,
  AsideSectionContains,
  StatsCardtitle,
  PopupWrapper,
} from '../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import {
  AmountWithImg,
  ImageContainer,
  LockButtonConatainer,
  LockDescriptonTitle,
  LockHeaderTitle,
  LockHeroSection,
  LockHeroSectionContent,
  LockContainerWrapper,
  LockheaderWrapper,
  LockheaderContentStyle,
  ToolTipsWrapper,
} from '../Styles/ManageVetenex.style';

import Relay from './Relaymodules/Relay';
import PopupScreen from '../../common/PopupScreen';
import LockToolTips from './LockToolTips';
import { useState } from 'react';
import RelayToolTips from './RelayToolTips';
import VeTenexTable from './VeTenexTable';

const Main = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isToolTipActive, setToolTipActive] = useState(false);
  const Navigate = useNavigate();
  function handleCreateLock() {
    Navigate('/governance/create');
  }

  function handleTooltipShow(option: string) {
    if (option === 'lock') {
      setToolTipActive(true);
    } else {
      setToolTipActive(false);
    }

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
      <LockHeroSection>
        <LockHeroSectionContent>
          <LockHeaderTitle fontSize={36}>Manage veTENEX</LockHeaderTitle>
          <LockheaderContentStyle>
            <LockDescriptonTitle fontSize={16}>
              Maximize your voting power and boost rewards by locking more
              tokens for longer durations.
            </LockDescriptonTitle>
          </LockheaderContentStyle>
        </LockHeroSectionContent>

        <AsideSectionContains>
          <LockButtonConatainer>
            <GlobalButton
              width="150px"
              height="40px"
              margin="0px"
              onClick={handleCreateLock}
            >
              Create Lock
            </GlobalButton>
          </LockButtonConatainer>
          <MetricDisplayWrapper>
            <MetricDisplay>
              <StatsCardtitle fontSize={16}>Locked TENEX</StatsCardtitle>
              <AmountWithImg>
                4,376,987.82{' '}
                <ImageContainer
                  width={'15'}
                  height={'15'}
                  margin={'0px 10px'}
                  src={TenexIcon}
                />
              </AmountWithImg>
            </MetricDisplay>
            <MetricDisplay>
              <StatsCardtitle fontSize={16}>Total Voting power</StatsCardtitle>
              <LockHeaderTitle fontSize={16}>0.00</LockHeaderTitle>
            </MetricDisplay>
            <MetricDisplay>
              <StatsCardtitle fontSize={16}>Total Value Locked</StatsCardtitle>
              <LockHeaderTitle fontSize={16}>$0.00</LockHeaderTitle>
            </MetricDisplay>
          </MetricDisplayWrapper>
        </AsideSectionContains>
      </LockHeroSection>

      <LockContainerWrapper>
        <LockheaderWrapper>
          <LockHeaderTitle fontSize={24}>Locks</LockHeaderTitle>
          <ToolTipsWrapper onMouseEnter={() => handleTooltipShow('lock')}>
            <ImageContainer
              width={'16px'}
              height={'16px'}
              margin="7px 0px 0px 0px"
              src={QuestionIcon}
            ></ImageContainer>
          </ToolTipsWrapper>
        </LockheaderWrapper>

        <VeTenexTable />
      </LockContainerWrapper>
      <LockContainerWrapper>
        <LockheaderWrapper>
          <LockHeaderTitle fontSize={24}>Relay</LockHeaderTitle>
          <ToolTipsWrapper onMouseEnter={() => handleTooltipShow('relay')}>
            <ImageContainer
              width={'16px'}
              height={'16px'}
              margin="7px 0px 0px 0px"
              src={QuestionIcon}
            ></ImageContainer>
          </ToolTipsWrapper>
        </LockheaderWrapper>

        <Relay />
      </LockContainerWrapper>

      {isPopupVisible && (
        <PopupScreen isVisible={isPopupVisible} onClose={closeModal}>
          <PopupWrapper onMouseLeave={handleTooltipHide}>
            {isToolTipActive ? <LockToolTips /> : <RelayToolTips />}
          </PopupWrapper>
        </PopupScreen>
      )}
    </>
  );
};

export default Main;
