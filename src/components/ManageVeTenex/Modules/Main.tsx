import TenexIcon from '../../../assets/Tenex.png';
import TableContainer from './TableContainer';
import { GlobalButton } from '../../common';
import { useNavigate } from 'react-router-dom';
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
} from '../Styles/ManageVetenex.style';

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
          <LockDescriptonTitle fontSize={16}>
            Lock your tokens for veTENEX and recieive voting power
          </LockDescriptonTitle>
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
                <ImgIconStyle width={'15'} height={'15'} src={TenexIcon} />
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

      <TableContainer data={LockData} />
    </>
  );
};

export default Main;
