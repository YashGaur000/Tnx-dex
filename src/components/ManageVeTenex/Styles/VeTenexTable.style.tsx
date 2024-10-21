import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const AmountWithImg = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;
`;

export const ButtonContain = styled.div`
  display: inline-block;
`;
export const LockButtonWrapper = styled.div<{ theme: DefaultTheme }>`
  height: 22px;
  display: flex;
  gap: 10px;
  justify-content: end;
  align-items: center;
`;

export const LockListContainer = styled.div<{ theme: DefaultTheme }>`
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
  padding: 20px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.title};
  width: 100%;
  margin: 0 auto;
`;

export const LockItemContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  padding: 15px;

  &:last-child {
    border-bottom: none;
  }
`;

export const LockDetails = styled.div<{ theme: DefaultTheme; width?: string }>`
  display: flex;
  align-items: center;
  min-width: ${({ width }) => (width ? width : '100%')};

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: row;
    width: 80%;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    width: 40%;
  }
`;

export const LockIcon = styled.div<{ theme: DefaultTheme }>`
  margin-right: 15px;
`;

export const LockInfo = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LockInfoCheck = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  gap: 10px;
`;
export const LockInfoAction = styled.span<{
  theme: DefaultTheme;
  disabled?: boolean;
}>`
  background: ${({ theme }) => theme.colors.title};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  -webkit-background-clip: text;
  text-align: justify;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  font-size: 14px;
  line-height: 20.93px;
  display: inline-block;
  text-decoration: none;
  gap: 15px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme, disabled }) =>
      disabled ? theme.colors.bordercolor : theme.colors.bordercolor};
  }
`;
export const Column = styled.div<{ theme: DefaultTheme }>`
  width: 82px;
  height: 47px;
  text-align: center;
`;

export const LockInfoText = styled.div<{ theme: DefaultTheme }>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 14px;
  line-height: 20.93px;
  text-align: right;
`;
export const LockInfoTextValue = styled.div<{ theme: DefaultTheme }>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 12px;
  line-height: 17.94px;
  text-align: right;
  margin-top: 16px;
`;
export const PaginationContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  button {
    background: none;
    border: none;
    color: #33aaff;
    cursor: pointer;
    &:disabled {
      color: #555;
    }
  }
`;

export const LockImg = styled.img`
  width: 36px;
  height: 36px;
  margin-bottom: 32px;
`;

export const LockInfoDes = styled.div<{
  theme: DefaultTheme;
  fontSize: number;
  lineheight: number;
}>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ lineheight }) => lineheight}px;
  text-align: left;
`;
