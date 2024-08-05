import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const LockScreenContainer = styled.section<{ theme: DefaultTheme }>`
  width: 100%;
  padding: 40px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  text-align: left;

  @media only screen and (max-width: 900px) {
    padding: 20px;
  }
  @media only screen and (max-width: 600px) {
    padding: 5px;
  }
  display: flex;

  flex-direction: column;
`;
export const Cardstyle = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.card};
  padding: 20px;
  border-radius: 10px;
`;

export const HeaderTitle = styled.label<{
  theme: DefaultTheme;
  fontSize: number;
}>`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

export const DescriptonTitle = styled.p<{
  theme: DefaultTheme;
  fontSize: number;
}>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme }) => theme.colors.greyDark};
`;
