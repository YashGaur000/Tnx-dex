import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const SidebarContainer = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 20px;
  width: 440px;
  margin-left: 24px;
  height: 813px;

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 40px;
    margin-left: 0px;
  }
`;

export const SidebarInner = styled.div<{ theme: DefaultTheme }>`
  width: 340px;
  margin-left: 28px;

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 40px;
    margin-left: 0px;
  }
`;

export const SidebarTitle = styled.h2<{
  fontSize: number;
  theme: DefaultTheme;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  text-align: justify;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin: 20px 0px;
  color: ${({ theme }) => theme.colors.text};
`;

export const SidebarList = styled.ol`
  display: flex;
  padding: 0;
  margin: 0;
`;
