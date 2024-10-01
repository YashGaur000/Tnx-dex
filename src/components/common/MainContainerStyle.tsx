import { styled } from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';
export const MainContainerStyle = styled.section<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16px;
  margin-bottom: 10px;
  min-height: 100vh;
  padding: 24px 45px 0px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.screenSizes.extraLarge}) {
    padding: 10px 60px;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.large}) {
    padding: 10px 40px;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.medium}) {
    padding: 10px;
  }
`;
