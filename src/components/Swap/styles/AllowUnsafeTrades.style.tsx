import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const SlippageWrapper = styled.div<{
  display: string;
  theme: DefaultTheme;
}>`
  display: ${({ display }) => display};
  background: ${({ theme }) => theme.colors.card};
  padding: 10px;
  width: 100%;
  border-radius: 20px;
  margin: 15px 0px;
`;

export const SidebarTitle = styled.h2<{
  fontSize: number;
  theme: DefaultTheme;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ContentWrapper = styled.div``;

export const SidebarListDes = styled.div<{ theme: DefaultTheme }>`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.textGreyColor};
  margin-bottom: 20px;
  position: relative;
  padding-left: 30px;
`;
