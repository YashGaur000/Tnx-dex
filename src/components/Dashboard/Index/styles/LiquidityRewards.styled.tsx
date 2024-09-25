import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const LiquityMainContainer = styled.div<{
  theme: DefaultTheme;
  height?: string;
}>`
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.card};
  height: ${({ height }) => height ?? '146px'};
`;
