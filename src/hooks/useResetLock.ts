import { useCallback, useState } from 'react';
import { TransactionStatus, TRANSACTION_DELAY } from '../types/Transaction';
import { useVoterContract } from './useVoterContract';
import { useRootStore } from '../store/root';

export const useResetLock = (
  fromTokenId: number,
  setIsModalDisable: (isDisabled: boolean) => void
) => {
  const [isResetLocked, setIsResetLocked] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);
  const { setTransactionStatus } = useRootStore();

  const { reset } = useVoterContract();

  const handleResetLock = useCallback(async () => {
    try {
      setIsResetting(true);
      setTransactionStatus(TransactionStatus.IN_PROGRESS);

      if (!fromTokenId) {
        throw new Error('Token ID is not available');
      }

      setIsModalDisable(true);

      await reset(BigInt(fromTokenId));

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
      setTransactionStatus(TransactionStatus.FAILED);
      console.error('Error during reset:', error);
    }
  }, [fromTokenId, reset, setTransactionStatus, setIsModalDisable]);

  return {
    handleResetLock,
    isResetLocked,
    isResetting,
  };
};
