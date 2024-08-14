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

const Main = () => {
  const Navigate = useNavigate();
  function handleCreateLock() {
    Navigate('/governance/create');
  }

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
            <ImgIconStyle
              src={QuestionIcon}
              width="20"
              height="20"
              margin="3px 0px"
            />
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
          <ImgIconStyle
            width={'18'}
            height={'18'}
            src={QuestionIcon}
          ></ImgIconStyle>
        </LockheaderWrapper>

        <TableContainer data={LockData} />
      </LockContainerWrapper>
      <LockContainerWrapper>
        <LockheaderWrapper>
          <LockHeaderTitle fontSize={24}>Relay</LockHeaderTitle>
          <ImgIconStyle
            width={'18'}
            height={'18'}
            src={QuestionIcon}
          ></ImgIconStyle>
        </LockheaderWrapper>

        <Relay />
      </LockContainerWrapper>
    </>
  );
};

export default Main;
