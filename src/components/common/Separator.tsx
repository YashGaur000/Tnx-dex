import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';

export const Separator = styled.div<{
  theme: DefaultTheme;
  top: string;
  left: string;
  width: string;
  height: string;
  leftLarge: string;
  leftMedium: string;
  displaySmall: string;
}>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  // background: ${({ theme }) => theme.colors.separator};
  background: ${({ theme }) => theme.colors.grey};
  top: ${({ top }) => top};
  bottom: 0;
  position: absolute;
  left: ${({ left }) => left};

  @media (max-width: 1200px) {
    left: ${({ leftLarge }) => leftLarge};
  }
  @media (max-width: 1024px) {
    left: ${({ leftMedium }) => leftMedium};
  }
  @media (max-width: 900px) {
    display: ${({ displaySmall }) => displaySmall};
  }
`;
