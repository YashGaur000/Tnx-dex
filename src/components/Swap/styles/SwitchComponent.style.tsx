import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SwitchText = styled.span<{ theme: DefaultTheme }>`
  font-size: 10px;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.grey};
`;
