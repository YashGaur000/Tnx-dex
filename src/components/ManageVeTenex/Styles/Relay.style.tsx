import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const RelayScreenContainer = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.card};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};
  margin-top: 20px;
  width: 100%;
  height: auto;
  border-radius: 15px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RelayCardSection = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  gap: 10px;
  margin: auto;
`;
export const RelayCardDataContains = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};
`;
export const RelayCardsection2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  justify-content: space-between;
  height: 100%;
`;
export const RelayIdStatus = styled.div<{ theme: DefaultTheme }>`
  block: inline-block;
  background: ${({ theme }) => theme.colors.cardLight};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 3px 10px;
  border-radius: 6px;
`;
export const RelayCheckBoxWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
`;
export const RelayStrategyContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const CheckBoxStyle = styled.input<{ theme: DefaultTheme }>`
  appearance: none;
  -webkit-appearance: none;
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 2rem;
  padding: 0.1rem;

  width: 15px;
  height: 15px;
  margin-top: 3px;
  border: 1.5px solid #5a5a5a;
  border-radius: 1px;

  cursor: pointer;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 2px;
    transition: background-color 0.2s ease-in-out;
  }

  &:checked::before {
    content: '✔';
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.cardDark};
    font-size: 10px;

    border-radius: 2px;
  }

  &:checked {
  }
`;

export const LockDropDownBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  border-radius: 12px;
  background: transparent;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.greyBorder};
  color: ${({ theme }) => theme.colors.text};
  padding: 10px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const RelayTableheader = styled.div`
  display: flex;
  margin-left: 30px;
`;
export const UnderLineStyle = styled.span<{ theme: DefaultTheme }>`
  position: relative;
  display: inline-block;
  background: ${({ theme }) => theme.colors.bordercolor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;

    background: ${({ theme }) => theme.colors.bordercolor};

    background-clip: border-box;
  }
`;
