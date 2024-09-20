import {
  DashBoardParagraph,
  DepositeStakedData,
  DepositeStakedHeading,
  DepositMainContainer,
  PoolContainer,
  PoolContainerData,
  Stable,
  StakedContainer,
  TotalPoolData,
  UnstackedContainer,
  UnstackedData,
  UnstackedData1,
  UnstackedHeading,
  USDTData,
  USDTHeading,
  WalletContainer,
} from '../styles/DepositAndStake.styled';
import { DashboardNavigation } from '../styles/DashBoard.styled';
import { ImageContainer } from '../../../ManageVeTenex/Styles/ManageVetenex.style';
import InformationIcon from '../../../../assets/Tips.svg';
import { UnderLineStyle } from '../../../ManageVeTenex/Styles/Relay.style';
import USdtIcon from '../../../../assets/usdt.png';
import BtcIcon from '../../../../assets/Btc.svg';
import {
  GroupImgContains,
  IMG1Contains,
  IMG2Contains,
  Imgstyle,
} from '../../../Liquidity/LiquidityHomePage/styles/LiquidityTable.style';

const DepositAndStake: React.FC = () => {
  return (
    <DepositMainContainer>
      <PoolContainer>
        <PoolContainerData>
          <GroupImgContains>
            <IMG1Contains top={5} left={0}>
              <Imgstyle src={USdtIcon} />
            </IMG1Contains>
            <IMG2Contains top={5} left={26}>
              <Imgstyle src={BtcIcon} />
            </IMG2Contains>
          </GroupImgContains>
          <TotalPoolData>
            <DashBoardParagraph>Pool Total</DashBoardParagraph>
            <DashBoardParagraph>2,094,854.24 USDT</DashBoardParagraph>
            <DashBoardParagraph>94.45 BTC</DashBoardParagraph>
          </TotalPoolData>
        </PoolContainerData>
        <PoolContainerData>
          <USDTHeading>USDT-BTC</USDTHeading>
          <USDTData>
            <Stable>Stable</Stable>
            <DashBoardParagraph>0.01%</DashBoardParagraph>
            <DashBoardParagraph>
              <ImageContainer
                width="16px"
                height="18px"
                src={InformationIcon}
              />
            </DashBoardParagraph>
          </USDTData>
        </PoolContainerData>
      </PoolContainer>
      <UnstackedContainer>
        <UnstackedHeading>Unstaked</UnstackedHeading>
        <UnstackedData>
          <DashBoardParagraph>4.9999 USDT</DashBoardParagraph>
          <DashBoardParagraph>0.003 BTC</DashBoardParagraph>
        </UnstackedData>
        <UnstackedData1>
          <UnderLineStyle>Withdraw</UnderLineStyle>
          <DashboardNavigation>Stake</DashboardNavigation>
        </UnstackedData1>
      </UnstackedContainer>
      <StakedContainer>
        <DepositeStakedHeading>
          <DashBoardParagraph>Staked</DashBoardParagraph>
        </DepositeStakedHeading>
        <DepositeStakedData>
          <DashBoardParagraph>0.00 USDT</DashBoardParagraph>
          <DashBoardParagraph>0.00 BTC</DashBoardParagraph>
        </DepositeStakedData>
      </StakedContainer>
      <WalletContainer>
        <DepositeStakedHeading>In Wallet</DepositeStakedHeading>
        <DepositeStakedData>
          <DashBoardParagraph>57498.254 USDT</DashBoardParagraph>
          <DashBoardParagraph>3.87 BTC</DashBoardParagraph>
        </DepositeStakedData>
        <DashboardNavigation>Deposit</DashboardNavigation>
      </WalletContainer>
    </DepositMainContainer>
  );
};

export default DepositAndStake;
