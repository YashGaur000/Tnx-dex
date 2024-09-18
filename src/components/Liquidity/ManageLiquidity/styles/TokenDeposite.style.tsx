import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const CreateVoliteLiquiditySection = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding-left: 20px;
  padding-right: 20px;
  height: 56px;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 16px;
`;

export const VolatileLiquidityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LiquidityCardSection = styled.section<{ theme: DefaultTheme }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 15px;
  padding: 10px;

  height: 232px;

  gap: 24px;
  padding: 40px;
`;

export const DepositeContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DepositeTokenWithImage = styled.div`
  display: flex;

  align-items: center;
  gap: 16px;
`;

export const ImgTokenIcon = styled.img`
  width: 60px;
  height: 35px;
`;

export const TokenStatus = styled.div<{ theme: DefaultTheme }>`
  display: flex;

  gap: 13px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;
export const TokenDescription = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: flex-start;
`;

export const TokenContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const LiquidityStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
`;
export const DepositeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;
`;
