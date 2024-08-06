import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const VoteBoxWrapper = styled.div<{ theme: DefaultTheme }>`
  margin-bottom: 1.25rem;
  padding: 1.25rem;

  @media (max-width: 768px) {
    padding: 0.625rem;
  }
`;

export const VoteTitleBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  line-height: 4.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
    line-height: 2.5rem;
  }
`;

export const Title = styled.p<{ fontSize: number; theme: DefaultTheme }>`
  font-size: ${({ fontSize }) => fontSize / 16}rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media (max-width: 768px) {
    font-size: ${({ fontSize }) => (fontSize * 0.7) / 16}rem;
  }
`;

export const VoteDescBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  line-height: 2.25rem;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    line-height: 1.75rem;
  }
`;

export const VoteDesc = styled.p<{ theme: DefaultTheme }>`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const VoteInfo = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2.25rem;
  margin-top: 2.25rem;
  margin-left: 2.5rem;
  margin-right: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 1.25rem;
  }
`;

export const VoteInfoValues = styled.div<{ theme: DefaultTheme }>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
  text-align: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.625rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const VoteInfoSubtitle = styled.div<{ theme: DefaultTheme }>`
  // display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
  justify-content: center;
  text-align: center;
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.625rem;
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;
