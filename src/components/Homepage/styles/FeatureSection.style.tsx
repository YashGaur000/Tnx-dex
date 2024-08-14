import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const FeaturesContainer = styled.section<{ theme: DefaultTheme }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-bottom: 50px;
  padding: 0px 50px;
  background-color: ${({ theme }) => theme.colors.card};

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    margin-top: 50px;
    grid-template-columns: none;
    justify-content: center;
  }
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const CardText = styled.p<{ theme: DefaultTheme }>`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 41.86px;

  @media (max-width: 1200px) {
    font-size: 22px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;
