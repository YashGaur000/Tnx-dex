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
import { testErc20Abi } from '../../../../constants/abis/testErc20';

interface LockDepositeProps {
  LockTokenValue: string;
  LockTokenSymbol: string;
  LocTokenAddress: string;
  LockTokenDecimal?: number;
  lockDuration: number;
}

const LockDeposite: React.FC<LockDepositeProps> = ({
  LockTokenValue,
  LockTokenSymbol,
  LocTokenAddress,
  LockTokenDecimal,
  lockDuration,
}) => {
  const [isTokenAllowed, setIsTokenAllowed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLocking, setIsLocking] = useState(false);

  const escrowAddress = contractAddress.VotingEscrow;

  const { approveAllowance: approveAllowance } = useTokenAllowance(
    LocTokenAddress as `0x${string}`,
    testErc20Abi
  );

  const { createLock } = useVotingEscrowContract(escrowAddress);

  const handleAllowToken = async () => {
    try {
      setIsLoading(true);
      const amountInWei = ethers.parseUnits(LockTokenValue, LockTokenDecimal);
      if (amountInWei && LocTokenAddress) {
        await approveAllowance(escrowAddress, amountInWei.toString());
        setIsTokenAllowed(true);
      }
    } catch (error) {
      console.error('Error during token approval', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLock = useCallback(async () => {
    try {
      if (!LockTokenValue || !isTokenAllowed) return;
      setIsLocking(true);
      const amountInWei = ethers.parseUnits(LockTokenValue, LockTokenDecimal);
      const durationInSeconds = lockDuration * 7 * 24 * 60 * 60;
      const tx = await createLock(amountInWei, durationInSeconds);
      console.log('Transaction successful:', tx);
    } catch (error) {
      console.error('Error during token lock:', error);
    } finally {
      setIsLocking(false);
    }
  }, [
    LockTokenValue,
    isTokenAllowed,
    LockTokenDecimal,
    lockDuration,
    createLock,
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
      descriptions: { labels: 'Allowance not granted for ' + LockTokenSymbol },
      icon: LockIcon,
      buttons: !isTokenAllowed
        ? {
            label: isLoading ? 'Approving...' : 'Allow ' + LockTokenSymbol,
            icon: Lock1Icon,
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick: !isLoading ? handleAllowToken : undefined,
            tooltip: 'Click to allow ' + LockTokenSymbol + ' transactions',
            disabled: isLoading,
          }
        : undefined,
    },
    {
      step: 2,
      descriptions: { labels: 'Waiting for next actions...' },
      icon: SearchIcon,
      actionCompleted: isLoading,
    },
  ];

  return (
    <StyledDepositContainer height="296px">
      <LockHeaderTitle fontSize={24}>Lock</LockHeaderTitle>
      <Stepper data={!LockTokenValue ? LockInstructionData : LockData} />
      {isTokenAllowed && (
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
