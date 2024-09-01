import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';

interface TableProps {
  theme: DefaultTheme;
  width?: string;
  margin?: string;
  fontSize?: string;
  fontWeight?: number;
  lineheight?: string;
  color?: string;
  padding?: string;
  background?: string;
  borderRadius?: string;
  textAlign?: string;
}

export const TableWrapper = styled.div<{
  theme: DefaultTheme;
  padding?: string;
  background?: string;
}>`
  overflow-x: scroll;

  border-radius: 24px;
  padding: ${({ padding }) => padding ?? '30px'};
  background: ${({ theme, background }) => background ?? theme.colors.card};
  width: 100%;
  margin-top: 20px;
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

const TableContains = styled.table<TableProps>`
  width: ${({ width }) => width ?? '100%'};
  border-collapse: collapse;

  margin: ${({ margin }) => margin ?? '0px 0px'};
  height: auto;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ fontSize }) => fontSize ?? '16px'};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight ?? theme.fontWeights.regular};
  line-height: ${({ lineheight }) => lineheight ?? '29.9px'};
  color: ${({ color }) => color ?? '#ffffff'};

  border-radius: 20px;

  @media screen and (max-width: 500px) {
    font-size: ${({ fontSize }) => fontSize ?? '12px'};
  }
`;
export const TableHeader = styled.th<TableProps>`
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ fontSize }) => fontSize ?? '16px'};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight ?? theme.fontWeights.regular};
  text-overflow: ellipsis;
  min-width: 100px;

  background: ${({ background }) =>
    background ?? 'linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding: ${({ padding }) => padding ?? '0px 0px 15px'};
  text-align: ${({ textAlign }) => textAlign ?? 'center'};
`;

export const TableColumn = styled.td<TableProps>`
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ fontSize }) => fontSize ?? '14px'};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight ?? theme.fontWeights.regular};
  text-overflow: ellipsis;
  min-width: 100px;

  padding: ${({ padding }) => padding ?? '10px 0px'};
  text-align: center;
`;
export const TableRow = styled.tr`
  padding: 0px;
`;
export default TableContains;
