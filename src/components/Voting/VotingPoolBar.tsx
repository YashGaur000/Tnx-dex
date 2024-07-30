import React from 'react';
import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { DefaultTheme } from '../../styles/Theme';
import { GradientSpan } from '../Homepage/HeroSection';
import SearchBar from '../SearchBar';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import questionmark from '../../assets/question-mark.png';

const VotingPoolContainer = styled.div<{ theme: DefaultTheme }>`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

// const VotingPoolBox = styled.div<{ theme: DefaultTheme }>`
//   display: flex;
//   line-height: 40px;
//   padding: 10px;
// `;

const PoolTitleBox = styled.div<{ theme: DefaultTheme }>`
  margin-top: 20px;
  display: flex;
`;

export const Title = styled.p<{ fontSize: number; theme: DefaultTheme }>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const VotingBarBox = styled.div<{ theme: DefaultTheme }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
`;

const VotingTabBar = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  gap: 20px;
`;

const VotingTabBar2 = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  gap: 20px;
  justify-content: left;
  margin-left: 140px;
`;

export const VotingAllPoolsTabs = styled.button<{
  isconnected?: string;
  theme: DefaultTheme;
  Width: number;
}>`
  padding: 4px;
  justify-content: center;
  display: flex;
  width: ${({ Width }) => Width}%;
  border: 2px solid transparent;
  border-radius: 12px;
  background: ${({ theme, isconnected }) =>
      isconnected === 'true'
        ? theme.colors.buttonBackground
        : theme.colors.background},
    ${({ theme, isconnected }) =>
      isconnected === 'true'
        ? theme.colors.background
        : theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  cursor: pointer;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 29.9px;
  letter-spacing: 0.02em;
  text-align: center;

  color: ${({ theme, isconnected }) =>
    isconnected === 'true' ? theme.colors.text : theme.colors.buttonBackground};
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonBackground};
    color: ${({ theme }) => theme.colors.text};
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
  }

  &:hover span {
    background: white;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    padding: 10px 30px;
    font-size: 18px;
  }
`;

const VotingPoolsTooltip = styled.img`
  width: 21.19px;
  height: 21.19px;
  margin-left: 15px;
  margin-top: 7px;
`;

// const IconsBox = styled.div<{ theme: DefaultTheme }>``;

// const Icons = styled.div<{ theme: DefaultTheme }>``;

const VotingPoolBar: React.FC = () => {
  return (
    <VotingPoolContainer>
      <PoolTitleBox>
        <Title fontSize={24}>Voting Pools</Title>
        <VotingPoolsTooltip src={questionmark} alt="QuestionMark Logo" />
      </PoolTitleBox>
      <VotingBarBox>
        <VotingTabBar>
          <VotingAllPoolsTabs Width={16}>
            <GradientSpan fontSize={16}>Most Rewarded</GradientSpan>
          </VotingAllPoolsTabs>
          <VotingAllPoolsTabs Width={16}>
            <GradientSpan fontSize={16}>Least Rewarded</GradientSpan>
          </VotingAllPoolsTabs>
          <VotingAllPoolsTabs Width={12}>
            <GradientSpan fontSize={16}>All Pools</GradientSpan>
          </VotingAllPoolsTabs>
        </VotingTabBar>
        <VotingTabBar2>
          <VotingAllPoolsTabs Width={15}>
            <GradientSpan fontSize={16}>
              Active <FontAwesomeIcon icon={faChevronDown} />
            </GradientSpan>
          </VotingAllPoolsTabs>
          <SearchBar></SearchBar>
        </VotingTabBar2>
      </VotingBarBox>
    </VotingPoolContainer>
  );
};

export default VotingPoolBar;
