import InformationIcon from '../../../../assets/Tips.svg';
import { ImageContainer } from '../../../ManageVeTenex/Styles/ManageVetenex.style';
import {
  DashBoardParagraph,
  DepositeStakedData,
  DepositeStakedHeading,
  PoolContainer,
  PoolContainerData,
  Stable,
  StakedContainer,
  USDTData,
  USDTHeading,
} from '../styles/DepositAndStake.styled';
import { LiquityMainContainer } from '../styles/LiquidityRewards.styled';
import USdtIcon from '../../../../assets/usdt.png';
import BtcIcon from '../../../../assets/Btc.svg';
import {
  GroupImgContains,
  IMG1Contains,
  IMG2Contains,
  Imgstyle,
} from '../../../Liquidity/LiquidityHomePage/styles/LiquidityTable.style';
const LiquidityRewards = () => {
  return (
    <LiquityMainContainer>
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

      <StakedContainer>
        <DepositeStakedHeading>Emissions APR</DepositeStakedHeading>
        <DepositeStakedData>40.43%</DepositeStakedData>
      </StakedContainer>

      <StakedContainer>
        <DepositeStakedHeading>Emissions </DepositeStakedHeading>
        <DepositeStakedData>0.00 USDT</DepositeStakedData>
      </StakedContainer>

      <StakedContainer>
        <DepositeStakedHeading>Trading fees</DepositeStakedHeading>
        <DepositeStakedData>
          <DashBoardParagraph>2,428.64 USDT</DashBoardParagraph>
          <DashBoardParagraph>0.3 BTC</DashBoardParagraph>
        </DepositeStakedData>
      </StakedContainer>
      <Stable>
        <DashBoardParagraph>Claim</DashBoardParagraph>
      </Stable>
    </LiquityMainContainer>
  );
};

export default LiquidityRewards;
