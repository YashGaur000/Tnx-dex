import TenexIcon from '../../../assets/Tenex.png';
import TableContainer from './TableContainer';
import { GlobalButton } from '../../common';
import { useNavigate } from 'react-router-dom';
import QuestionIcon from '../../../assets/question-mark.png';
import LockData from '../../../constants/LockData.json';
import {
  MetricDisplay,
  MetricDisplayWrapper,
  AsideSectionContains,
  StatsCardtitle,
} from '../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import {
  AmountWithImg,
  ImgIconStyle,
  LockButtonConatainer,
  LockDescriptonTitle,
  LockHeaderTitle,
  LockHeroSection,
  LockHeroSectionContent,
  LockContainerWrapper,
  LockheaderWrapper,
  LockheaderContentStyle,
} from '../Styles/ManageVetenex.style';

import Relay from './Relaymodules/Relay';
import PopupScreen from './PopupScreen';
import LockToolTips from './LockToolTips';
import { useState } from 'react';
import RelayToolTips from './RelayToolTips';

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
                <ImgIconStyle
                  width={'15'}
                  height={'15'}
                  margin={'0px 10px'}
                  src={TenexIcon}
                />
              </AmountWithImg>
            </MetricDisplay>
            <MetricDisplay>
              <StatsCardtitle fontSize={16}>Total Voting power</StatsCardtitle>
              <label>0.00</label>
            </MetricDisplay>
            <MetricDisplay>
              <StatsCardtitle fontSize={16}>Total Value Locked</StatsCardtitle>
              <label>$0.00</label>
            </MetricDisplay>
          </MetricDisplayWrapper>
        </AsideSectionContains>
      </LockHeroSection>

      <LockContainerWrapper>
        <LockheaderWrapper>
          <LockHeaderTitle fontSize={24}>Locks</LockHeaderTitle>
          <span onMouseEnter={() => handleTooltipShow('lock')}>
            <ImgIconStyle
              width={'16px'}
              height={'16px'}
              margin="7px 0px 0px 0px"
              src={QuestionIcon}
            ></ImgIconStyle>
          </span>
        </LockheaderWrapper>

        <TableContainer data={LockData} />
      </LockContainerWrapper>
      <LockContainerWrapper>
        <LockheaderWrapper>
          <LockHeaderTitle fontSize={24}>Relay</LockHeaderTitle>
          <div onMouseEnter={() => handleTooltipShow('relay')}>
            <ImgIconStyle
              width={'16px'}
              height={'16px'}
              margin="7px 0px 0px 0px"
              src={QuestionIcon}
            ></ImgIconStyle>
          </div>
        </LockheaderWrapper>

        <Relay />
      </LockContainerWrapper>

      {isPopupVisible && (
        <PopupScreen isVisible={isPopupVisible} onClose={closeModal}>
          <div onMouseLeave={handleTooltipHide}>
            {isToolTipActive ? <LockToolTips /> : <RelayToolTips />}
          </div>
        </PopupScreen>
      )}
    </>
  );
};

export default Main;
