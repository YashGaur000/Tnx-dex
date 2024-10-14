import { useEffect } from 'react';
import { TransactionStatus } from '../types/Transaction';

const useTransactionWarning = (transactionStatus: TransactionStatus) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (transactionStatus === TransactionStatus.IN_PROGRESS) {
        // Show a confirmation dialog before page unload
        event.preventDefault();
        event.returnValue =
          'A transaction is in progress. Are you sure you want to leave?';
      }
    };

    const handleBackButton = () => {
      if (transactionStatus === TransactionStatus.IN_PROGRESS) {
        // Prevent navigation using the back button and show a confirmation dialog
        const confirmationMessage =
          'A transaction is in progress. Are you sure you want to leave?';
        if (!window.confirm(confirmationMessage)) {
          // Push the current location again to prevent navigation if the user cancels
          window.history.pushState(null, '', window.location.href);
        }
      }
    };

    if (transactionStatus === TransactionStatus.IN_PROGRESS) {
      window.addEventListener('beforeunload', handleBeforeUnload);
      window.addEventListener('popstate', handleBackButton);
      window.history.pushState(null, '', window.location.href);
    }

    // Cleanup the event listeners when the transaction ends
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [transactionStatus]);
};

export default useTransactionWarning;
