import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const StyledDepositContainer = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.card};
  width: 40%;
  border-radius: 15px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.screenSizes.large}) {
    width: 50%;
    gap: 10px;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.screenSizes.custom900}) {
    width: 100%;
  }
`;
