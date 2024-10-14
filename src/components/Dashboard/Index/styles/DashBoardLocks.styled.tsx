import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const DashBoardLockMainContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  height: 127px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.card};
  padding: 24px;
`;
export const LockContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  margin-bottom: 16px;
  gap: 24px;
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

export const LockHeading = styled.p<{ theme: DefaultTheme }>`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  display: flex;
  gap: 5px;
`;

export const LockData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LockStyleText = styled.div`
  display: flex;
  gap: 24px;
`;
export const Paragraph = styled.div<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 12px;
`;
