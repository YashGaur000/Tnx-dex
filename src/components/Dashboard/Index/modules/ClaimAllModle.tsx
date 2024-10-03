import {
  ClaimContainer,
  ClaimLink,
  ClaimMainContainer,
} from '../styles/ClaimAllModle.styled';
import {
  LockContainer,
  LockData,
  LockHeading,
  Paragraph,
} from '../styles/DashBoardLocks.styled';
import { CardLogo } from '../styles/DepositAndStake.styled';
import tenxLogo from '../../../../assets/Tenex.png';
import icon from '../../../../assets/unlock.svg';
import { DashboardNavigation } from '../styles/DashBoard.styled';
import { useUserVotingPosition } from '../../../../hooks/useUserVotingPosition';
import { Address } from 'viem';
import { Metadata } from '../../../../types/VotingEscrow';
import { useRootStore } from '../../../../store/root';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../../types/Transaction';
import { useVoterContract } from '../../../../hooks/useVoterContract';
import { VotedPools } from '../../../../types/Voter';

const ClaimAllModle = ({ account }: { account: Address }) => {
  const { userVotedPools } = useUserVotingPosition(account);
  const { setTransactionStatus } = useRootStore();

  const { claimBribes, claimFees } = useVoterContract();

  const getLockedInfo = (metadata: Metadata) => {
    const lockedValue = metadata?.attributes.find(
      (attr) => attr.trait_type === 'Locked VELO'
    )?.value;
    const lockedDuration = metadata?.attributes.find(
      (attr) => attr.trait_type === 'Unlock Date'
    )?.value;
    return {
      lockedValue,
      lockedDuration,
    };
  };

  const handleClaimBribes = async (
    tokenId: bigint,
    votedPools: VotedPools[]
  ) => {
    try {
      setTransactionStatus(TransactionStatus.IN_PROGRESS);

      const bribes = votedPools.flatMap((pool) => pool.bribes || []);
      const rewardTokens = votedPools.map((pool) => pool.rewardTokens || []);

      if (bribes.length === 0 || rewardTokens.length === 0) {
        setTransactionStatus(TransactionStatus.IDEAL);
        return;
      }

      const result = await claimBribes(bribes, rewardTokens, tokenId);
      if (result) {
        setTransactionStatus(TransactionStatus.DONE);
      }
      setTimeout(
        () => setTransactionStatus(TransactionStatus.IDEAL),
        TRANSACTION_DELAY
      );
    } catch (error) {
      console.error('Error during fee claim transaction:', error);
    }
  };

  const handleClaimFees = async (tokenId: bigint, votedPools: VotedPools[]) => {
    try {
      setTransactionStatus(TransactionStatus.IN_PROGRESS);

      const fees = votedPools.flatMap((pool) => pool.fees || []);
      const rewardTokens = votedPools.map((pool) => pool.rewardTokens || []);

      if (fees.length === 0 || rewardTokens.length === 0) {
        setTransactionStatus(TransactionStatus.IDEAL);
        return;
      }

      const result = await claimFees(fees, rewardTokens, tokenId);
      if (result) {
        setTransactionStatus(TransactionStatus.DONE);
      }
      setTimeout(
        () => setTransactionStatus(TransactionStatus.IDEAL),
        TRANSACTION_DELAY
      );
    } catch (error) {
      console.error('Error during fee claim transaction:', error);
    }
  };

  return (
    <ClaimMainContainer>
      <ClaimContainer>
        <LockHeading>Your Locks</LockHeading>
        {userVotedPools?.map(({ tokenId, metadata, votedPools }, index) => (
          <LockContainer key={index}>
            <CardLogo>
              <img src={tenxLogo} alt="" />
            </CardLogo>
            <LockData>
              <LockHeading>
                Lock #{Number(tokenId)} <img src={icon} />
              </LockHeading>
              <ClaimLink>
                <Paragraph>
                  {getLockedInfo(metadata).lockedValue} TENEX locked for{' '}
                  {getLockedInfo(metadata).lockedDuration}
                </Paragraph>
                <DashboardNavigation
                  width="115px"
                  onClick={() => handleClaimBribes(tokenId, votedPools)}
                >
                  Claim Incentives
                </DashboardNavigation>
                <DashboardNavigation
                  width="77px"
                  onClick={() => handleClaimFees(tokenId, votedPools)}
                >
                  Claim Fees
                </DashboardNavigation>
              </ClaimLink>
            </LockData>
          </LockContainer>
        ))}
      </ClaimContainer>
    </ClaimMainContainer>
  );
};

export default ClaimAllModle;
