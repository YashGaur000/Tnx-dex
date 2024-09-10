import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const SidebarContainer = styled.div<{
  height?: number;
  theme: DefaultTheme;
}>`
  display: flex;
  margin-top: 24px;
  padding: 20px;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 440px;
  min-height: ${({ height }) => height}px;
  overflow: auto;

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 20px;
    padding: 15px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    padding: 10px;
  }
`;

export const SidebarInner = styled.div<{ theme: DefaultTheme }>`
  width: 356px;
  margin-left: 24px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0;
    padding: 15px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 10px;
  }
`;

export const SidebarTitle = styled.h2<{
  fontSize: number;
  theme: DefaultTheme;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: ${({ fontSize }) => fontSize * 0.9}px;
  }
`;

export const SidebarList = styled.ol<{ theme: DefaultTheme }>`
  list-style-type: decimal;
  line-height: 1.5;

  margin: 0;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    padding-left: 15px;
  }
`;
