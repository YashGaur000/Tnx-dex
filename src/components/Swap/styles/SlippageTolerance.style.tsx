import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const SlippageWrapper = styled.div<{
  display: string;
  theme: DefaultTheme;
}>`
  display: ${({ display }) => display};
  background: ${({ theme }) => theme.colors.card};
  padding: 10px;
  width: 100%;
  border-radius: 20px;
  margin: 15px 0;
  @media (max-width: 900px) {
    margin-top: 40px;
  }
  @media (max-width: 600px) {
    padding: 8px;
    border-radius: 15px;
    margin: 10px 0;
  }
`;

export const SidebarTitle = styled.h2<{
  fontSize: number;
  theme: DefaultTheme;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  @media (max-width: 600px) {
    font-size: ${({ fontSize }) => fontSize * 0.8}px;
    margin-bottom: 15px;
  }
`;

export const ToleranceButtons = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    gap: 4px;
    margin-bottom: 15px;
  }
`;

export const ToleranceButton = styled.button<{ theme: DefaultTheme }>`
  flex: 1;
  padding: 8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.greyDark};
  border: 1px solid ${({ theme }) => theme.colors.whiteBorder};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.hover};
  }

  @media (max-width: 600px) {
    padding: 6px;
    border-radius: 6px;
  }
`;
export const ToleranceButtonsSelect = styled.div<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.greyDark};
  border: 1px solid ${({ theme }) => theme.colors.whiteBorder};

  cursor: pointer;

  @media (max-width: 600px) {
    padding: 6px;
    border-radius: 6px;
  }
`;

export const SlippageAlign = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SlippageInput = styled.input<{ theme: DefaultTheme }>`
  width: 74px;
  height: 32px;
  padding: 8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.greyDark};
  border: 1px solid ${({ theme }) => theme.colors.whiteBorder};
  border-radius: 10px;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.hover};
  }
`;
