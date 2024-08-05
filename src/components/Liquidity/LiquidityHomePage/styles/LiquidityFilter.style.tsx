import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';
export const FilterWrapper = styled.main`
  display: flex;
  justify-content: space-between;

  align-items: center;
  margin-top: 20px;
  width: 100%;
`;
export const FilterButton = styled.button<{ theme: DefaultTheme }>`
  background: transparent;
  color: ${({ theme }) => theme.colors.titleColor};
  display: inline-block;
  white-space: nowrap;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.greyDark};
  padding: 6px 15px;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media screen and (max-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.medium};
    padding: 2px 6px;
  }
`;
export const FilterContainerStyle = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 35px;
`;
export const FilterButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 10px;
  width: 50%;

  overflow-x: scroll;
  padding-bottom: 10px;
  &::-webkit-scrollbar {
    height: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #b8b8b899;
    border-radius: 10px;
    min-height: 10px;
  }

  @media screen and (max-width: 1000px) {
    width: 30%;
  }
`;
export const LiquidityFilterSelect = styled.select<{ theme: DefaultTheme }>`
  background: transparent;
  color: white;
  height: 38px;
  border-radius: 10px;
  padding: 10px;
`;
export const SelectOption = styled.option<{ theme: DefaultTheme }>`
  background-color: ${({ theme }) => theme.colors.card};
`;
export const FilterWithSearchStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const SearchBoxContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  border: 1px solid;
  height: 38px;
  border-radius: 10px;
  align-items: center;
  padding: 2px 10px;
  gap: 10px;
  border-color: ${({ theme }) => theme.colors.bordercolor};
`;
