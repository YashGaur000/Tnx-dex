import { styled } from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';

export const Card = styled.div<{
  theme: DefaultTheme;
  height?: string;
  width?: string;
  tag?: string;
}>`
  background: ${({ theme, tag }) =>
    tag === 'top' ? theme.colors.cardDark : theme.colors.card};
  border-radius: 10px;
  padding: 20px;
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
  margin-bottom: 10px;
  color: ${({ theme, tag }) =>
    tag === 'top' ? theme.colors.grey : theme.colors.grey};
`;
