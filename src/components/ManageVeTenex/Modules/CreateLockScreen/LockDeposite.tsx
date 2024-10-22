import React, { useState, useCallback } from 'react';
import Stepper from '../../../common/Stepper';
import { StyledDepositContainer } from '../../../Liquidity/ManageLiquidity/styles/LiquidityDeposit.style';
import { LockHeaderTitle } from '../../Styles/ManageVetenex.style';
import LockIcon from '../../../../assets/lock.png';
import SearchIcon from '../../../../assets/search.png';
import Lock1Icon from '../../../../assets/Lock1.svg';
import { StepperDataProps } from '../../../../types/Stepper';
import { ethers } from 'ethers';
import contractAddress from '../../../../constants/contract-address/address';
import { useTokenAllowance } from '../../../../hooks/useTokenAllowance';
import { GlobalButton } from '../../../common';
import { useVotingEscrowContract } from '../../../../hooks/useVotingEscrowContract';
import SucessDepositIcon from '../../../../assets/gradient-party-poper.svg';
import { testErc20Abi } from '../../../../constants/abis/testErc20';
import { LockDepositeProps } from '../../../../types/VotingEscrow';
import LockIconGr from '../../../../assets/LockSucess.svg';

import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../../types/Transaction';
import { useRootStore } from '../../../../store/root';
import { useNavigate } from 'react-router-dom';
import {
  showErrorToast,
  showSuccessToast,
} from '../../../../utils/common/toastUtils';
import { ToastContainer } from 'react-toastify';

const LockDeposite: React.FC<LockDepositeProps> = ({
  setLockTokenValue,
  SetlockDuration,
  LockTokenValue,
  LockTokenSymbol,
  LocTokenAddress,
  LockTokenDecimal,
  lockDuration,
  setSuccessLock,
  setIsApproveLock,
  setIsSliderDisabled,
}) => {
  const [isTokenAllowed, setIsTokenAllowed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLocking, setIsLocking] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const navigate = useNavigate();
  const { approveAllowance: approveAllowance } = useTokenAllowance(
    LocTokenAddress as `0x${string}`,
    testErc20Abi
  );
  const escrowAddress = contractAddress.VotingEscrow;
  const { createLock } = useVotingEscrowContract(escrowAddress);
  const { setTransactionStatus } = useRootStore();

  const handleAllowToken = async () => {
    try {
      setIsLoading(true);
      setIsSliderDisabled(true);
      const amountInWei = ethers.parseUnits(LockTokenValue, LockTokenDecimal);
      if (amountInWei && LocTokenAddress) {
        await approveAllowance(escrowAddress, amountInWei.toString());
        setIsTokenAllowed(true);
      }
    } catch (error) {
      setIsSliderDisabled(false);
      console.error('Error during token approval', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLock = useCallback(async () => {
    let transactionResult = false;
    try {
      setSuccessLock(false);
      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      if (!LockTokenValue || !isTokenAllowed) return;
      setIsLocking(true);
      const amountInWei = ethers.parseUnits(LockTokenValue, LockTokenDecimal);
      const durationInSeconds = lockDuration * 7 * 24 * 60 * 60;
      const texnresult = await createLock(amountInWei, durationInSeconds);

      if (texnresult) {
        transactionResult = true;
        void showSuccessToast('Successfully create token lock!');
      }

      setTransactionStatus(TransactionStatus.DONE);

      setTimeout(() => {
        if (transactionResult) {
          setTransactionStatus(TransactionStatus.IDEAL);
          setIsLocked(true);
          setLockTokenValue('');
          setIsTokenAllowed(false);
          setIsLocking(false);
          setIsLocked(false);
          setIsLoading(false);
          SetlockDuration(1);
          setSuccessLock(true);
          setIsApproveLock(false);
          navigate('/governance');
        }
      }, TRANSACTION_DELAY);
    } catch (error) {
      void showErrorToast('Error during token lock. Please try again.');
      //console.error('Error during token lock:', error);
    } finally {
      setIsLocking(false);
    }
  }, [
    LockTokenValue,
    isTokenAllowed,
    LockTokenDecimal,
    lockDuration,
    createLock,
    setTransactionStatus,
    setLockTokenValue,
    SetlockDuration,
    setSuccessLock,
    setIsApproveLock,
  ]);

  const LockInstructionData: StepperDataProps[] = [
    {
      step: 1,
      descriptions: {
        labels:
          'Select the amount of ' + LockTokenSymbol + ' you want to lock.',
      },
    },
    {
      step: 2,
      descriptions: {
        labels:
          'Select the number of weeks. The minimum lock time is one week, and the maximum lock time is 4 years.',
      },
    },
    {
      step: 3,
      descriptions: { labels: 'Confirm the locking!' },
    },
    {
      step: 4,
      descriptions: {
        labels: 'Your lock will be available in the dashboard.',
      },
    },
  ];

  const LockData: StepperDataProps[] = [
    {
      step: 1,
      descriptions: {
        labels: !isTokenAllowed
          ? 'Allowance not granted for ' + LockTokenSymbol
          : 'Allowed the contracts to access ' + LockTokenSymbol,
      },
      icon: !isTokenAllowed ? LockIcon : LockIconGr,
      buttons: !isTokenAllowed
        ? {
            label: isLoading ? 'Approv' : 'Allow ' + LockTokenSymbol,
            icon: Lock1Icon,
            onClick: !isLoading ? handleAllowToken : undefined,
            tooltip: 'Click to allow ' + LockTokenSymbol + ' transactions',
            disabled: isLoading,
          }
        : undefined,
    },

    {
      step: 2,
      icon: !isLocked ? SearchIcon : SucessDepositIcon,
      descriptions: {
        labels: isLocked ? 'Locked confirmed' : 'Waiting for next actions...',
      },
      actionCompleted: !isLocked,
    },
  ];

  return (
    <StyledDepositContainer>
      <ToastContainer />
      <LockHeaderTitle fontSize={24}>Lock</LockHeaderTitle>
      <Stepper data={!LockTokenValue ? LockInstructionData : LockData} />
      {isTokenAllowed && !isLocked && (
        <GlobalButton
          width="100%"
          height="48px"
          margin="0px"
          onClick={handleLock}
          disabled={isLocking}
        >
          {isLocking ? 'Locking...' : 'Lock'}
        </GlobalButton>
      )}
    </StyledDepositContainer>
  );
};

export default LockDeposite;
