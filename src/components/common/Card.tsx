import { styled } from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';

export const Card = styled.div<{
  theme: DefaultTheme;
  height?: string;
  width?: string;
  tag?: string;
  margin?: string;
  Radius?: string;
}>`
  background: ${({ theme, tag }) =>
    tag === 'top' ? theme.colors.cardDark : theme.colors.card};
  border-radius: 10px;
  padding: 20px;
  margin: ${({ margin }) => (margin ? margin : '0px')};
  radius: ${({ Radius }) => (Radius ? Radius : '0px')};
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '')};
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 1024px) {
    width: 350px;
  }

  @media (max-width: 900px) {
    margin-top: 10px;
    grid-template-columns: none;
    justify-content: center;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    grid-template-columns: none;
    justify-content: center;
  }
`;

export const CardTitle = styled.h3<{ theme: DefaultTheme; tag?: string }>`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35.88px;
  text-align: ${({ tag }) => (tag === 'top' ? 'center' : 'left')};
  margin-bottom: 15px;
  color: ${({ theme, tag }) =>
    tag === 'top' ? theme.colors.grey : theme.colors.title};
`;

export const CardRow = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;

  span {
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }
`;

export const CardDescription = styled.p<{
  theme: DefaultTheme;
  Lineheight?: string;
}>`
  font-size: 1em;
  line-height: ${({ Lineheight }) => Lineheight};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.greyLight};
  margin-bottom: 20px;
`;
