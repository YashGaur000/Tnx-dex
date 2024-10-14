import { StepperDataProps } from '../../../types/Stepper';
import Stepper from '../../common/Stepper';
import { StyledDepositContainer } from '../../Liquidity/ManageLiquidity/styles/LiquidityDeposit.style';
import { LockHeaderTitle } from '../../ManageVeTenex/Styles/ManageVetenex.style';
import VotingPowerIcon from '../../../assets/star-gradient.svg';
import LockIcon from '../../../assets/LockSucess.svg';
import LockIconRed from '../../../assets/lock.png';
import WaitingIcon from '../../../assets/search.png';
import { GlobalButton } from '../../common';
import { useCallback, useState } from 'react';
import { useVotingEscrowContract } from '../../../hooks/useVotingEscrowContract';
import contractAddress from '../../../constants/contract-address/address';
import { ethers } from 'ethers';
import { useTokenAllowance } from '../../../hooks/useTokenAllowance';
import { locktokeninfo } from '../../../utils/common/voteTenex';
import { TokenInfo } from '../../../constants/tokens/type';
import { testErc20Abi } from '../../../constants/abis/testErc20';
import { useRootStore } from '../../../store/root';
import SucessDepositIcon from '../../../assets/gradient-party-poper.svg';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../types/Transaction';
import { LockIncreaseProps } from '../../../types/VotingEscrow';
import { useVoterContract } from '../../../hooks/useVoterContract';
import {
  showSuccessToast,
  showErrorToast,
} from '../../../utils/common/toastUtils';
import { useNavigate } from 'react-router-dom';
const IncreaseStepper: React.FC<LockIncreaseProps> = ({
  tokenId,
  additionalAmount,
  totalVotingPower,
  setSuccessLock,
  setAdditionalAmount,
  setIsApproveLock,
}) => {
  const { increaseLockAmount } = useVotingEscrowContract(
    contractAddress.VotingEscrow
  );
  const { setTransactionStatus, transactionStatus } = useRootStore();
  const tokenLockInfo: TokenInfo = locktokeninfo();
  const { approveAllowance: approveAllowance } = useTokenAllowance(
    tokenLockInfo.address,
    testErc20Abi
  );
  const { poke } = useVoterContract();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTokenAllowed, setIsTokenAllowed] = useState<boolean>(false);
  const [isLocking, setIsLocking] = useState<boolean>(false);
  const [isPokeDisplay, setPokeDisplay] = useState<boolean>(false);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const escrowAddress = contractAddress.VotingEscrow;
  const navigate = useNavigate();
  const handleAllowToken = async () => {
    try {
      setIsLoading(true);
      setIsApproveLock(true);
      const amountInWei = ethers.parseUnits(
        additionalAmount.toString(),
        tokenLockInfo.decimals
      );
      if (amountInWei) {
        await approveAllowance(escrowAddress, amountInWei.toString());
        setIsTokenAllowed(true);
      }
    } catch (error) {
      setIsApproveLock(false);
      console.error('Error during token approval', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleIncreaseLock = useCallback(async () => {
    try {
      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      setSuccessLock(false);
      setIsLocking(true);
      const amountInWei = ethers.parseUnits(
        additionalAmount.toString(),
        tokenLockInfo.decimals
      );
      await increaseLockAmount(BigInt(tokenId), amountInWei);
      setIsApproveLock(false);
      setTransactionStatus(TransactionStatus.DONE);
      setTimeout(() => {
        setIsTokenAllowed(false);
        setIsLocking(false);
        setSuccessLock(true);
        setPokeDisplay(true);
        setAdditionalAmount('');
        setTransactionStatus(TransactionStatus.IDEAL);
      }, TRANSACTION_DELAY);
    } catch (error) {
      console.error('Error increasing lock:', error);
      setIsLocked(false);
    } finally {
      setIsLocking(false);
    }
  }, [
    tokenId,
    additionalAmount,
    increaseLockAmount,
    setTransactionStatus,
    tokenLockInfo.decimals,
    setAdditionalAmount,
    setSuccessLock,
  ]);

  const handlePoke = async () => {
    try {
      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      const tknId = BigInt(Number(tokenId));
      await poke(tknId);
      setTransactionStatus(TransactionStatus.DONE);
      setTimeout(() => {
        setTransactionStatus(TransactionStatus.IDEAL);
        setPokeDisplay(false);
      }, TRANSACTION_DELAY);
      await showSuccessToast('Poked successfully for voting weight.');
      navigate('/governance');
    } catch (error) {
      setPokeDisplay(true);
      setTransactionStatus(TransactionStatus.FAILED);
      console.error('Error during poke action:', error);
      await showErrorToast('Failed to poke the voting weight.');
    }
  };

  const IncreaseStepperData: StepperDataProps[] = [
    {
      step: 1,
      descriptions: { labels: 'Depositing ' + tokenLockInfo.symbol },
      icon: LockIcon,
    },
    {
      step: 2,
      descriptions: {
        labels: `New estimated voting power ${totalVotingPower} veTENEX`,
      },
      icon: VotingPowerIcon,
    },

    {
      step: 3,
      descriptions: {
        labels: !isTokenAllowed
          ? 'Allowance not granted for ' + tokenLockInfo.symbol
          : 'Allowed the contracts to access ' + tokenLockInfo.symbol,
      },
      icon: !isTokenAllowed ? LockIconRed : LockIcon,
    },
    {
      step: 4,
      descriptions: {
        labels: 'Waiting for next actions...',
      },

      icon: WaitingIcon,
    },
  ];

  const LockData: StepperDataProps[] = [
    {
      step: 1,
      descriptions: { labels: 'Depositing ' + tokenLockInfo.symbol },
      icon: LockIcon,
    },
    {
      step: 2,
      descriptions: {
        labels: `New estimated voting power ${totalVotingPower} veTENEX`,
      },
      icon: VotingPowerIcon,
    },
    {
      step: 3,
      descriptions: {
        labels: !isTokenAllowed
          ? 'Allowance not granted for ' + tokenLockInfo.symbol
          : 'Allowed the contracts to access ' + tokenLockInfo.symbol,
      },
      icon: LockIcon,
      buttons: !isTokenAllowed
        ? {
            label: isLoading ? 'Approv' : 'Allow ' + tokenLockInfo.symbol,
            icon: tokenLockInfo.logoURI,
            onClick: !isLoading ? handleAllowToken : undefined,
            tooltip: 'Click to allow ' + tokenLockInfo.symbol + ' transactions',
            disabled: isLoading,
          }
        : undefined,
    },
    {
      step: 4,
      descriptions: {
        labels: isLocked
          ? 'Increase lock confirmed'
          : 'Waiting for next actions...',
      },
      actionCompleted: !isLocked,

      icon: !isLocked ? WaitingIcon : SucessDepositIcon,
    },
  ];

  return (
    <StyledDepositContainer>
      <LockHeaderTitle fontSize={24}>Increase lock</LockHeaderTitle>
      <Stepper
        data={!additionalAmount && !isLocked ? IncreaseStepperData : LockData}
      />
      {isTokenAllowed && !isLocked && (
        <GlobalButton
          width="100%"
          height="48px"
          margin="0px"
          onClick={handleIncreaseLock}
          disabled={isLocking}
        >
          {isLocking ? 'Increasing...' : 'Increase'}
        </GlobalButton>
      )}

      {isPokeDisplay && (
        <GlobalButton
          width="30%"
          height="40px"
          margin="0px"
          onClick={handlePoke}
          disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
        >
          {isLocking ? 'Poke...' : 'Poke'}
        </GlobalButton>
      )}
    </StyledDepositContainer>
  );
};

export default IncreaseStepper;
