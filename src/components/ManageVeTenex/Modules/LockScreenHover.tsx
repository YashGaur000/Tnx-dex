import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

const HoverContainer = styled.div<{ theme: DefaultTheme }>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  display: block;
  align-items: center;
  position: absolute;
  text-align: center;
  width: 200px;
  height: 80px;
  padding: 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.cardDark};
  box-shadow: 0px 4px 11.4px 0px #131d3c;
  left: 70px;
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

const HoverColorstyle = styled.span<{ theme: DefaultTheme; fontSize: number }>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ fontSize }) => fontSize}px;
  background: ${({ theme }) => theme.colors.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const LockScreenHover = () => {
  return (
    <HoverContainer>
      Your Lockup Period for NFT is
      <HoverColorstyle fontSize={15}> 1 Year 321 Days</HoverColorstyle>
    </HoverContainer>
  );
};

export default LockScreenHover;
