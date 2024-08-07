import { styled } from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';
export const MainContainerStyle = styled.section<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;
  margin-bottom: 10px;
  height: auto;
  padding: 0px 40px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.screenSizes.extraLarge}) {
    padding: 20px;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.large}) {
    padding: 0px;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.medium}) {
    padding: 0px;
  }
`;
