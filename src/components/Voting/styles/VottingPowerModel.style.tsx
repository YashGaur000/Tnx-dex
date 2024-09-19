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

export const VoteInput = styled.input<{ theme: DefaultTheme }>`
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
  margin-left: 90px;
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
