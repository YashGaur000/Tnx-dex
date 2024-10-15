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
import { ScrollContainer } from '../../../modal/styles/TokenSelectModal.style';
import { useEffect, useState } from 'react';
import { LoadingSpinner } from '../../../common/Loader';

export const ClaimAllModle = ({ account }: { account: Address }) => {
  const { userVotedPools } = useUserVotingPosition(account);
  const { setTransactionStatus } = useRootStore();
  const [rewardToClaim, setRewardToClaim] = useState(-1);
  const [tag, setTag] = useState('');
  const [isFeeReward, setIsFeeReward] = useState(false);
  const [isBribeReward, setIsBribeReward] = useState(false);

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
    votedPools: VotedPools[],
    index: number
  ) => {
    if (index != rewardToClaim) {
      try {
        setTransactionStatus(TransactionStatus.IN_PROGRESS);
        setRewardToClaim(index);
        setTag('Bribes');

        const bribes = votedPools.flatMap((pool) => pool.bribes || []);
        const rewardTokens = votedPools.map((pool) => pool.rewardTokens || []);

        if (bribes.length === 0 || rewardTokens.length === 0) {
          setTransactionStatus(TransactionStatus.IDEAL);
          setRewardToClaim(-1);
          return;
        }

        const result = await claimBribes(bribes, rewardTokens, tokenId);
        if (result) {
          setTransactionStatus(TransactionStatus.DONE);
          setRewardToClaim(-1);
          setTimeout(() => {
            setTransactionStatus(TransactionStatus.IDEAL);
          }, TRANSACTION_DELAY);
        }
      } catch (error) {
        console.error('Error during fee claim transaction:', error);
        setTransactionStatus(TransactionStatus.FAILED);
        setRewardToClaim(-1);
      }
    }
  };

  const handleClaimFees = async (
    tokenId: bigint,
    votedPools: VotedPools[],
    index: number
  ) => {
    if (index != rewardToClaim) {
      try {
        setTransactionStatus(TransactionStatus.IN_PROGRESS);
        setRewardToClaim(index);
        setTag('Fees');

        const fees = votedPools.flatMap((pool) => pool.fees || []);
        const rewardTokens = votedPools.map((pool) => pool.rewardTokens || []);

        if (fees.length === 0 || rewardTokens.length === 0) {
          setTransactionStatus(TransactionStatus.IDEAL);
          setRewardToClaim(-1);
          return;
        }

        const result = await claimFees(fees, rewardTokens, tokenId);
        if (result) {
          setTransactionStatus(TransactionStatus.DONE);
          setRewardToClaim(-1);
          setTimeout(() => {
            setTransactionStatus(TransactionStatus.IDEAL);
          }, TRANSACTION_DELAY);
        }
      } catch (error) {
        console.error('Error during fee claim transaction:', error);
        setTransactionStatus(TransactionStatus.FAILED);
        setRewardToClaim(-1);
      }
    }
  };

  useEffect(() => {
    userVotedPools?.map(({ votedPools }) => {
      const feeReward = votedPools.some(
        (pool: VotedPools) => Number(pool.fee0) > 0 || Number(pool.fee1) > 0
      );
      const bribeReward = votedPools.some((pool: VotedPools) =>
        pool.rewardAmounts.some((rewardAmount) => Number(rewardAmount) > 0)
      );
      setIsFeeReward(feeReward);
      setIsBribeReward(bribeReward);
    });
  }, [userVotedPools]);

  return (
    <ClaimMainContainer>
      <ClaimContainer>
        <LockHeading>Your Locks</LockHeading>
        <ScrollContainer height="300px">
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
                  {isBribeReward && (
                    <DashboardNavigation
                      width="115px"
                      onClick={() =>
                        handleClaimBribes(tokenId, votedPools, index)
                      }
                    >
                      {rewardToClaim === index && tag === 'Bribes' ? (
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '15px',
                          }}
                        >
                          <LoadingSpinner width="10px" height="10px" />
                          <p>Claiming</p>
                        </div>
                      ) : (
                        <p>Claim Incentives</p>
                      )}
                    </DashboardNavigation>
                  )}
                  {isFeeReward && (
                    <DashboardNavigation
                      width="77px"
                      onClick={() =>
                        handleClaimFees(tokenId, votedPools, index)
                      }
                    >
                      {rewardToClaim === index && tag === 'Fees' ? (
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '15px',
                          }}
                        >
                          <LoadingSpinner width="10px" height="10px" />
                          <p>Claiming</p>
                        </div>
                      ) : (
                        <p>Claim Fees</p>
                      )}
                    </DashboardNavigation>
                  )}
                </ClaimLink>
              </LockData>
            </LockContainer>
          ))}
        </ScrollContainer>
      </ClaimContainer>
    </ClaimMainContainer>
  );
};
