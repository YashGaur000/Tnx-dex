import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';

interface TableProps {
  theme: DefaultTheme;
  width?: string;
  margin?: string;
  fontSize?: string;
  fontWeight?: number;
  lineHeight?: string;
  color?: string;
  padding?: string;
  background?: string;
  borderRadius?: string;
  textAlign?: string;
}

export const TableContainerStyle = styled.div<{ theme: DefaultTheme }>`
  overflow-x: scroll;
  padding-bottom: 10px;
  border-radius: 20px;

  background: ${({ theme }) => theme.colors.card};
  width: 100%;

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
`;

const Table = styled.table<TableProps>`
  width: ${({ width }) => width ?? '100%'};
  border-collapse: collapse;
  margin: ${({ margin }) => margin ?? '10px 0px'};
  height: auto;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ fontSize }) => fontSize ?? '16px'};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight ?? theme.fontWeights.regular};
  line-height: ${({ lineHeight }) => lineHeight ?? '29.9px'};
  color: ${({ color }) => color ?? '#ffffff'};
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
  border-radius: 20px;

  td,
  th {
    white-space: nowrap;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ fontSize }) => fontSize ?? '16px'};
    font-weight: ${({ fontWeight, theme }) =>
      fontWeight ?? theme.fontWeights.regular};
    text-overflow: ellipsis;
    min-width: 100px;
  }

  td {
    padding: ${({ padding }) => padding ?? '10px 0px'};
    text-align: center;
    font-size: ${({ fontSize }) => fontSize ?? '14px'};
  }

  th {
    background: ${({ background }) =>
      background ?? 'linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%)'};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    padding: ${({ padding }) => padding ?? '10px 0px'};
    text-align: ${({ textAlign }) => textAlign ?? 'center'};
  }

  @media screen and (max-width: 500px) {
    font-size: ${({ fontSize }) => fontSize ?? '13px'};
  }
`;

export default Table;
