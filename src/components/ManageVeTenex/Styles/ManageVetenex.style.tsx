import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const LockCardstyle = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.card};
  padding: 30px 40px;
  border-radius: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.fonts.main};
`;

export const LockHeaderTitle = styled.label<{
  theme: DefaultTheme;
  fontSize: number;
}>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme }) => theme.colors.whiteBorder};
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
  width: string;
  height: string;
  margin?: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
`;

export const LockHeroSection = styled.main`
  display: flex;
  height: auto;
  margin-top: 20px;
  width: 100%;

  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const LockHeroSectionContent = styled.article<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${({ theme }) => theme.colors.titleColor};
  padding-top: 10px;
  width: 50%;

  @media (max-width: 1250px) {
    width: 60%;
  }

  @media (max-width: 1100px) {
    font-size: 15px;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const LockButtonConatainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const AmountWithImg = styled.div`
  display: flex;
  align-items: center;
`;

/* tableContainer*/

export const LockTableContains = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.card};
  margin-top: 20px;
  width: 100%;
  height: auto;
  border-radius: 15px;
  padding: 20px;
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
