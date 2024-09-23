import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const SelectCardContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  height: 94px;
  border-radius: 16px;
  border: 2px solid transparent;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.card},
    ${({ theme }) => theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  left: 50%;
  transform: translateX(-50%);

  padding: 24px;
  position: absolute;
  bottom: 30px;
  width: 95%;
  z-index: 10000;
`;
export const SelectedDataWrapper = styled.div<{ gap?: number }>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap ?? '24'}px;
`;
export const SelectedButtonWrapper = styled.div<{ theme: DefaultTheme }>`
  position: relative;
`;
