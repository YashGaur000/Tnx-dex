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
  width: 61px;
  height: 25px;
  padding: 4px 8px;
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
  max-width: 80%;
  min-width: 40%;
  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  & {
    -moz-appearance: textfield;
  }
`;
