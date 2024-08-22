import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const CreatePoolStyles = styled.main`
  display: flex;
  margin-top: 35px;

  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
    align-items: center;
  }
`;

export const TokenSelectItem = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 49%;
  border-radius: 16px;
  height: 170px;
  padding: 40px;
  justify-content: center;
  background: ${({ theme }) => theme.colors.card};

  @media only screen and (max-width: 800px) {
    width: 95%;
  }
`;

export const CreateSuggestContain = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  padding-left: 20px;
  padding-right: 20px;
  height: 70px;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 16px;
  margin-top: 30px;
  width: 100%;
`;
export const TokenSelectAlignStyle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const TokenSelectCustom = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.greyBorder};
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  height: 48px;
  border-radius: 12px;
`;
