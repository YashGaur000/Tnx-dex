import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const LiquidityTitle = styled.label<{
  theme: DefaultTheme;
  fontSize: number;
  margin?: string;
}>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.75;
  text-align: left;
  color: ${({ theme }) => theme.colors.titleColor};
  margin: ${({ margin }) => margin};
`;

export const LiquidityDespcriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
`;

export const InformImageStye = styled.img`
  width: 1em;
  height: 1em;
  margin-left: 10px;
`;

export const StatsCardtitle = styled.label<{
  theme: DefaultTheme;
  fontSize: number;
}>`
  background: ${({ theme }) => theme.colors.bordercolor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: ${({ fontSize }) => fontSize} px;
`;

export const LiquidityHeroSectionMain = styled.main`
  display: flex;
  height: auto;
  margin-top: 20px;
  width: 100%;

  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const LiquidityHeroSectionContent = styled.article<{
  theme: DefaultTheme;
}>`
  display: flex;
  flex-direction: column;
  gap: 45px;
  color: ${({ theme }) => theme.colors.titleColor};
  padding-top: 15px;
  width: 50%;

  @media (max-width: 1250px) {
    width: 60%;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;
export const AsideSectionContains = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 50%;

  @media (max-width: 1250px) {
    width: 40%;
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 30px;
    flex-direction: column-reverse;
  }
`;
export const CreateLiquidityButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
export const MetricDisplayWrapper = styled.div<{
  theme: DefaultTheme;
}>`
  display: flex;

  gap: 20px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-size: ${({ theme }) => theme.fontSize.medium};
  justify-content: flex-end;
  width: 100%;

  @media (max-width: 1250px) {
    flex-direction: column;
    gap: 5px;
  }
  @media (max-width: 1000px) {
    flex-direction: row;
    gap: 20px;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 5px;
  }
`;
export const MetricDisplay = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.card};
  height: 80px;
  justify-content: center;
  padding: 15px;
  gap: 6px;

  border-radius: 10px;

  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media (max-width: 1250px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0px 15px;
    height: 35px;
    width: 100%;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    padding: 0px 15px;

    width: 100%;
    height: 90px;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 550px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0px 15px;
    height: 35px;
    width: 100%;
  }
`;

export const LiquidityImgStyle = styled.img<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
