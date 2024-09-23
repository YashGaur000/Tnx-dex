import DateTimeIcon from '../../../../assets/date-time-gradient.svg';
import WaitingIcon from '../../../../assets/search.png';
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
import { useCallback } from 'react';
interface ExtendStepperProps {
  tokenId: number;
  timeStampValue: number;
  selectedWeeks: number;
  votingPower: number;
}

const ExtendStepper: React.FC<ExtendStepperProps> = ({
  tokenId,
  selectedWeeks,
  votingPower,
}) => {
  const escrowAddress = contractAddress.VotingEscrow;
  const { increaseUnlockTime } = useVotingEscrowContract(escrowAddress);
  const handleExtend = useCallback(
    async (tokenId: number, duration: number): Promise<void> => {
      try {
        if (!tokenId) return;

        await increaseUnlockTime(BigInt(tokenId), BigInt(duration));

        //setWithdrawTknId(tokenId);

        //setSuccessLock(true);
      } catch (error) {
        console.error('Error during token withdrawal:', error);
      }
    },
    [increaseUnlockTime, tokenId, selectedWeeks]
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
        labels: `New estimated voting power: ${votingPower} veTENEX`,
      },
      icon: VotingPowerIcon,
    },
    {
      step: 3,
      descriptions: { labels: 'Waiting for next actions...' },
      icon: WaitingIcon,
    },
  ];

  return (
    <StyledDepositContainer>
      <LockHeaderTitle fontsize={24}>Extend Lock #{tokenId}</LockHeaderTitle>
      <SteperWrapper>
        <Stepper data={ExtendStepperData} />
        <GlobalButton
          width="100%"
          height="48px"
          margin="0px"
          onClick={() => handleExtend(tokenId, selectedWeeks)}
          //disabled={isLocking}
        >
          Extend
        </GlobalButton>
      </SteperWrapper>
      <TipsContainer>
        <ImageContainer width="24px" height="24px" src={InformIcon} />
        <LockHeaderTitle fontsize={14}>
          You can extend the lock or increase the lock amount. These actions
          will increase your voting power. The maximum lock time is 4 years!
        </LockHeaderTitle>
      </TipsContainer>
    </StyledDepositContainer>
  );
};

export default ExtendStepper;
