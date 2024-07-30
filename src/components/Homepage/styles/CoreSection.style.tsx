import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const CoreSectionContainer = styled.section<{ theme: DefaultTheme }>`
  padding: 60px 20px;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 70px;
  margin: 0 -57px;
  text-align: center;
`;

export const SubTitle = styled.h3<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.greyLight};
  font-size: 1.5em;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 10px;
`;

export const Title = styled.h2<{ theme: DefaultTheme }>`
  font-size: 2.5em;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.buttonBackground};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
`;

export const Description = styled.p<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.greyLight};
  font-size: 1.2em;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 40px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
`;

export const Card = styled.div`
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: left;
`;
