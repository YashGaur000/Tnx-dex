import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const HoverContainer = styled.div<{
  theme: DefaultTheme;
  width?: string;
  height?: string;
  Top?: string;
  left?: string;
}>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  display: block;
  align-items: center;
  position: absolute;
  text-align: center;
  width: ${({ width }) => width ?? '200px'};
  height: ${({ height }) => height ?? '80px'};
  padding: 20px;
  border-radius: 10px;
  overflow: visible;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0px 4px 11.4px 0px #131d3c;
  left: ${({ left }) => left ?? '100'};
  top: ${({ Top }) => Top ?? '100'};
  color: ${({ theme }) => theme.colors.whiteBorder};
  z-index: 99999;
`;

export const HoverColorstyle = styled.span<{
  theme: DefaultTheme;
  fontSize: number;
}>`
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
