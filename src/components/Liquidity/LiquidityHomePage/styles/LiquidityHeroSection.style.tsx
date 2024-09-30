import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const LiquidityTitle = styled.label<{
  theme: DefaultTheme;
  fontSize: number;
  margin?: string;
  lineheight?: string;
  textalign?: string;
  textdecoration?: string;
}>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ lineheight }) => lineheight ?? '17.94px'};
  text-align: ${({ textalign }) => textalign ?? 'left'};
  color: ${({ theme }) => theme.colors.titleColor};
  margin: ${({ margin }) => margin};
  text-decoration: ${({ textdecoration }) => textdecoration ?? 'none'};
`;

export const LiquidityDespcriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const TitleWithImgWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;
`;
export const InformImageStye = styled.img`
  width: 16px;
  height: 16px;
`;

export const StatsCardtitle = styled.label<{
  theme: DefaultTheme;
  fontSize: number;
  lineheight?: string;
}>`
  background: ${({ theme }) => theme.colors.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ lineheight }) => lineheight};
`;

export const LiquidityHeroSectionMain = styled.main<{ theme: DefaultTheme }>`
  display: flex;
  height: auto;

  width: 100%;

  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.screenSizes.large}) {
    flex-direction: column;
  }
`;
export const LiquidityHeroSectionContent = styled.article<{
  theme: DefaultTheme;
}>`
  display: flex;
  flex-direction: column;
  gap: 38px;
  color: ${({ theme }) => theme.colors.titleColor};
  padding-top: 20px;
  width: 50%;

  @media (max-width: ${({ theme }) => theme.screenSizes.extraLarge}) {
    width: 60%;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.large}) {
    width: 100%;
  }
`;
export const AsideSectionContains = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: ${({ theme }) => theme.screenSizes.extraLarge}) {
    width: 40%;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.large}) {
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

  gap: 16px;

  color: ${({ theme }) => theme.colors.whiteBorder};
  font-size: ${({ theme }) => theme.fontSize.medium};
  justify-content: flex-end;
  width: 100%;
  height: 55px;

  @media (max-width: ${({ theme }) => theme.screenSizes.extraLarge}) {
    flex-direction: column;
    height: auto;
    gap: 5px;
  }
  @media (max-width: ${({ theme }) => theme.screenSizes.large}) {
    flex-direction: row;

    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.medium}) {
    flex-direction: column;
    gap: 5px;
  }
  @media (max-width: ${({ theme }) => theme.screenSizes.small}) {
    height: 100%;
    width: 100%;
  }
`;
export const MetricDisplay = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.card};
  height: 55px;

  justify-content: center;
  padding: 0px 16px;
  gap: 2px;

  border-radius: 8px;

  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media (max-width: ${({ theme }) => theme.screenSizes.extraLarge}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0px 15px;
    height: 35px;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.large}) {
    flex-direction: column;

    padding: 0px 15px;

    width: 100%;
    height: 90px;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.medium}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0px 15px;
    height: 35px;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.screenSizes.small}) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 5px;
  }
`;

export const LiquidityImgStyle = styled.img<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const TitleUnderLine = styled.u`
  text-decoration: underline;
`;
export const PopupWrapper = styled.div``;
