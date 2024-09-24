import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const SelectCardContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  height: 94px;
  border-radius: 16px;
  border: 1.5px solid transparent;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.card},
    ${({ theme }) => theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;

  margin: auto;
  box-shadow: 0px 4px 12px 0px #0b1329;

  padding: 24px;
  position: fixed;

  bottom: 30px;
  width: 83%;
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
