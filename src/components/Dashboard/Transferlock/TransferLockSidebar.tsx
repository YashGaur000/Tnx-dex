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

interface TransferFromOwnerProps {
  fromOwner: Address;
  toAddress: Address;
  tokenId: number;
  setSuccessLock: (input: boolean) => void;
  setInputLock: (input: boolean) => void;
  setToAddres: (input: Address | undefined) => void;
}

const TransferLockSidebar: React.FC<TransferFromOwnerProps> = ({
  fromOwner,
  toAddress,
  tokenId,
  setSuccessLock,
  setInputLock,
  setToAddres,
}) => {
  const { transferFrom } = useVotingEscrowContract(
    contractAddress.VotingEscrow
  );
  const { setTransactionStatus } = useRootStore();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLockTransfer, setIsLockTransfer] = useState<boolean>(false);

  const handleTransferLock = useCallback(async () => {
    try {
      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      setInputLock(true);
      setIsLoading(true);
      if (!fromOwner && !toAddress && !tokenId) return;
      await transferFrom(fromOwner, toAddress, tokenId);

      setIsLockTransfer(true);
      setTransactionStatus(TransactionStatus.DONE);

      setTimeout(() => {
        setSuccessLock(true);
        setInputLock(false);
        setToAddres(undefined);
        setTransactionStatus(TransactionStatus.IDEAL);
      }, TRANSACTION_DELAY);
    } catch (error) {
      console.error('Error transferring lock:', error);
      setTransactionStatus(TransactionStatus.FAILED);
      setInputLock(false);
    } finally {
      setIsLoading(false);
    }
  }, [tokenId, toAddress, fromOwner, transferFrom, setTransactionStatus]);

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
        {isLockTransfer && (
          <LockDescriptonTitle fontSize={14}>
            Transfer a lock Confirmed!
          </LockDescriptonTitle>
        )}

        {!isLockTransfer && (
          <GlobalButton onClick={handleTransferLock} disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Continue'}
          </GlobalButton>
        )}
      </SteperWrapper>
    </StyledDepositContainer>
  );
};

export default TransferLockSidebar;
