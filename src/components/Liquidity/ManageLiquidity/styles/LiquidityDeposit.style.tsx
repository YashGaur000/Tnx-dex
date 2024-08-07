import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const StyledDepositContainer = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.card};
  width: 40%;
  border-radius: 15px;
  padding: 20px;

  @media only screen and (max-width: 1100px) {
    width: 50%;
    gap: 10px;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
