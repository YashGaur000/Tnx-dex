import React, { useCallback, useState } from 'react';
import DateTimeIcon from '../../../../assets/date-time-gradient.svg';
import 'react-toastify/dist/ReactToastify.css';
import WaitingIcon from '../../../../assets/search.png';
import SucessDepositIcon from '../../../../assets/gradient-party-poper.svg';
import VotingPowerIcon from '../../../../assets/star-gradient.svg';
import InformIcon from '../../../../assets/information.svg';
import { SteperWrapper, TipsContainer } from '../styles/Extendlock.style';
import { StepperDataProps } from '../../../../types/Stepper';
import Stepper from '../../../common/Stepper';
import { StyledDepositContainer } from '../../../Liquidity/ManageLiquidity/styles/LiquidityDeposit.style';
import {
  ImageContainer,
  LockHeaderTitle,
} from '../../../ManageVeTenex/Styles/ManageVetenex.style';
import { GlobalButton } from '../../../common';
import { useVotingEscrowContract } from '../../../../hooks/useVotingEscrowContract';
import contractAddress from '../../../../constants/contract-address/address';
import { ExtendStepperProps } from '../../../../types/VotingEscrow';
import { useVoterContract } from '../../../../hooks/useVoterContract';
import { ToastContainer } from 'react-toastify';

import {
  showSuccessToast,
  showErrorToast,
} from '../../../../utils/common/toastUtils';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../../types/Transaction';
import { useRootStore } from '../../../../store/root';
import { useNavigate } from 'react-router-dom';

const ExtendStepper: React.FC<ExtendStepperProps> = ({
  tokenId,
  selectedWeeks,
  votingPower,
  setSuccessLock,
  isExtendDisable,
  onExtendClick,
  votingStatus,
}) => {
  const escrowAddress = contractAddress.VotingEscrow;
  const { increaseUnlockTime } = useVotingEscrowContract(escrowAddress);
  const [isExtending, setIsExtending] = useState(false);
  const [isExtend, setIsExtend] = useState(false);
  const [isPoke, setIsPoke] = useState(false);
  const { poke } = useVoterContract();
  const { setTransactionStatus, transactionStatus } = useRootStore();
  const navigate = useNavigate();
  const handleExtend = useCallback(
    async (tokenId: number, duration: number): Promise<void> => {
      try {
        if (!tokenId) return;

        onExtendClick(true);
        setIsExtending(true);
        const durationInSeconds = duration * 7 * 24 * 60 * 60;
        await increaseUnlockTime(tokenId, durationInSeconds);
        setTransactionStatus(TransactionStatus.DONE);
        setTimeout(() => {
          setTransactionStatus(TransactionStatus.IDEAL);
          //setSuccessLock(true);
          setIsExtend(true);
          setIsPoke(true);
          void showSuccessToast(
            `Lock extended for ${duration} weeks successfully!`
          );
        }, TRANSACTION_DELAY);

        if (votingStatus != true) {
          void navigate('/governance');
        }
      } catch (error) {
        setIsExtend(false);
        setIsPoke(false);
        void showErrorToast('Failed to extend lock. Please try again.');
      } finally {
        setIsExtending(false);
      }
    },
    [increaseUnlockTime, onExtendClick, setSuccessLock]
  );

  const handlePoke = async () => {
    try {
      setIsPoke(true);
      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      const tknId = BigInt(Number(tokenId));
      await poke(tknId);
      setTransactionStatus(TransactionStatus.DONE);
      setTimeout(() => {
        setTransactionStatus(TransactionStatus.IDEAL);
        setIsPoke(false);
        navigate('/governance');
      }, TRANSACTION_DELAY);
    } catch (error) {
      setIsPoke(false);
      setTransactionStatus(TransactionStatus.FAILED);
      console.error('Error during poke action:', error);
      void showErrorToast('Failed to poke the voting weight.');
    }
  };

  const ExtendStepperData: StepperDataProps[] = [
    {
      step: 1,
      descriptions: { labels: `New lock time for ${selectedWeeks} weeks` },
      icon: DateTimeIcon,
    },
    {
      step: 2,
      descriptions: {
        labels: `New estimated voting power: ${votingPower.toLocaleString()} veTENEX`,
      },
      icon: VotingPowerIcon,
    },

    {
      step: 4,
      descriptions: {
        labels: isExtend
          ? 'Extend lock confirmed'
          : 'Waiting for next actions...',
      },
      icon: !isExtend ? WaitingIcon : SucessDepositIcon,
      actionCompleted: !isExtend,

      buttons:
        isPoke && votingStatus
          ? {
              label: 'Poke',
              onClick: handlePoke,
              tooltip: 'Click to Poke Lock #' + tokenId,
              disabled:
                !isPoke || transactionStatus === TransactionStatus.IN_PROGRESS,
            }
          : undefined,
    },
  ];

  return (
    <StyledDepositContainer>
      <LockHeaderTitle fontSize={24}>Extend Lock #{tokenId}</LockHeaderTitle>
      <SteperWrapper>
        <ToastContainer />
        <Stepper data={ExtendStepperData} />
        {!isExtend && !isExtendDisable && (
          <GlobalButton
            width="100%"
            height="48px"
            margin="0px"
            onClick={() => handleExtend(tokenId, selectedWeeks)}
            disabled={isExtending}
          >
            {isExtending ? 'Extending...' : 'Extend'}
          </GlobalButton>
        )}
      </SteperWrapper>
      <TipsContainer>
        <ImageContainer width="24px" height="24px" src={InformIcon} />
        <LockHeaderTitle fontSize={14}>
          You can extend the lock or increase the lock amount. These actions
          will increase your voting power. The maximum lock time is 4 years!
        </LockHeaderTitle>
      </TipsContainer>
    </StyledDepositContainer>
  );
};

export default ExtendStepper;
