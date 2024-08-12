import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

interface FilterButtonProps {
  theme: DefaultTheme;

  selected?: boolean;
}

export const FilterWrapper = styled.main`
  display: flex;
  justify-content: space-between;

  align-items: center;
  margin: 20px 0px;
  width: 100%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const FilterButton = styled.button<FilterButtonProps>`
  background: transparent;
  color: ${({ theme }) => theme.colors.whiteBorder};
  display: inline-block;
  white-space: nowrap;

  padding: 6px 15px;
  border-radius: 13px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  background: ${({ theme, selected }) =>
    selected ? theme.colors.bordercolor : theme.colors.titleColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  border: none;

  position: relative;

  &::before {
    content: '';
    padding: 1px;
    position: absolute;
    inset: 0;
    border-radius: 13px;
    color: ${({ theme }) => theme.colors.whiteBorder};
    background: ${({ theme, selected }) =>
      selected ? theme.colors.buttonBackground : theme.colors.greyBorder};
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
    padding: 10px 10px;
  }

  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.small};
    padding: 8px 8px;
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
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const LiquidityFilterSelect = styled.select<{ theme: DefaultTheme }>`
  background: transparent;
  color: ${({ theme }) => theme.colors.whiteBorder};
  height: 38px;
  border-radius: 10px;
  padding: 10px;
  background: ${({ theme }) => theme.colors.bordercolor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  border-image-source: ${({ theme }) => theme.colors.bordercolor};
  border-image-slice: 1;
  border-image-width: 1px;
  border-image-outset: 0;

  &:focus {
    outline: none;
    box-shadow: 0px 4px 11.4px 0px #131d3c;
  }
`;
export const SelectOption = styled.option<{ theme: DefaultTheme }>`
  background-color: ${({ theme }) => theme.colors.card}; !important;
`;
export const FilterWithSearchStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const SearchBoxContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.greyBorder};
  color: ${({ theme }) => theme.colors.whiteBorder};
  height: 35px;
  border-radius: 10px;
  align-items: center;
  padding: 2px 10px;
  gap: 10px;
  width: 100%;
`;
