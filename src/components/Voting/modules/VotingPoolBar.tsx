import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import questionmark from '../../../assets/question-mark.png';
import SearchBar from '../../SearchBar';
import {
  InstructionRewardsBox,
  PoolTitleBox,
  SearchBarWrapper,
  Title,
  TooltipBox,
  TooltipContainerHover,
  TooltipsQuadrant1,
  TooltipsQuadrant2,
  TooltipsQuadrant3,
  TooltipsQuadrant4,
  TooltipText,
  TriggerElement,
  VotingAllPoolsTabs,
  VotingBarBox,
  VotingPoolContainer,
  VotingPoolsTooltip,
  VotingTabBar,
  VotingTabBar2,
  VotingTimelineBox,
} from '../styles/VotingPoolBar.style';
import { GradientSpan } from '../../common/Buttons/GradientButton';

const VotingPoolBar: React.FC = () => {
  return (
    <VotingPoolContainer>
      <PoolTitleBox>
        <Title fontSize="20px">Voting Pools</Title>
        <TooltipContainerHover>
          <TriggerElement>
            <VotingPoolsTooltip src={questionmark} alt="QuestionMark Logo" />
          </TriggerElement>
          <TooltipBox>
            <VotingTimelineBox>
              <TooltipsQuadrant1>
                <TooltipText fontSize="20px">Voting</TooltipText>
                <TooltipText fontSize="12px">
                  veTENEX holders decide which liquidity pools receive $TENEX
                  emissions. In return, voters receive 100% of the trading fees
                  and incentives collected from the liquidity pool they vote
                  for.
                </TooltipText>
              </TooltipsQuadrant1>
              <TooltipsQuadrant2>
                <TooltipText fontSize="20px">Timeline</TooltipText>
                <TooltipText fontSize="12px">
                  <p>
                    Votes for the next epoch are due by Wednesday at 23:00 UTC,
                    1 hour before the next epoch begins. During the following
                    two hours, no voting operations will take place as this time
                    is reserved for protocol operations/automations.
                  </p>
                </TooltipText>
              </TooltipsQuadrant2>
            </VotingTimelineBox>
            <InstructionRewardsBox>
              <TooltipsQuadrant3>
                <TooltipText fontSize="20px">Instructions</TooltipText>
                <TooltipText fontSize="12px">
                  Distribute 100% of your Locks (veNFT) vote-power
                  <br /> among your preferred pools and cast your vote. Repeat
                  <br /> for each of your Locks (veNFTs). Unallocated vote-power
                  <br /> (if 100%) will be split proportionally among the
                  <br /> selected pools. Each Lock (veNFT) can only cast votes
                  once per epoch. If you increased your Locks (veNFT) balance
                  during the epoch, recast your vote to allocate your vote-power
                  in full. Unchanged votes carry over into the next epoch.
                </TooltipText>
              </TooltipsQuadrant3>
              <TooltipsQuadrant4>
                <TooltipText fontSize="20px">Rewards</TooltipText>
                <TooltipText fontSize="12px">
                  Voting rewards for a given epoch will appear in your Dashboard
                  after the epoch change on Thursday at 00:00 UTC. Rebase
                  rewards for new locks will appear after the second epoch
                  change.
                </TooltipText>
              </TooltipsQuadrant4>
            </InstructionRewardsBox>
          </TooltipBox>
        </TooltipContainerHover>
      </PoolTitleBox>
      <VotingBarBox>
        <VotingTabBar>
          <VotingAllPoolsTabs Width="14">
            <GradientSpan fontSize={14}>Most Rewarded</GradientSpan>
          </VotingAllPoolsTabs>
          <VotingAllPoolsTabs Width="14">
            <GradientSpan fontSize={14}>Least Rewarded</GradientSpan>
          </VotingAllPoolsTabs>
          <VotingAllPoolsTabs Width="14">
            <GradientSpan fontSize={14}>All Pools</GradientSpan>
          </VotingAllPoolsTabs>
        </VotingTabBar>
        <VotingTabBar2>
          <VotingAllPoolsTabs Width="14">
            <GradientSpan fontSize={14}>
              Active <FontAwesomeIcon icon={faChevronDown} />
            </GradientSpan>
          </VotingAllPoolsTabs>
          <SearchBarWrapper>
            <SearchBar />
          </SearchBarWrapper>
        </VotingTabBar2>
      </VotingBarBox>
    </VotingPoolContainer>
  );
};

export default VotingPoolBar;
