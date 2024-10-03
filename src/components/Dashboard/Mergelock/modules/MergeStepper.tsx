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
import { useCallback, useState } from 'react';
import MergeLockSidebar from './MergeLockSidebar';
import contractAddress from '../../../../constants/contract-address/address';
import { useVotingEscrowContract } from '../../../../hooks/useVotingEscrowContract';
import { useRootStore } from '../../../../store/root';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../../types/Transaction';
import { convertToDecimal } from '../../../../utils/common/voteTenex';

import VotingPowerIconGr from '../../../../assets/star-gradient.svg';
import LockIconGr from '../../../../assets/LockSucess.svg';

interface MergeStepperProps {
  fromTokenId: string | undefined;
  toTokenId: number;
  isToVotingPower: number;
  setIsToVotingPower: (input: number) => void;
  votingPower: number;
  isTotalDuration: string;
  setSuccessLock: (input: boolean) => void;
}

const MergeStepper: React.FC<MergeStepperProps> = ({
  fromTokenId,
  toTokenId,
  setIsToVotingPower,
  votingPower,
  isToVotingPower,
  isTotalDuration,
  setSuccessLock,
}) => {
  const [isvisblemergeStepper, setvisiblemergeStepper] =
    useState<boolean>(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [isMerging, setIsMerging] = useState(false);
  const [isMergeLocked, setIsMergeLocked] = useState(false);

  const escrowAddress = contractAddress.VotingEscrow;
  const { mergeLocks } = useVotingEscrowContract(escrowAddress);
  const { setTransactionStatus } = useRootStore();
  const covertVoting = convertToDecimal(votingPower).toString();

  const totalVotingPower = Number(isToVotingPower + Number(covertVoting));

  const handleMergeLock = useCallback(
    async (fromTknId: number, toTknId: number) => {
      try {
        setTransactionStatus(TransactionStatus.IN_PROGRESS);
        if (!fromTknId || !toTknId) return;
        setIsMerging(true);
        await mergeLocks(BigInt(fromTknId), BigInt(toTknId));
        setTransactionStatus(TransactionStatus.DONE);
        setTimeout(() => {
          setTransactionStatus(TransactionStatus.IDEAL);
          setIsMerging(false);
          setIsToVotingPower(0), setIsMergeLocked(true);
          setSuccessLock(true);
        }, TRANSACTION_DELAY);
      } catch (error) {
        console.error('Error during token lock:', error);
      } finally {
        setIsMergeLocked(false);
      }
    },
    [mergeLocks, setTransactionStatus]
  );

  const handleMerge = () => {
    setvisiblemergeStepper(true);
  };

  const MergeStepperData: StepperDataProps[] = [
    {
      step: 1,
      descriptions: { labels: 'Select the locks to merge first. ' },
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
        labels: `Depositing TENEX .`,
      },
      icon: LockIconGr,
    },

    {
      step: 3,
      descriptions: {
        labels: `New estimated lock time is ${isTotalDuration}.`,
      },
      icon: LockTime,
    },
    {
      step: 4,
      descriptions: {
        labels: `New estimated voting power ${totalVotingPower} veTENEX`,
      },
      icon: VotingPowerIconGr,
    },

    {
      step: 5,
      icon: !isMergeLocked ? WaitingIcon : LockIconGr,
      descriptions: {
        labels: isMergeLocked
          ? `Reset done for Lock #${toTokenId}`
          : 'Waiting for next actions...',
      },
      actionCompleted: !isMergeLocked,
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
          <GlobalButton margin="0px" onClick={handleMerge}>
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
    </StyledDepositContainer>
  );
};

export default MergeStepper;
