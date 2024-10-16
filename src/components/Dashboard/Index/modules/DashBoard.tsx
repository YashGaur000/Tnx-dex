import { useNavigate } from 'react-router-dom';
import QuestionIcon from '../../../../assets/questionmark.svg';
import SelectIcon from '../../../../assets/select.svg';
import {
  DashBoardCard,
  DashBoardCardData,
  DashBoardCardData1,
  DashBoardCardWrapper,
  DashboardHeading,
  DashBoardLock,
  DashBoardMainContainer,
  DashBoardTitle,
  DashBoardWrapper,
  DashBoardWrapperHeading,
  TipsIcon,
} from '../styles/DashBoard.styled';
import { useEffect, useState } from 'react';

// import DepositAndStake from "./DepositAndStake";
// import LiquidityRewards from "./LiquidityRewards";
import DashBoardLocks from './DashBoardLocks';
import { GlobalButton } from '../../../common';
import LiquidityToolTips from '../../../Liquidity/LiquidityHomePage/Modules/LiquidityToolTips';
import LockToolTips from '../../../ManageVeTenex/Modules/LockToolTips';
import VotingToolTips from '../../../Voting/modules/VotingToolTips';
import PopupScreen from '../../../common/PopupScreen';
import { PopupWrapper } from '../../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import DepositAndStake from './DepositAndStake';
import LiquidityRewards from './LiquidityRewards';
import { useAccount } from '../../../../hooks/useAccount';
import { useUserPosition } from '../../../../hooks/useUserPosition';
import { Address } from 'viem';
import { UserPosition } from '../../../../types/Pool';
import VotingRewards from './VotingRewards';
import { VotingRewardsButton } from '../styles/VotingRewards.styled';
import { ClaimAllModle } from '../../../Dashboard/Index/modules/ClaimAllModle';
import { ClaimAllPopup } from '../styles/ClaimAllModle.styled';
import { TransactionStatus } from '../../../../types/Transaction';
import { useRootStore } from '../../../../store/root';

export interface UserPositionData {
  address?: Address;
  userPools: UserPosition[] | undefined;
  isError: boolean;
  isLoading: boolean;
}

const DashBoard: React.FC = () => {
  const { address } = useAccount();
  const { userValidPools, userRewardPools, isError } = useUserPosition(
    address!
  );
  const { transactionStatus } = useRootStore();
  const [isLoading, setIsLoading] = useState(true);

  const [isLockVisible, setIsLockVisible] = useState(true);

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isClaimPopUpShow, setClaimPopUpShow] = useState<boolean>(false);
  const [activeTooltip, setActiveTooltip] = useState<string>('');
  const Navigate = useNavigate();

  useEffect(() => {
    if (
      isLoading &&
      ((userValidPools?.length ?? 0) === 0 ||
        (userRewardPools?.length ?? 0) === 0)
    ) {
      const timeout = setTimeout(() => setIsLoading(false), 10000);

      return () => clearTimeout(timeout);
    } else {
      // If pools are valid, stop loading immediately
      setIsLoading(false);
    }
  }, [isLoading, userValidPools, userRewardPools]);

  function handleTooltipShow(option: string) {
    setActiveTooltip(option);
    setPopupVisible(true);
  }

  const closeModal = () => {
    setPopupVisible(false);
    setActiveTooltip('');
  };

  const handleCreatePool = () => {
    Navigate('/liquidity/create');
  };

  const handleClaimAll = () => {
    setClaimPopUpShow(true);
  };

  const handleHoverHide = () => {
    if (transactionStatus === TransactionStatus.IDEAL) {
      setClaimPopUpShow(false);
    }
  };

  const renderTooltipContent = () => {
    switch (activeTooltip) {
      case 'liquidity':
        return <LiquidityToolTips />;
      case 'lock':
        return <LockToolTips />;
      case 'voting':
        return <VotingToolTips />;
      default:
        return null;
    }
    setIsLockVisible(false); //Todo: please remove This line when add Lock functionality
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
          {address && (
            <DepositAndStake
              address={address}
              userPools={userValidPools}
              isError={isError}
              isLoading={isLoading}
            />
          )}
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

          {/* todo: Make Dynamic */}
          {address && (
            <LiquidityRewards
              userPools={userRewardPools}
              isError={isError}
              isLoading={isLoading}
            />
          )}
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
            {isLockVisible ? (
              <DashBoardLocks />
            ) : (
              <DashBoardCard>
                <DashBoardCardData>
                  To receive incentives and fees create a lock and vote with it.
                </DashBoardCardData>
              </DashBoardCard>
            )}

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
          <DashBoardWrapperHeading>
            <DashboardHeading>
              Voting Rewards{' '}
              <TipsIcon
                src={QuestionIcon}
                alt="wrong"
                onMouseEnter={() => handleTooltipShow('voting')}
              />
            </DashboardHeading>

            <ClaimAllPopup>
              <VotingRewardsButton onClick={handleClaimAll}>
                Claim All
                <img src={SelectIcon} alt="" />
              </VotingRewardsButton>
              <PopupWrapper onMouseLeave={handleHoverHide}>
                {isClaimPopUpShow && <ClaimAllModle account={address!} />}
              </PopupWrapper>
            </ClaimAllPopup>
          </DashBoardWrapperHeading>
          <VotingRewards account={address!} />
        </DashBoardWrapper>
      </DashBoardMainContainer>

      <PopupScreen
        isvisible={isPopupVisible}
        onClose={closeModal}
        width="500px"
        height="518px"
      >
        <PopupWrapper>{renderTooltipContent()}</PopupWrapper>
      </PopupScreen>
    </>
  );
};

export default DashBoard;
