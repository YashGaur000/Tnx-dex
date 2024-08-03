import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

const HoverContainer = styled.div<{ theme: DefaultTheme }>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  background: ${({ theme }) => theme.colors.cardDark};
`;

const HoverColorstyle = styled.span<{ theme: DefaultTheme; fontSize: number }>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme }) => theme.colors.title};
`;

const LockScreenHover = () => {
  return (
    <HoverContainer>
      Your Lockup Period for NFT is
      <HoverColorstyle fontSize={14}>1 Year 321 Days</HoverColorstyle>
    </HoverContainer>
  );
};

export default LockScreenHover;
