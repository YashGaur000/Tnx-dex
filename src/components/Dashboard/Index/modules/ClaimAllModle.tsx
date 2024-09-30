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

const locksData = [
  {
    id: 7242,
    amount: 50.0,
    duration: '11 hours',
    logo: tenxLogo,
    icon: icon,
  },
  {
    id: 7243,
    amount: 75.0,
    duration: '5 hours',
    logo: tenxLogo,
    icon: icon,
  },
];

const ClaimAllModle = () => {
  return (
    <ClaimMainContainer>
      <ClaimContainer>
        <LockHeading>Your Locks</LockHeading>
        {locksData.map((lock) => (
          <LockContainer key={lock.id}>
            <CardLogo>
              <img src={tenxLogo} alt="" />
            </CardLogo>
            <LockData>
              <LockHeading>
                Lock #{lock.id} <img src={lock.icon} />
              </LockHeading>
              <ClaimLink>
                <Paragraph>
                  {lock.amount} TENEX locked for {lock.duration}
                </Paragraph>
                <DashboardNavigation width="115px">
                  Claim Incentives
                </DashboardNavigation>
                <DashboardNavigation width="77px">
                  Claim Fees
                </DashboardNavigation>
              </ClaimLink>
            </LockData>
          </LockContainer>
        ))}
      </ClaimContainer>
    </ClaimMainContainer>
  );
};

export default ClaimAllModle;
