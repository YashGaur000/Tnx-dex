import { GradientButton } from '../../../common';
import { StatsCardtitle } from '../../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import {
  ImgIconStyle,
  LockDescriptonTitle,
  LockHeaderTitle,
} from '../../Styles/ManageVetenex.style';
import {
  RelayCardDataContains,
  RelayCardSection,
  RelaycardWrapper,
  RelayCardsection2,
  RelayIdStatus,
} from '../../Styles/Relay.style';
import CopyIcon from '../../../../assets/copy.svg';
import { useNavigate } from 'react-router-dom';

const RelayCard = () => {
  const Navigate = useNavigate();

  const handleDepositeLock = () => {
    Navigate('/governance/relay/create');
  };
  return (
    <RelaycardWrapper>
      <RelayCardSection>
        <RelayCardDataContains>
          <LockHeaderTitle fontSize={16}>veTENEX</LockHeaderTitle>
          <RelayIdStatus>ID 2342</RelayIdStatus>
        </RelayCardDataContains>
        <RelayCardDataContains>
          {' '}
          <LockDescriptonTitle fontSize={12}>
            Updated 3 hours ago
          </LockDescriptonTitle>{' '}
          <LockDescriptonTitle fontSize={12}>
            0x2341...35287
          </LockDescriptonTitle>
          <ImgIconStyle width="15px" height="15px" src={CopyIcon} />
        </RelayCardDataContains>
        <RelayCardDataContains>
          <StatsCardtitle fontSize={12}>Voting Power</StatsCardtitle>{' '}
          <LockDescriptonTitle fontSize={12}>
            {' '}
            7,428,176,4 ~ 7.9545%
          </LockDescriptonTitle>
        </RelayCardDataContains>
      </RelayCardSection>
      <RelayCardSection>
        <RelayCardsection2>
          <div onClick={handleDepositeLock}>
            <GradientButton
              borderRadius="6px"
              color="#ffffff"
              padding="0px 10px 30px"
              border="1px solid transparent"
              fontSize="12"
              width="86"
              height="22px"
            >
              Deposit Lock
            </GradientButton>
          </div>
          <RelayCardDataContains>
            <RelayCardDataContains>
              <StatsCardtitle fontSize={12}>Rewards</StatsCardtitle>
              <LockHeaderTitle fontSize={12}>TENEX</LockHeaderTitle>
            </RelayCardDataContains>
            <RelayCardDataContains>
              <StatsCardtitle fontSize={10}>APR</StatsCardtitle>
              <LockHeaderTitle fontSize={12}>18.32%</LockHeaderTitle>
            </RelayCardDataContains>
          </RelayCardDataContains>
        </RelayCardsection2>
      </RelayCardSection>
    </RelaycardWrapper>
  );
};

export default RelayCard;
