import {
  ClaimContainer,
  ClaimLink,
  ClaimMainContainer,
} from '../styles/ClaimAllModle.styled';
import {
  LockContainer,
  LockData,
  LockHeading,
  Paragraph,
} from '../styles/DashBoardLocks.styled';
import { CardLogo } from '../styles/DepositAndStake.styled';
import tenxLogo from '../../../../assets/Tenex.png';
import icon from '../../../../assets/unlock.svg';
import { DashboardNavigation } from '../styles/DashBoard.styled';

const ClaimAllModle = () => {
  return (
    <ClaimMainContainer>
      <ClaimContainer>
        <LockHeading>Your Locks</LockHeading>
        <LockContainer>
          <CardLogo>
            <img src={tenxLogo} alt="" />
          </CardLogo>
          <LockData>
            <LockHeading>
              Lock #7242 <img src={icon} />
            </LockHeading>
            <ClaimLink>
              <Paragraph>50.0 TENEX locked for 11 hours</Paragraph>
              <DashboardNavigation width="115px">
                Claim Incentives
              </DashboardNavigation>
              <DashboardNavigation width="77px">Claim Fees</DashboardNavigation>
            </ClaimLink>
          </LockData>
        </LockContainer>

        <LockContainer>
          <CardLogo>
            <img src={tenxLogo} alt="" />
          </CardLogo>
          <LockData>
            <LockHeading>
              Lock #7242 <img src={icon} />
            </LockHeading>
            <ClaimLink>
              <Paragraph>50.0 TENEX locked for 11 hours</Paragraph>
              <DashboardNavigation width="115px">
                Claim Incentives
              </DashboardNavigation>
              <DashboardNavigation width="77px">Claim Fees</DashboardNavigation>
            </ClaimLink>
          </LockData>
        </LockContainer>
      </ClaimContainer>
    </ClaimMainContainer>
  );
};

export default ClaimAllModle;
