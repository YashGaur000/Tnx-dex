import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SwitchText = styled.span<{ theme: DefaultTheme }>`
  font-size: 10px;
  padding-left: 10px;

  height: 18px;

  gap: 0px;
  border-radius: 10px 0px 0px 0px;
  opacity: 0px;

  color: ${({ theme }) => theme.colors.grey};
`;
