import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const VoteBoxWrapper = styled.div<{ theme: DefaultTheme }>`
  margin-bottom: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const VoteTitleBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  line-height: 53.82px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    justify-content: left;
    line-height: 40px;
  }
`;

export const Title = styled.p<{ fontSize: number; theme: DefaultTheme }>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.whiteBorder};

  @media (max-width: 768px) {
    font-size: 36px;
    text-align: left;
  }
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

export const VoteDesc = styled.p<{ theme: DefaultTheme }>`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.titleColor};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const VoteInfo = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 36px;
  margin-top: 36px;
  margin-left: 40px;
  margin-right: 40px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 20px;
  }
`;

export const VoteInfoValues = styled.div<{ theme: DefaultTheme }>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  text-align: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const VoteInfoSubtitle = styled.div<{ theme: DefaultTheme }>`
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.titleColor};
  font-family: ${({ theme }) => theme.fonts.main};
  line-height: 20.93px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  font-size: 22px;
  line-height: 35.88px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;
