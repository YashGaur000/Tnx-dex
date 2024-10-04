import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const LockCardstyle = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.card};
  padding: 30px 40px;
  width: 600px;
  height: 296px;
  border-radius: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.fonts.main};
`;
export const ToolTipsWrapper = styled.span``;
export const LockHeaderTitle = styled.label<{
  theme: DefaultTheme;
  fontSize: number;
  margin?: string;
}>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '24px')};
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  margin: ${({ margin }) => margin ?? '0px'};
`;

export const LockDescriptonTitle = styled.p<{
  theme: DefaultTheme;
  fontSize: number;
}>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const ImageContainer = styled.img<{
  width?: string;
  height?: string;
  margin?: string;
  cursor?: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  cursor: ${({ cursor }) => cursor ?? 'none'};
`;

export const LockHeroSection = styled.main<{ theme: DefaultTheme }>`
  display: flex;
  height: 132px;
  margin-top: 5px;
  width: 100%;

  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.screenSizes.large}) {
    flex-direction: column;
    height: auto;
  }
`;
export const LockHeroSectionContent = styled.article<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${({ theme }) => theme.colors.titleColor};
  padding-top: 2px;
  width: 50%;

  @media (max-width: ${({ theme }) => theme.screenSizes.extraLarge}) {
    width: 60%;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.large}) {
    width: 100%;
  }
`;

export const LockButtonConatainer = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 3px;
`;

export const AmountWithImg = styled.div<{ gap?: number }>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap ?? '0'}px;
`;

/* tableContainer*/

export const LockTableContains = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.card};

  width: 100%;
  height: auto;
  border-radius: 15px;
  padding: 20px 40px;
`;

export const LockheaderContentStyle = styled.div`
  display: flex;
  align-items: flex-start;

  width: 100%;
  gap: 10px;
`;
export const LockContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  width: 100%;
`;
export const LockheaderWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

interface ContainerProps {
  display: string;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
}
export const CardComponentWrapper = styled.div<ContainerProps>`
  display: ${({ display }) => display};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;
