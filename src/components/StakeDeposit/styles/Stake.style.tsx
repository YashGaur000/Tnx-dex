import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';
export const StakeMainContainer = styled.section`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  @media only screen and (max-width: 900px) {
    flex-direction: column;

    gap: 15px;
  }
`;
export const StakeCard = styled.div<{ width?: string; theme: DefaultTheme }>`
  width: ${({ width }) => width ?? '55%'};
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.card};

  border-radius: 15px;

  height: auto;
  gap: 24px;
  padding: 40px;

  @media only screen and (max-width: 1100px) {
    width: 45%;
    gap: 20px;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const TokenAmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 4px;
`;
export const StakeTitle = styled.p<{ theme: DefaultTheme; fontSize: number }>`
font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color:${({ theme }) => theme.colors.whiteBorder}
  text-align: left;
`;

export const StakeRangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const SliderStatusWrapper = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  width: 100%;
  height: 26px;

  justify-content: right;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};
`;
export const SliderLabel = styled.label<{ theme: DefaultTheme }>`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};
  margin-top: 4px;
  width: 39px;
  display: flex;
  cursor: pointer;
`;
