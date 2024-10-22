import { Address } from 'viem';
import { GlobalButton } from '../../common';
import { StyledDepositContainer } from '../../Liquidity/ManageLiquidity/styles/LiquidityDeposit.style';
import { LockDescriptonTitle } from '../../ManageVeTenex/Styles/ManageVetenex.style';
import {
  SteperWrapper,
  TransferLockTitle,
  UnderlineText,
} from '../Extendlock/styles/Extendlock.style';
import { useCallback, useState } from 'react';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../types/Transaction';
import { useRootStore } from '../../../store/root';
import { useVotingEscrowContract } from '../../../hooks/useVotingEscrowContract';
import contractAddress from '../../../constants/contract-address/address';
import Stepper from '../../common/Stepper';
import WaitingIcon from '../../../../src/assets/search.png';
import LockIconGr from '../../../../src/assets/LockSucess.svg';
import LockIconRed from '../../../assets/lock.png';
import VotingPowerIcon from '../../../../src/assets/star.svg';
import { useVoterContract } from '../../../hooks/useVoterContract';
import { useNavigate } from 'react-router-dom';
import {
  showErrorToast,
  showSuccessToast,
} from '../../../utils/common/toastUtils';

interface TransferFromOwnerProps {
  fromOwner: Address;
  toAddress: Address;
  tokenId: number;
  setSuccessLock: (input: boolean) => void;
  setInputLock: (input: boolean) => void;
  setToAddres: (input: Address | undefined) => void;
  handleSubmit: () => void;
  votingStatus: boolean | string;
  isValidAddress: string;
}

const TransferLockSidebar: React.FC<TransferFromOwnerProps> = ({
  fromOwner,
  toAddress,
  tokenId,
  setSuccessLock,
  setInputLock,
  setToAddres,
  handleSubmit,
  votingStatus,
  isValidAddress,
}) => {
  const { transferFrom } = useVotingEscrowContract(
    contractAddress.VotingEscrow
  );
  const { reset } = useVoterContract();
  const { setTransactionStatus } = useRootStore();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLockTransfer, setIsLockTransfer] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false); // Track reset state
  const [isResetDone, setIsResetDone] = useState<boolean>(false); // Track if reset was done
  const navigate = useNavigate();
  const handleTransferLock = useCallback(async () => {
    try {
      void handleSubmit();
      if (!fromOwner && !toAddress && !tokenId) return;
      if (fromOwner === toAddress) return;
      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      setInputLock(true);
      setIsLoading(true);

      await transferFrom(fromOwner, toAddress, tokenId);

      setIsLockTransfer(true);
      setTransactionStatus(TransactionStatus.DONE);

      setTimeout(() => {
        setSuccessLock(true);
        setInputLock(false);
        setToAddres(undefined);
        setTransactionStatus(TransactionStatus.IDEAL);
        void showSuccessToast('Successfully transfer ');
        navigate('/governance');
      }, TRANSACTION_DELAY);
    } catch (error) {
      //console.error('Error transferring lock:', error);
      setTransactionStatus(TransactionStatus.FAILED);
      setInputLock(false);
      void showErrorToast('Failed to Transfer, please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [tokenId, toAddress, fromOwner, transferFrom, setTransactionStatus]);

  const handleResetLock = useCallback(async () => {
    let transactionSuccess = false;
    try {
      if (!toAddress) return;
      setIsResetting(true);
      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      if (!tokenId) return;
      const txHash = await reset(BigInt(Number(tokenId)));

      if (txHash) {
        transactionSuccess = true;
      }
      setTransactionStatus(TransactionStatus.DONE);
      setTimeout(() => {
        if (transactionSuccess) {
          setTransactionStatus(TransactionStatus.IDEAL);
          setIsResetDone(true);
          setIsResetting(false);
          void showSuccessToast('Successfully reset lock #' + tokenId);
        }
      }, TRANSACTION_DELAY);
    } catch (error) {
      //console.error('Error during reset lock:', error);
      setTransactionStatus(TransactionStatus.FAILED);
      setIsResetting(false);
      await showErrorToast('Failed to reset, please try again.');
    } finally {
      setIsResetting(false);
    }
  }, [tokenId, reset, setTransactionStatus]);

  const TransferStepperData = [
    {
      step: 1,
      descriptions: {
        labels: isValidAddress ? isValidAddress : 'Enter Wallet Address.',
      },
      icon: VotingPowerIcon,
    },
    ...(votingStatus
      ? [
          {
            step: 2,
            descriptions: {
              labels: !isResetDone
                ? 'Reset is required for lock #' + tokenId
                : 'Reset completed',
            },
            icon: !isResetDone ? LockIconRed : LockIconGr,
            buttons: !isResetDone
              ? {
                  label: isResetting ? 'Resett' : 'Reset',
                  onClick: handleResetLock,
                  disabled: isResetting,
                }
              : undefined,
          },
        ]
      : []),
    {
      step: 3,
      descriptions: {
        labels: isLockTransfer
          ? 'Transfer completed successfully'
          : 'Waiting for next action..',
      },
      icon: WaitingIcon,
      actionCompleted: !isLockTransfer,
    },
  ];

  return (
    <StyledDepositContainer>
      <TransferLockTitle fontSize={24}>Transfer Lock</TransferLockTitle>
      <SteperWrapper>
        <LockDescriptonTitle fontSize={14}>
          Transferring a lock will also transfer any rewards and rebases! Before
          continuing, please make sure you have
          <UnderlineText fontSize={14}>
            claimed all available rewards
          </UnderlineText>
          .
        </LockDescriptonTitle>

        {/* Stepper for transfer and reset */}
        <Stepper data={TransferStepperData} />

        {!isLockTransfer && (
          <GlobalButton
            onClick={handleTransferLock}
            disabled={isLoading || isResetting}
          >
            {isLoading ? 'Processing...' : 'Continue'}
          </GlobalButton>
        )}
      </SteperWrapper>
    </StyledDepositContainer>
  );
};

export default TransferLockSidebar;
