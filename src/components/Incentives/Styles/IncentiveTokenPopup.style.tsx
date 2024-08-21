import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface FilterButtonProps {
  theme: DefaultTheme;

  selected?: boolean;
}

export const ModalWrapper = styled.div<{ theme: DefaultTheme }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div<{ theme: DefaultTheme }>`
  background: linear-gradient(90deg, #18264c 0%, #1f305f 100%);
  border-radius: 10px;
  padding: 40px;
  width: 600px;
`;

export const SearchInput = styled.input<{ theme: DefaultTheme }>`
  width: 95%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid grey;
  border-radius: 12px;
  color: grey;
  background: linear-gradient(90deg, #18264c 0%, #1f305f 100%);
  padding: 12px 20px 12px 40px;
`;

export const TokenList = styled.ul<{ theme: DefaultTheme }>`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 60vh;
  text-align: left;
  overflow-y: auto;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 21px;
  }

  &::-webkit-scrollbar-track {
    background: #000;
    border-radius: 21px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #16c062 0%, #3eacfc 100%);
    border-radius: 10px;
  }
`;

export const TokenItem = styled.li<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  line-height: 23.92px;
  color: ${({ theme }) => theme.colors.textGreyColor};
  &:hover {
    background: grey;
  }

  img {
    width: 35px;
    height: 36px;
    border-radius: 30px;
    padding: 7px;
    object-fit: cover;
  }
`;

export const SearchWrapper = styled.div<{ theme: DefaultTheme }>`
  position: relative;
  margin-bottom: 10px;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 42%;
  left: 20px;
  transform: translateY(-50%);
  color: #888;
`;

export const HeaderTokenContent = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  padding-bottom: 18px;
`;

export const HeaderLeftContent = styled.span<{ theme: DefaultTheme }>`
  font-weight: 300;
  font-family: 'Kanit';
  font-size: 16px;
`;

export const HeaderRightContent = styled.span<{ theme: DefaultTheme }>`
  padding-right: 20px;
  font-weight: 300;
  font-family: 'Kanit';
  font-size: 16px;
`;

export const TableContainerList = styled.div`
  width: 100%;
`;
export const TableList = styled.table`
  width: 100%;
`;
export const Tablehead = styled.thead`
  width: 100%;
`;
export const TableBody = styled.tbody`
  width: 100%;
`;
export const TableData = styled.div`
  overflow-y: auto;
  max-height: 450px;

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #16c062 0%, #3eacfc 100%);
    border-radius: 10px;
  }
`;
export const TableRow = styled.tr`
  padding: 8px 0px 8px 0px;
  display: flex;
  justify-content: space-between;
`;
export const TableBalanceColumn = styled.td`
  text-align: right;
  padding-right: 20px;
  font-weight: 300;
  font-family: 'Kanit';
  font-size: 16px;
`;
export const ImgLeftIcon = styled.img``;
export const ImgRightIcon = styled.img`
  margin-left: -10px;
`;
export const TableCoinPairName = styled.text`
  font-weight: 300;
  font-family: 'Kanit';
`;
export const FilterButtonList = styled.li``;
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
export const FilterButtonContainer = styled.ul`
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
export const HeaderButtonContent = styled.div``;
export const TableCoinAddress = styled.article`
  font-weight: 300;
  font-family: 'Kanit';
  font-size: 12px;
`;
export const TableCoinNameAddress = styled.div`
  padding-left: 16px;
`;
export const TableCoinColumn = styled.td`
  display: flex;
  align-items: center;
`;
