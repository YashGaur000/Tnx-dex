import React, { useState } from 'react';
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
  VotingActiveTabs,
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
  const [activeTab, setActiveTab] = useState('Most Rewarded');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderTab = (tabName: string) => (
    <VotingAllPoolsTabs
      Width="14"
      onClick={() => handleTabClick(tabName)}
      style={{
        color: activeTab === tabName ? 'black' : 'rgba(255, 255, 255, 0)',
        border: '1px solid white',
        background:
          activeTab === tabName
            ? 'linear-gradient(188.32deg, #47FF99 -7.09%, #3EACFC 99.48%)'
            : 'transparent',
      }}
    >
      <GradientSpan fontSize={14} isActive={activeTab === tabName}>
        {tabName}
      </GradientSpan>
    </VotingAllPoolsTabs>
  );
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
                <TooltipText fontSize="12px" lineHeight="23.92px">
                  $veTENEX holders decide which liquidity pools receive $TENEX
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
          {renderTab('Most Rewarded')}
          {renderTab('Least Rewarded')}
          {renderTab('All Pools')}
        </VotingTabBar>
        <VotingTabBar2>
          <VotingActiveTabs Width="14">
            <GradientSpan fontSize={14}>
              Active <FontAwesomeIcon icon={faChevronDown} />
            </GradientSpan>
          </VotingActiveTabs>
          <SearchBarWrapper>
            <SearchBar />
          </SearchBarWrapper>
        </VotingTabBar2>
      </VotingBarBox>
    </VotingPoolContainer>
  );
};

export default VotingPoolBar;
