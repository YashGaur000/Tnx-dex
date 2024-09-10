import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const SlippageWrapper = styled.div<{
  display: string;
  theme: DefaultTheme;
}>`
  display: ${({ display }) => display};
  background: ${({ theme }) => theme.colors.cardLight};
  padding: 24px;
  width: 360px;
  height: 118px;
  border-radius: 12px;

  @media (max-width: 900px) {
  }
  @media (max-width: 600px) {
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
  margin-left: 11px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  @media (max-width: 600px) {
    font-size: ${({ fontSize }) => fontSize * 0.8}px;
    margin-bottom: 15px;
  }
`;

export const ToleranceButtons = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  gap: 10px;

  padding: 2px, 12px, 2px, 12px;
  margin-bottom: 20px;
  margin-left: 11px;
  @media (max-width: 600px) {
    gap: 4px;
    margin-bottom: 15px;
  }
`;

export const ToleranceButton = styled.div<{ theme: DefaultTheme }>`
  flex: 1;
  padding: 8px;
  height: 25px;
  background: transparent;
  font-size: 14px;
  font-weight: 300;
  line-height: 25px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 2px;
  line-height:20.93px
  width: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.whiteBorder};
  border: 1px solid ${({ theme }) => theme.colors.whiteBorder};

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
  width: 53px;
  height: 25px;
  padding: 8px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.whiteBorder};
  background: ${({ theme }) => theme.colors.cardLight},
    ${({ theme }) => theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  border-radius: 8px;
  text-align: center;
  
  &:focus {
  outline:none;
  }
 &:hover {
    color: ${({ theme }) => theme.colors.text};
    border: 2px solid transparent;
     background: ${({ theme }) => theme.colors.cardLight},
    ${({ theme }) => theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
 
`;
