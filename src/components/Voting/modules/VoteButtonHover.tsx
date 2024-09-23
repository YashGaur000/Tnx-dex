import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

import { DashboardNavigation } from '../../Dashboard/Index/styles/DashBoard.styled';
import { useNavigate } from 'react-router-dom';

const HoverContainer = styled.div<{ theme: DefaultTheme }>`
  position: absolute;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0px 4px 11.4px 0px #131d3c;
  width: 184px;
  right: 0px;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: center;
  border-radius: 16px;
  padding: 16px;
  z-index: 10001;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: normal;
`;
const HoverTitle = styled.div<{ theme: DefaultTheme }>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  text-align: left;
`;

const VoteButtonHover = () => {
  const Navigate = useNavigate();
  const handleVoteButton = () => {
    Navigate('/governance/create');
  };
  return (
    <HoverContainer>
      <HoverTitle>
        You need to create a Lock in order to start voting. Locking will give
        you an NFT, also referred to as a veNFT
      </HoverTitle>

      <DashboardNavigation onClick={handleVoteButton}>
        Start Voting{' '}
      </DashboardNavigation>
    </HoverContainer>
  );
};

export default VoteButtonHover;
