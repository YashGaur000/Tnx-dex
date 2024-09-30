import DateTimeIcon from '../../../../assets/date-time-gradient.svg';
import WaitingIcon from '../../../../assets/search.png';
import SucessDepositIcon from '../../../../assets/gradient-party-poper.svg';
import VotingPowerIcon from '../../../../assets/star-gradient.svg';
import InformIcon from '../../../../assets/information.svg';
import { SteperWrapper, TipsContainer } from '../styles/Extendlock.style';
import { StepperDataProps } from '../../../../types/Stepper';
import Stepper from '../../../common/Stepper';
import { StyledDepositContainer } from '../../../Liquidity/ManageLiquidity/styles/LiquidityDeposit.style';
import {
  ImageContainer,
  LockHeaderTitle,
} from '../../../ManageVeTenex/Styles/ManageVetenex.style';
import { GlobalButton } from '../../../common';
import { useVotingEscrowContract } from '../../../../hooks/useVotingEscrowContract';
import contractAddress from '../../../../constants/contract-address/address';
import { useCallback, useState } from 'react';
import { ExtendStepperProps } from '../../../../types/VotingEscrow';

const ExtendStepper: React.FC<ExtendStepperProps> = ({
  tokenId,
  selectedWeeks,
  votingPower,
  setSuccessLock,
  isExtendDisable,
}) => {
  const escrowAddress = contractAddress.VotingEscrow;
  const { increaseUnlockTime } = useVotingEscrowContract(escrowAddress);
  const [isExtending, setIsExtending] = useState(false);
  const [isExtend, setIsExtend] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleExtend = useCallback(
    async (tokenId: number, duration: number): Promise<void> => {
      try {
        if (!tokenId) return;
        setIsExtending(true);
        setError(null);
        const durationInSeconds = duration * 7 * 24 * 60 * 60;
        await increaseUnlockTime(tokenId, durationInSeconds);
        setSuccessLock(true);
        setIsExtend(true);
      } catch (error) {
        console.error('Error during lock extension:', error);
        setError('Failed to extend lock. Please try again.');
      } finally {
        setIsExtending(false);
      }
    },
    [increaseUnlockTime]
  );

  const ExtendStepperData: StepperDataProps[] = [
    {
      step: 1,
      descriptions: { labels: `New lock time for ${selectedWeeks} weeks` },
      icon: DateTimeIcon,
    },
    {
      step: 2,
      descriptions: {
        labels: `New estimated voting power: ${votingPower.toLocaleString()} veTENEX`,
      },
      icon: VotingPowerIcon,
    },
    {
      step: 3,
      descriptions: {
        labels: isExtend
          ? 'Extend lock confirmed'
          : 'Waiting for next actions...',
      },
      icon: !isExtend ? WaitingIcon : SucessDepositIcon,
      actionCompleted: !isExtend,
    },
  ];

  return (
    <StyledDepositContainer>
      <LockHeaderTitle fontSize={24}>Extend Lock #{tokenId}</LockHeaderTitle>
      <SteperWrapper>
        <Stepper data={ExtendStepperData} />
        {!isExtend && !isExtendDisable && (
          <GlobalButton
            width="100%"
            height="48px"
            margin="0px"
            onClick={() => handleExtend(tokenId, selectedWeeks)}
            disabled={isExtending && !isExtendDisable}
          >
            {isExtending ? 'Extending...' : 'Extend'}
          </GlobalButton>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </SteperWrapper>
      <TipsContainer>
        <ImageContainer width="24px" height="24px" src={InformIcon} />
        <LockHeaderTitle fontSize={14}>
          You can extend the lock or increase the lock amount. These actions
          will increase your voting power. The maximum lock time is 4 years!
        </LockHeaderTitle>
      </TipsContainer>
    </StyledDepositContainer>
  );
};

export default ExtendStepper;
