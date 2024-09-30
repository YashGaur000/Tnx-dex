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
import {
  VotingRewardsdata,
  VotingRewardsMainContainer,
} from '../styles/VotingRewards.styled';
import logo from '../../../../assets/USDT-BTC.svg';
import { DashboardNavigation } from '../styles/DashBoard.styled';
import Image from '../../../../assets/Tips.svg';
import token1 from '../../../../assets/USDC.svg';
import token2 from '../../../../assets/Btc.svg';
import token3 from '../../../../assets/sol.svg';
import token4 from '../../../../assets/FTM.svg';
import { GradientButton } from '../../../common';
const VotingRewards = () => {
  return (
    <VotingRewardsMainContainer height="auto">
      <PoolContainer>
        <PoolContainerData>
          <img src={logo} alt="" />
        </PoolContainerData>
        <PoolContainerData>
          <USDTHeading>USDT-BTC</USDTHeading>
          <USDTData>
            <Stable>Stable</Stable>
            <DashBoardParagraph>0.01%</DashBoardParagraph>
            <DashBoardParagraph>
              <img src={Image} alt="" />
            </DashBoardParagraph>
          </USDTData>
        </PoolContainerData>
      </PoolContainer>
      <StakedContainer>
        <DepositeStakedHeading>Lock #6742</DepositeStakedHeading>
        <DepositeStakedData>30.0 TENEX Locked</DepositeStakedData>
      </StakedContainer>
      <StakedContainer>
        <DepositeStakedHeading>Rewards</DepositeStakedHeading>
        <DepositeStakedData>
          <VotingRewardsdata>
            <DashBoardParagraph>
              <img src={token1} alt="" />
            </DashBoardParagraph>
            <DashBoardParagraph>2,428.64 USDT</DashBoardParagraph>
            <GradientButton
              width="27px"
              height="18px"
              color="#ffffff"
              fontsize="12px"
              padding=" 0px 4px"
              lineheight="17.94px"
              border="1.5px solid transparent"
              borderradius="4px"
              smfontsize={12}
              smmargin="0px"
            >
              Fee
            </GradientButton>
          </VotingRewardsdata>
          <VotingRewardsdata>
            <DashBoardParagraph>
              <img src={token2} alt="" />
            </DashBoardParagraph>
            <DashBoardParagraph>0.3 BTC</DashBoardParagraph>
            <GradientButton
              width="27px"
              height="18px"
              color="#ffffff"
              fontsize="12px"
              padding=" 0px 4px"
              lineheight="17.94px"
              border="1.5px solid transparent"
              borderradius="4px"
              smfontsize={12}
              smmargin="0px"
            >
              Fee
            </GradientButton>
          </VotingRewardsdata>

          <VotingRewardsdata>
            <DashBoardParagraph>
              <img src={token3} alt="" />
            </DashBoardParagraph>
            <DashBoardParagraph>1.5 SOL</DashBoardParagraph>
            <GradientButton
              width="56px"
              height="18px"
              color="#ffffff"
              fontsize="12px"
              padding=" 0px 4px"
              lineheight="17.94px"
              border="1.5px solid transparent"
              borderradius="4px"
              smfontsize={12}
              smmargin="0px"
            >
              Incentive
            </GradientButton>
          </VotingRewardsdata>

          <VotingRewardsdata>
            <DashBoardParagraph>
              <img src={token4} alt="" />
            </DashBoardParagraph>
            <DashBoardParagraph>2.82 FTM</DashBoardParagraph>
            <GradientButton
              width="56px"
              height="20px"
              color="#ffffff"
              fontsize="12px"
              padding=" 0px 4px"
              lineheight="0px"
              border="1.5px solid transparent"
              borderradius="4px"
              smfontsize={12}
              smmargin="0px"
            >
              Incentive
            </GradientButton>
          </VotingRewardsdata>

          <DashboardNavigation fontsize={16}>Claim</DashboardNavigation>
        </DepositeStakedData>
      </StakedContainer>
    </VotingRewardsMainContainer>
  );
};

export default VotingRewards;
