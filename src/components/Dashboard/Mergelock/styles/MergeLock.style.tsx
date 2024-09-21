import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const MergeStepperContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  justify-content: space-between;
`;

export const DropDownContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.greyBorder};
  align-items: center;
  height: 48px;
  width: 100%;
  padding: 12px 24px;
  border-radius: 12px;
`;

export const DropdownTitle = styled.label<{
  theme: DefaultTheme;
  color?: string;
}>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontsize.medium};
  color: ${({ theme, color }) => color ?? theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
`;
