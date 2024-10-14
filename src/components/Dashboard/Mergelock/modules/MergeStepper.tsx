import { useCallback, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { StepperDataProps } from '../../../../types/Stepper';
import { GlobalButton } from '../../../common';
import Stepper from '../../../common/Stepper';
import { StyledDepositContainer } from '../../../Liquidity/ManageLiquidity/styles/LiquidityDeposit.style';
import {
  SteperWrapper,
  TransferLockTitle,
} from '../../Extendlock/styles/Extendlock.style';
import { MergeStepperContainer } from '../styles/MergeLock.style';
import WaitingIcon from '../../../../assets/search.png';
import VotingPowerIcon from '../../../../assets/star.svg';
import Lock from '../../../../assets/lock.png';
import LockTime from '../../../../assets/lockTime.svg';
import VotingPowerIconGr from '../../../../assets/star-gradient.svg';
import LockIconGr from '../../../../assets/LockSucess.svg';
import contractAddress from '../../../../constants/contract-address/address';
import { useVotingEscrowContract } from '../../../../hooks/useVotingEscrowContract';
import { useRootStore } from '../../../../store/root';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../../types/Transaction';
import { convertToDecimal } from '../../../../utils/common/voteTenex';
import { showErrorToast } from '../../../../utils/common/toastUtils';
import MergeLockSidebar from './MergeLockSidebar';
import { useVoterContract } from '../../../../hooks/useVoterContract';
import { ToastContainer } from 'react-toastify';
///import { TokenInfo } from '../../../../constants/tokens/type';

interface MergeStepperProps {
  fromTokenId: string | undefined;
  toTokenId: number;
  isToVotingPower: number;
  setIsToVotingPower: (input: number) => void;
  votingPower: number;
  isTotalDuration: string;
  setSuccessLock: (input: boolean) => void;
  setIsModalDisable: (input: boolean) => void;
}

const MergeStepper: React.FC<MergeStepperProps> = ({
  fromTokenId,
  toTokenId,
  setIsToVotingPower,
  votingPower,
  isToVotingPower,
  isTotalDuration,
  setSuccessLock,
  setIsModalDisable,
}) => {
  const [isvisblemergeStepper, setvisiblemergeStepper] =
    useState<boolean>(false);
  const [isMerging, setIsMerging] = useState(false);
  const [isMergeLocked, setIsMergeLocked] = useState(false);
  const [isResetLocked, setIsResetLocked] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const escrowAddress = contractAddress.VotingEscrow;
  const { mergeLocks } = useVotingEscrowContract(escrowAddress);
  const [isPoke, setIsPoke] = useState(false);
  const { setTransactionStatus } = useRootStore();
  const { reset, poke } = useVoterContract();
  //const navigate = useNavigate();

  const covertVoting = convertToDecimal(votingPower).toString();
  const totalVotingPower = Number(isToVotingPower + Number(covertVoting));

  const handleMergeLock = useCallback(
    async (fromTknId: number, toTknId: number) => {
      try {
        setTransactionStatus(TransactionStatus.IN_PROGRESS);
        if (!fromTknId || !toTknId) return;
        setIsMerging(true);
        setIsModalDisable(true);
        await mergeLocks(BigInt(fromTknId), BigInt(toTknId));
        setTransactionStatus(TransactionStatus.DONE);
        setTimeout(() => {
          setTransactionStatus(TransactionStatus.IDEAL);
          setIsMerging(false);
          setIsToVotingPower(0);
          setIsMergeLocked(true);
          setSuccessLock(true);
          setIsModalDisable(false);
        }, TRANSACTION_DELAY);
      } catch (error) {
        console.error('Error during merge:', error);
      } finally {
        setIsMergeLocked(false);
      }
    },
    [
      mergeLocks,
      setTransactionStatus,
      setIsToVotingPower,
      setSuccessLock,
      setIsModalDisable,
    ]
  );

  const handleResetLock = useCallback(async () => {
    try {
      setIsResetting(true);
      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      if (!fromTokenId) return;
      setIsModalDisable(true);
      const transaction = await reset(BigInt(fromTokenId));
      if (!transaction) {
        throw new Error('Transaction was canceled or failed');
      }
      setTransactionStatus(TransactionStatus.DONE);
      setTimeout(() => {
        setTransactionStatus(TransactionStatus.IDEAL);
        setIsModalDisable(false);
        setIsResetLocked(true);
        setIsResetting(false);
      }, TRANSACTION_DELAY);
    } catch (error) {
      setIsResetLocked(false);
      setIsResetting(false);
      console.error('Error during reset:', error);
    }
  }, [fromTokenId, reset, setTransactionStatus, setIsModalDisable]);
  const handlePoke = async () => {
    try {
      setIsPoke(true);
      const tknId = BigInt(Number(fromTokenId));
      await poke(BigInt(tknId));
      setIsPoke(false);
    } catch (error) {
      console.error('Error during poke action:', error);
      await showErrorToast('Failed to poke the voting weight.');
    }
  };
  const MergeStepperData: StepperDataProps[] = [
    {
      step: 1,
      descriptions: { labels: 'Select the locks to merge first.' },
      icon: Lock,
    },
    {
      step: 2,
      descriptions: { labels: 'No Locks selected.' },
      icon: VotingPowerIcon,
    },
  ];

  const MergeInstruct: StepperDataProps[] = [
    {
      step: 1,
      descriptions: {
        labels: `Depositing TENEX.`,
      },
      icon: LockIconGr,
    },
    {
      step: 2,
      descriptions: {
        labels: `New estimated lock time is ${isTotalDuration}.`,
      },
      icon: LockTime,
    },
    {
      step: 3,
      descriptions: {
        labels: `New estimated voting power ${totalVotingPower} veTENEX`,
      },
      icon: VotingPowerIconGr,
    },
    {
      step: 4,
      descriptions: {
        labels: isResetLocked
          ? 'Reset lock #' + fromTokenId + ' successfully'
          : 'Reset required for lock #' + fromTokenId,
      },
      icon: LockIconGr,
      buttons: !isResetLocked
        ? {
            label: isResetting ? 'Resett' : 'Reset',
            onClick: handleResetLock,
            tooltip: 'Click to reset Lock #' + fromTokenId,
            disabled: isResetting,
          }
        : undefined,
    },
    {
      step: 5,
      icon: isMergeLocked ? LockIconGr : WaitingIcon,
      descriptions: {
        labels: isMergeLocked
          ? `Merge done for Lock #${toTokenId}`
          : 'Waiting for next actions...',
      },
      actionCompleted: !isMergeLocked,
      buttons: isPoke
        ? {
            label: 'Poke',
            onClick: handlePoke,
            tooltip: 'Click to Poke Lock #' + fromTokenId,
            disabled: isPoke,
          }
        : undefined,
    },
  ];

  return (
    <StyledDepositContainer>
      <MergeStepperContainer>
        <SteperWrapper gap={24}>
          <TransferLockTitle
            fontSize={24}
            color={isvisblemergeStepper ? '#FFFFFF' : '#EB5540'}
          >
            Merge
          </TransferLockTitle>

          {isvisblemergeStepper ? (
            <Stepper data={!toTokenId ? MergeStepperData : MergeInstruct} />
          ) : (
            <MergeLockSidebar />
          )}
        </SteperWrapper>
        {!isvisblemergeStepper && (
          <GlobalButton
            margin="0px"
            onClick={() => setvisiblemergeStepper(true)}
          >
            Continue
          </GlobalButton>
        )}
        {isvisblemergeStepper && !isMergeLocked && (
          <GlobalButton
            onClick={() => handleMergeLock(toTokenId, Number(fromTokenId))}
            disabled={isMerging}
          >
            {isMerging ? 'Merging...' : 'Merge'}
          </GlobalButton>
        )}
      </MergeStepperContainer>
      <ToastContainer />
    </StyledDepositContainer>
  );
};

export default MergeStepper;
