import { useNavigate } from 'react-router-dom';
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
import { useState } from 'react';
import PopupScreen from '../../common/PopupScreen';
import { PopupWrapper } from '../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import LiquidityToolTips from '../../Liquidity/LiquidityHomePage/Modules/LiquidityToolTips';
import LockToolTips from '../../ManageVeTenex/Modules/LockToolTips';
// import DepositAndStake from "./DepositAndStake";
// import LiquidityRewards from "./LiquidityRewards";
// import DashBoardLocks from "./DashBoardLocks";
// import Dashboarddata from "../../../constants/dashboard.json";

const DashBoard: React.FC = () => {
  // const[isStakeVisible, setIsStakeVisible]=useState<boolean>(true);
  // const[isLiquidityVisible, setIsLiquidityvisible]=useState(true);
  // const[isLockVisible, setIsLockVisible]=useState(true);
  // const [showAllStakes, setShowAllStakes] = useState<boolean>(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string>('');
  const Navigate = useNavigate();

  function handleTooltipShow(option: string) {
    setActiveTooltip(option);
    setPopupVisible(true);
  }

  function handleTooltipHide() {
    setPopupVisible(false);
    setActiveTooltip('');
  }

  const closeModal = () => {
    setPopupVisible(false);
    setActiveTooltip('');
  };

  const handleCreatePool = () => {
    Navigate('/liquidity/create');
  };

  const renderTooltipContent = () => {
    switch (activeTooltip) {
      case 'liquidity':
        return <LiquidityToolTips />;
      case 'lock':
        return <LockToolTips />;
      case 'voting':
        return <div>Voting Tooltip Content</div>;
      default:
        return null;
    }
  };
  return (
    <>
      <DashBoardMainContainer>
        <DashBoardWrapper>
          <DashBoardWrapperHeading>
            <DashboardHeading>
              Deposited & Staked Liquidity{' '}
              <TipsIcon
                src={QuestionIcon}
                alt="wrong"
                onMouseEnter={() => handleTooltipShow('liquidity')}
              />
            </DashboardHeading>
            <GlobalButton
              width="165px"
              height="40px"
              margin="0px"
              onClick={handleCreatePool}
            >
              Create Pool
            </GlobalButton>
          </DashBoardWrapperHeading>

          <DashBoardCard>
            <DashBoardCardData>
              To receive emissions{' '}
              <DashboardNavigation onClick={handleCreatePool}>
                {' '}
                deposit and stake{' '}
              </DashboardNavigation>{' '}
              your liquidity first.
            </DashBoardCardData>
          </DashBoardCard>
        </DashBoardWrapper>
        <DashBoardWrapper>
          <DashboardHeading>
            Liquidity Rewards{' '}
            <TipsIcon
              src={QuestionIcon}
              alt="wrong"
              onMouseEnter={() => handleTooltipShow('liquidity')}
            />
          </DashboardHeading>

          <DashBoardCard>
            <DashBoardCardData>
              Start by{' '}
              <DashboardNavigation onClick={handleCreatePool}>
                {' '}
                depositing and staking
              </DashboardNavigation>{' '}
              liquidity.
            </DashBoardCardData>
          </DashBoardCard>
        </DashBoardWrapper>
        <DashBoardWrapper>
          <DashboardHeading fontSize="24px">
            Locks{' '}
            <TipsIcon
              src={QuestionIcon}
              alt="wrong"
              onMouseEnter={() => handleTooltipShow('lock')}
            />
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
            Voting Rewards{' '}
            <TipsIcon
              src={QuestionIcon}
              alt="wrong"
              onMouseEnter={() => handleTooltipShow('voting')}
            />
          </DashboardHeading>
          <DashBoardCard>
            <DashBoardCardData>No rewards found.</DashBoardCardData>
          </DashBoardCard>
        </DashBoardWrapper>
      </DashBoardMainContainer>

      <PopupScreen
        isvisible={isPopupVisible}
        onClose={closeModal}
        width="500px"
        height="518px"
      >
        <PopupWrapper onMouseLeave={handleTooltipHide}>
          {renderTooltipContent()}
        </PopupWrapper>
      </PopupScreen>
    </>
  );
};

export default DashBoard;
