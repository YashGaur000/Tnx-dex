import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const CreatePoolStyles = styled.main`
  display: flex;
  margin-top: 35px;
  gap: 40px;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
    align-items: center;
  }
`;
export const CreateLiqidityHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const TokenSelectItem = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 49%;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 35px;

  justify-content: center;
  background: ${({ theme }) => theme.colors.card};

  @media only screen and (max-width: 800px) {
    width: 95%;
  }
`;

export const ToolTipWraper = styled.span`
  padding: 6px 0px 0px 0px;
  cursor: pointer;
`;

export const CreateSuggestContain = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;

  margin-top: 40px;
  width: 100%;
`;
export const SelectedTokenImgContainer = styled.img`
  overflow: hidden;
  border-radius: 50%;
  width: 20px;
  height: 20px;
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
