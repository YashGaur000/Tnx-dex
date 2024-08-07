import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const LockCardstyle = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.card};
  padding: 20px;
  border-radius: 10px;
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

export const ImgIconStyle = styled.img<{
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
  height: autopx;
  border-radius: 15px;
`;
