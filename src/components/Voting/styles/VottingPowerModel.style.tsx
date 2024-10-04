import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const VotingLockWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  padding: 5px;
  justify-content: space-between;
  cursor: pointer;
  line-height: 23.92px;
`;

export const VotingPowerContainer = styled.div``;

export const VoteInputWrapper = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 25px;
  padding: 4px 16px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.whiteBorder};
  background: ${({ theme }) => theme.colors.cardLight},
    ${({ theme }) => theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  border-radius: 8px;
  margin-left: auto;
`;

export const VoteInput = styled.input<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-size: 14px;
  border: none;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  background: transparent;
  max-width: 100%;

  text-align: center;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.whiteBorder};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & {
    -moz-appearance: textfield;
  }
`;

export const IncrementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;
export const Decrement = styled.img<{ height: string; width: string }>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  transform: rotate(180deg);
  cursor: pointer;
`;
