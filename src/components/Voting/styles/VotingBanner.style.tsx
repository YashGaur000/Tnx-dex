import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const VoteBoxWrapper = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const VotingTitle = styled.p<{ theme: DefaultTheme; fontSize?: number }>`
  font-size: ${({ fontSize }) => fontSize ?? '16'}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.titleColor};
`;
export const VoteTitleBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  line-height: 53.82px;

  @media (max-width: 768px) {
    justify-content: left;
    line-height: 40px;
  }
`;

export const Title = styled.p<{
  fontSize: number;
  theme: DefaultTheme;
  width?: number;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};
  width: ${({ width }) => width}px;
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

export const VoteDescBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  line-height: 23.92px;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: left;
    line-height: 28px;
  }
`;

export const VoteDesc = styled.div<{ theme: DefaultTheme }>`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.titleColor};
  display: flex;
  gap: 8px;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const VoteInfo = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;

  margin-top: 8px;

  @media (max-width: 1100px) {
    gap: 30px;
  }
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const VoteInfoSubtitle = styled.div<{ theme: DefaultTheme }>`
  text-align: center;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.titleColor};
  font-family: ${({ theme }) => theme.fonts.main};
  line-height: 20.93px;
`;

export const InfoItem = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;
