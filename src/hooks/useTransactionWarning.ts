import { useEffect } from 'react';
import { TransactionStatus } from '../types/Transaction';

const useTransactionWarning = (transactionStatus: TransactionStatus) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (transactionStatus === TransactionStatus.IN_PROGRESS) {
        // Show a confirmation dialog
        event.preventDefault();
        event.returnValue = ''; // For the confirmation dialog in some browsers
      }
    };

    // Add the event listener when the transaction starts
    if (transactionStatus === TransactionStatus.IN_PROGRESS) {
      window.addEventListener('beforeunload', handleBeforeUnload);
    }

    // Cleanup the event listener when the transaction ends
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [transactionStatus]);
};

export default useTransactionWarning;
