import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const PoolSection = styled.section`
  width: 100%;
  margin-top: 30px;
`;
export const LiquidityPoolCardStyles = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  border-radius: 16px;
  justify-content: space-between;
  padding: 16px 40px;
  height: 84px;

  align-items: center;
  background: ${({ theme }) => theme.colors.card};
  font-size: 14px;

  @media only screen and (max-width: ${({ theme }) =>
      theme.screenSizes.medium}) {
    flex-direction: column;
    margin: 10px;
    align-items: flex-start;
    padding: 20px;
    gap: 15px;
    height: auto;
  }
`;
export const PoolcardStatus = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
export const Tvlstyle = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;

  gap: 8px;

  @media only screen and (max-width: ${({ theme }) =>
      theme.screenSizes.medium}) {
    flex-direction: row;

    gap: 20px;
  }
`;

export const TokenPairWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
export const PoolButton = styled.div<{ theme: DefaultTheme }>`
  flex-shrink: 1;
  @media only screen and (max-width: ${({ theme }) =>
      theme.screenSizes.medium}) {
    margin-left: 80%;
  }
`;

export const PoolWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;
