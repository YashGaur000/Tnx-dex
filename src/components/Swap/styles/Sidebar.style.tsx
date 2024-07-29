import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const SidebarTitle = styled.h2<{
  fontSize: number;
  theme: DefaultTheme;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.greyDark};
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SidebarListItem = styled.p<{ theme: DefaultTheme }>`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.greyDark};
  margin-bottom: 10px;
`;

export const ToleranceButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: grid;
  }
`;

export const InfoButton = styled.button<{
  theme: DefaultTheme;
  width?: string;
}>`
  width: ${({ width }) => (width ? width : '')};
  height: 32px;
  padding: 8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.greyDark};
  border: 1px solid ${({ theme }) => theme.colors.greyDark};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.hover};
  }
`;

export const SliderContainer = styled.div`
  margin-bottom: 20px;
`;

export const Slider = styled.input`
  width: 100%;
  height: 2px;
  accent-color: darkcyan;
`;

export const SlippageWrapper = styled.div<{
  display: string;
  theme: DefaultTheme;
}>`
  display: ${({ display }) => display};
  background: ${({ theme }) => theme.colors.card};
  padding: 10px;
  width: 100%;
  border-radius: 20px;
  margin: 15px 0px;
`;

export const Text = styled.div<{ theme: DefaultTheme }>`
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.greyDark};
`;

export const Align = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div``;
