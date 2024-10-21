import { useState } from 'react';
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
import LockIconRed from '../../../../assets/lock.png';
import contractAddress from '../../../../constants/contract-address/address';
import { useVotingEscrowContract } from '../../../../hooks/useVotingEscrowContract';
import { useRootStore } from '../../../../store/root';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../../types/Transaction';
import { convertToDecimal } from '../../../../utils/common/voteTenex';
import {
  showErrorToast,
  showSuccessToast,
} from '../../../../utils/common/toastUtils';
import MergeLockSidebar from './MergeLockSidebar';
import { useVoterContract } from '../../../../hooks/useVoterContract';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface MergeStepperProps {
  toTokenId: string | undefined;
  fromTokenId: number;
  isFromVotingPower: number;
  setIsFromVotingPower: (input: number) => void;
  votingPower: number;
  votingStatus: boolean;
  isTotalDuration: string;
  setIsModalDisable: (input: boolean) => void;
}

const MergeStepper: React.FC<MergeStepperProps> = ({
  toTokenId,
  fromTokenId,
  setIsFromVotingPower,
  votingPower,
  votingStatus,
  isFromVotingPower,
  isTotalDuration,
  setIsModalDisable,
}) => {
  const [isvisblemergeStepper, setvisiblemergeStepper] =
    useState<boolean>(false);
  const [isMerging, setIsMerging] = useState(false);
  const [isMergeLocked, setIsMergeLocked] = useState(false);
  const [isResetLocked, setIsResetLocked] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [isPokeDisplay, setPokeDisplay] = useState<boolean>(false);
  const [isPoke, setIsPoke] = useState<boolean>(false);

  const escrowAddress = contractAddress.VotingEscrow;
  const { mergeLocks } = useVotingEscrowContract(escrowAddress);
  const { setTransactionStatus, transactionStatus } = useRootStore();
  const { reset, poke } = useVoterContract();
  const navigate = useNavigate();

  const totalVotingPower = Number(
    isFromVotingPower + Number(convertToDecimal(votingPower))
  );

  const handleMergeLock = async (fromTokenId: number, toTokenId: number) => {
    let transHash = false;
    try {
      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      if (!fromTokenId || !toTokenId) return;
      setIsMerging(true);
      setIsModalDisable(true);
      const txHas = await mergeLocks(BigInt(fromTokenId), BigInt(toTokenId));

      if (txHas) {
        transHash = true;
        setTransactionStatus(TransactionStatus.DONE);
        void showSuccessToast(`Merge done successfully`);
      } else {
        void showErrorToast('Transaction was canceled or failed.');
      }

      setTimeout(() => {
        if (transHash) {
          setTransactionStatus(TransactionStatus.IDEAL);
          setIsMerging(false);
          setPokeDisplay(true);
          setIsModalDisable(false);
          setIsMergeLocked(true);
          setIsFromVotingPower(0);

          if (!votingStatus) {
            navigate('/governance');
          }
        }
      }, TRANSACTION_DELAY);
    } catch (error) {
      setTimeout(() => {
        if (!transHash) {
          setTransactionStatus(TransactionStatus.FAILED);
          setIsMerging(false);
          setIsModalDisable(false);
        }
      }, TRANSACTION_DELAY);
    }
  };

  const handleResetLock = async (fromTokenId: number) => {
    let transactionSuccess = false;
    try {
      if (!fromTokenId) return;

      setIsResetLocked(false);
      setIsResetting(true);
      setIsModalDisable(true);
      const txHash = await reset(BigInt(Number(fromTokenId)));
      if (txHash) {
        transactionSuccess = true;
      }
      setTimeout(() => {
        if (transactionSuccess) {
          setIsModalDisable(false);
          setIsResetLocked(true);
          setIsResetting(false);
          void showSuccessToast('Successfully reset lock #' + toTokenId);
        } else {
          transactionSuccess = false;
          setIsModalDisable(false);
          setIsResetLocked(false);
          setIsResetting(false);
          void showErrorToast('Failed to reset, please try again.');
        }
      }, TRANSACTION_DELAY);
    } catch (error) {
      transactionSuccess = false;
      setIsModalDisable(false);
      setIsResetLocked(false);
      setIsResetting(false);
      await showErrorToast('Failed to reset, please try again.');
    } finally {
      setIsModalDisable(false);
      setIsResetLocked(false);
      setIsResetting(false);
    }
  };

  const handlePoke = async () => {
    try {
      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      setIsPoke(true);
      await poke(BigInt(fromTokenId));
      setTransactionStatus(TransactionStatus.DONE);

      void showSuccessToast('Poked successfully.');
      setTimeout(() => {
        setTransactionStatus(TransactionStatus.IDEAL);
        setPokeDisplay(false);
        setIsMergeLocked(true);
        setIsModalDisable(false);
        setIsMerging(false);
        setIsFromVotingPower(0);
        setIsPoke(false);

        navigate('/governance');
      }, TRANSACTION_DELAY);
    } catch (error) {
      setIsMerging(false);
      setPokeDisplay(true);
      setTransactionStatus(TransactionStatus.FAILED);
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
      descriptions: { labels: `Depositing TENEX.` },
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
        labels: `New estimated voting power ${totalVotingPower.toFixed(1)} veTENEX`,
      },
      icon: VotingPowerIconGr,
    },
    ...(votingStatus
      ? [
          {
            step: 4,
            descriptions: {
              labels: isResetLocked
                ? 'Reset lock #' + fromTokenId + ' successfully'
                : 'Reset required for lock #' + fromTokenId,
            },
            icon: isResetLocked ? LockIconGr : LockIconRed,
            buttons: !isResetLocked
              ? {
                  label: isResetting ? 'Resett' : 'Reset',
                  onClick: () => handleResetLock(fromTokenId),
                  tooltip: 'Click to reset Lock #' + fromTokenId,
                  disabled: isResetting && votingStatus,
                }
              : undefined,
          },
        ]
      : []),
    {
      step: votingStatus ? 5 : 4,
      icon: isMergeLocked ? LockIconGr : WaitingIcon,
      descriptions: {
        labels: isMergeLocked
          ? `Merge done for Lock #${toTokenId}`
          : 'Waiting for next actions...',
      },
      actionCompleted: !isMergeLocked,
    },
  ];

  return (
    <StyledDepositContainer>
      <ToastContainer />
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
            onClick={() => handleMergeLock(fromTokenId, Number(toTokenId))}
            disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
          >
            {isMerging ? 'Merging...' : 'Merge'}
          </GlobalButton>
        )}

        {isPokeDisplay && votingStatus && (
          <GlobalButton
            width="30%"
            height="40px"
            margin="0px"
            onClick={handlePoke}
            disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
          >
            {isPoke ? 'Poke...' : 'Poke'}
          </GlobalButton>
        )}
      </MergeStepperContainer>
      <ToastContainer />
    </StyledDepositContainer>
  );
};

export default MergeStepper;
