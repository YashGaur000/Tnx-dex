import { useNavigate } from 'react-router-dom';
import tenxLogo from '../../../assets/Tenex.png';
import { DashboardNavigation } from '../styles/DashBoard.styled';
import {
  DashBoardLockMainContainer,
  LockContainer,
  LockData,
  LockHeading,
  LockStyleText,
  Paragraph,
} from '../styles/DashBoardLocks.styled';
import {
  CardLogo,
  DepositeStakedData,
  DepositeStakedHeading,
  StakedContainer,
} from '../styles/DepositAndStake.styled';

const DashBoardLocks = () => {
  const Navigate = useNavigate();

  const handleLockButton = (option: string) => {
    switch (option) {
      case 'increase':
        console.log('increase Lock');

        break;
      case 'extend':
        Navigate('/dashboard/extend');
        break;
      case 'merge':
        console.log('Merge lock');
        break;
      case 'transfer':
        Navigate('/dashboard/transfer');
        break;
      default:
        console.log('Invalid option');
    }
  };
  return (
    <DashBoardLockMainContainer>
      <LockContainer>
        <CardLogo>
          <img src={tenxLogo} alt="" />
        </CardLogo>
        <LockData>
          <LockHeading>Lock #7242</LockHeading>
          <Paragraph>50.0 TENEX locked for 11 hours</Paragraph>
          <LockStyleText>
            <DashboardNavigation onClick={() => handleLockButton('increase')}>
              Increase
            </DashboardNavigation>
            <DashboardNavigation onClick={() => handleLockButton('extend')}>
              Extend
            </DashboardNavigation>
            <DashboardNavigation onClick={() => handleLockButton('merge')}>
              Merge
            </DashboardNavigation>
            <DashboardNavigation onClick={() => handleLockButton('transfer')}>
              Transfer
            </DashboardNavigation>
          </LockStyleText>
        </LockData>
      </LockContainer>

      <StakedContainer>
        <DepositeStakedHeading>Emissions APR</DepositeStakedHeading>
        <DepositeStakedData>40.43%</DepositeStakedData>
      </StakedContainer>

      <StakedContainer>
        <DepositeStakedHeading>Emissions </DepositeStakedHeading>
        <DepositeStakedData>0.00 USDT</DepositeStakedData>
      </StakedContainer>
    </DashBoardLockMainContainer>
  );
};

export default DashBoardLocks;
