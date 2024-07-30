import { styled } from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';

export const SidebarContainer = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.cardLight};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 20px;
  width: 350px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 900px) {
    width: 70%;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 20px;
  }
`;
