import QuestionIcon from '../../../assets/questionmark.svg';
import { GlobalButton } from '../../common';

import {
  DashBoardCard,
  DashBoardCardData,
  DashBoardCardData1,
  DashBoardCardWrapper,
  DashboardHeading,
  DashBoardLock,
  DashBoardMainContainer,
  DashboardNavigation,
  DashBoardTitle,
  DashBoardWrapper,
  DashBoardWrapperHeading,
  TipsIcon,
} from '../styles/DashBoard.styled';
// import DepositAndStake from "./DepositAndStake";
// import LiquidityRewards from "./LiquidityRewards";
// import DashBoardLocks from "./DashBoardLocks";
// import Dashboarddata from "../../../constants/dashboard.json";

const DashBoard: React.FC = () => {
  // const[isStakeVisible, setIsStakeVisible]=useState<boolean>(true);
  // const[isLiquidityVisible, setIsLiquidityvisible]=useState(true);
  // const[isLockVisible, setIsLockVisible]=useState(true);
  // const [showAllStakes, setShowAllStakes] = useState<boolean>(false);

  return (
    <DashBoardMainContainer>
      <DashBoardWrapper>
        <DashBoardWrapperHeading>
          <DashboardHeading>
            Deposited & Staked Liquidity{' '}
            <TipsIcon src={QuestionIcon} alt="wrong" />
          </DashboardHeading>
          <GlobalButton width="165px" height="40px" margin="0px">
            Create Pool
          </GlobalButton>
        </DashBoardWrapperHeading>

        <DashBoardCard>
          <DashBoardCardData>
            To receive emissions{' '}
            <DashboardNavigation> deposit and stake </DashboardNavigation> your
            liquidity first.
          </DashBoardCardData>
        </DashBoardCard>
      </DashBoardWrapper>
      <DashBoardWrapper>
        <DashboardHeading>
          Liquidity Rewards <TipsIcon src={QuestionIcon} alt="wrong" />
        </DashboardHeading>

        <DashBoardCard>
          <DashBoardCardData>
            Start by{' '}
            <DashboardNavigation> depositing and staking</DashboardNavigation>{' '}
            liquidity.
          </DashBoardCardData>
        </DashBoardCard>
      </DashBoardWrapper>
      <DashBoardWrapper>
        <DashboardHeading fontsize="24px">
          Locks <TipsIcon src={QuestionIcon} alt="wrong" />
        </DashboardHeading>
        <DashBoardLock>
          <DashBoardCard>
            <DashBoardCardData>
              To receive incentives and fees create a lock and vote with it.
            </DashBoardCardData>
          </DashBoardCard>

          <DashBoardCard height={88}>
            <DashBoardCardWrapper>
              <DashBoardTitle>Relay Strategies</DashBoardTitle>
              <DashBoardCardData1>
                Relay automates the process of managing a lock. See available
                strategies for maximizing your voting power.
              </DashBoardCardData1>
            </DashBoardCardWrapper>
            <GlobalButton width="165px" height="40px" margin="0px">
              Explore Relays
            </GlobalButton>
          </DashBoardCard>
        </DashBoardLock>
      </DashBoardWrapper>

      <DashBoardWrapper>
        <DashboardHeading>
          Voting Rewards <TipsIcon src={QuestionIcon} alt="wrong" />
        </DashboardHeading>
        <DashBoardCard>
          <DashBoardCardData>No rewards found.</DashBoardCardData>
        </DashBoardCard>
      </DashBoardWrapper>
    </DashBoardMainContainer>
  );
};

export default DashBoard;
