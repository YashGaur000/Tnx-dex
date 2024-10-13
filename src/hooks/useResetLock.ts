import { useCallback, useState } from 'react';
import { TransactionStatus, TRANSACTION_DELAY } from '../types/Transaction';
import { useVoterContract } from './useVoterContract';

export const useResetLock = (
  fromTokenId: number,
  setTransactionStatus: (status: TransactionStatus) => void,
  setIsModalDisable: (isDisabled: boolean) => void
) => {
  const [isResetLocked, setIsResetLocked] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  const { reset } = useVoterContract();

  const handleResetLock = useCallback(async () => {
    try {
      setIsResetting(true);
      setTransactionStatus(TransactionStatus.IN_PROGRESS);

      if (!fromTokenId) {
        throw new Error('Token ID is not available');
      }

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

  return {
    handleResetLock,
    isResetLocked,
    isResetting,
  };
};
