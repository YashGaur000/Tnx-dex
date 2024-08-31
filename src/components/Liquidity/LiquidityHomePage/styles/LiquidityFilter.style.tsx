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

  margin-top: 16px;
  margin-bottom: 24px;
  width: 100%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 5px;
  }
`;
export const FilterButton = styled.div<FilterButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  position: relative;
  height: 29px;

  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  background: ${({ theme, selected }) =>
    selected ? theme.colors.title : theme.colors.whiteBorder};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  padding: 4px 16px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  z-index: 1;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    border: ${({ selected, theme }) =>
      selected ? 'none' : `1px solid ${theme.colors.greyBorder}`};
    background-image: ${({ theme, selected }) =>
      selected && theme.colors.bordercolor};
    top: 0px;
    left: 0px;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 1px;

    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    z-index: -1;
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
  margin-top: 16px;

  height: 87px;
  margin-bottom: 12px;
  @media screen and (max-width: 700px) {
    height: 140px;
  }
`;
export const FilterButtonContainer = styled.div`
  display: flex;
  gap: 16px;

  width: 50%;
  height: 45px;
  overflow-x: scroll;

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

  border-radius: 8px;
  padding: 10px;
  width: 80px;
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
  gap: 16px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const SearchBoxContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.greyBorder};
  color: ${({ theme }) => theme.colors.whiteBorder};
  height: 29px;
  width: 285px;
  border-radius: 8px;
  align-items: center;
  padding: 2px 16px;
  gap: 16px;
  width: 100%;
`;

export const DropDownWrapper = styled.div``;
