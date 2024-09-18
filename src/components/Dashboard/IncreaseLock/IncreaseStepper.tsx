import { StepperDataProps } from '../../../types/Stepper';
import Stepper from '../../common/Stepper';
import { StyledDepositContainer } from '../../Liquidity/ManageLiquidity/styles/LiquidityDeposit.style';
import { LockHeaderTitle } from '../../ManageVeTenex/Styles/ManageVetenex.style';
import VotingPowerIcon from '../../../assets/star-gradient.svg';
import LockIcon from '../../../assets/LockSucess.svg';
import WaitingIcon from '../../../assets/search.png';
import { GlobalButton } from '../../common';
import { useCallback, useState } from 'react';
import { useVotingEscrowContract } from '../../../hooks/useVotingEscrowContract';
import contractAddress from '../../../constants/contract-address/address';
import { ethers } from 'ethers';
import { useTokenAllowance } from '../../../hooks/useTokenAllowance';
import { locktokeninfo } from '../../../utils/common/voteTenex';
import { TokenInfo } from '../../../constants/tokens';
import { testErc20Abi } from '../../../constants/abis/testErc20';
import { useRootStore } from '../../../store/root';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../types/Transaction';

interface LockIncreaseProps {
  tokenId: number;
  additionalAmount: number;
  setAdditionalAmount?: (input: string) => void;
}

const IncreaseStepper: React.FC<LockIncreaseProps> = ({
  tokenId,
  additionalAmount,
  //setAdditionalAmount
}) => {
  console.log('additionalAmount', additionalAmount);
  const { increaseLockAmount } = useVotingEscrowContract(
    contractAddress.VotingEscrow
  );
  const { setTransactionStatus } = useRootStore();
  const tokenLockInfo: TokenInfo = locktokeninfo();
  const { approveAllowance: approveAllowance } = useTokenAllowance(
    tokenLockInfo.address,
    testErc20Abi
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTokenAllowed, setIsTokenAllowed] = useState<boolean>(false);
  const [isLocking, setIsLocking] = useState<boolean>(false);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const escrowAddress = contractAddress.VotingEscrow;

  const handleAllowToken = async () => {
    try {
      setIsLoading(true);
      const amountInWei = ethers.parseUnits(
        additionalAmount.toString(),
        tokenLockInfo.decimals
      );
      if (amountInWei) {
        await approveAllowance(escrowAddress, amountInWei.toString());
        setIsTokenAllowed(true);
      }
    } catch (error) {
      console.error('Error during token approval', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleIncreaseLock = useCallback(async () => {
    try {
      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      console.log('increse amount:', additionalAmount);
      console.log('tokenId:', tokenId);

      setIsLocking(true);
      console.log('increse string amount:', additionalAmount.toString());
      const amountInWei = ethers.parseUnits(
        additionalAmount.toString(),
        tokenLockInfo.decimals
      );
      console.log('increse amountInWei amount:', amountInWei);
      await increaseLockAmount(BigInt(tokenId), amountInWei);

      //setAdditionalAmount('')
      console.log('Lock increased!');
      setIsLocked(true);
      setTransactionStatus(TransactionStatus.DONE);

      setTimeout(() => {
        setTransactionStatus(TransactionStatus.IDEAL);
        //setAdditionalAmount('')
        //setLockTokenValue('');
        // SetlockDuration(1);
        // setSuccessLock(true);
      }, TRANSACTION_DELAY);
    } catch (error) {
      console.error('Error increasing lock:', error);
    } finally {
      setIsLocking(false);
    }
  }, [tokenId, additionalAmount, increaseLockAmount]);

  const IncreaseStepperData: StepperDataProps[] = [
    {
      step: 1,
      descriptions: { labels: 'Depositing ' + tokenLockInfo.symbol },
      icon: LockIcon,
    },
    {
      step: 2,
      descriptions: { labels: 'New estimated voting power 50.0 veTENEX' },
      icon: VotingPowerIcon,
    },

    {
      step: 3,
      descriptions: {
        labels: 'Allowed the contracts to access ' + tokenLockInfo.symbol,
      },
      icon: LockIcon,
    },
    {
      step: 4,
      descriptions: { labels: 'Waiting for next actions...' },
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
      descriptions: { labels: 'New estimated voting power 50.0 veTENEX' },
      icon: VotingPowerIcon,
    },
    {
      step: 3,
      descriptions: {
        labels: 'Allowed the contracts to access ' + tokenLockInfo.symbol,
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
      descriptions: { labels: 'Waiting for next actions...' },
      icon: WaitingIcon,
    },
  ];

  return (
    <StyledDepositContainer>
      <LockHeaderTitle fontSize={24}>Increase lock</LockHeaderTitle>
      <Stepper data={!additionalAmount ? IncreaseStepperData : LockData} />
      {isTokenAllowed && !isLocked && (
        <GlobalButton
          width="100%"
          height="48px"
          margin="0px"
          onClick={handleIncreaseLock}
        >
          {isLocking ? 'Incresing...' : 'Increse'}
        </GlobalButton>
      )}
    </StyledDepositContainer>
  );
};

export default IncreaseStepper;
