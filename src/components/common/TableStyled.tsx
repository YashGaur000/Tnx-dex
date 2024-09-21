import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';

interface TableProps {
  theme: DefaultTheme;
  width?: string;
  margin?: string;
  fontsize?: string;
  fontWeight?: number;
  lineheight?: string;
  color?: string;
  padding?: string;
  background?: string;
  borderradius?: string;
  textalign?: string;
}

export const TableWrapper = styled.div<{
  theme: DefaultTheme;
  padding?: string;
  background?: string;
}>`
  overflow-x: scroll;
  overflow-y: hidden;
  border-radius: 16px;
  padding: ${({ padding }) => padding ?? '16px 40px 16px'};
  background: ${({ theme, background }) => background ?? theme.colors.card};
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

const TableContains = styled.table<TableProps>`
  width: ${({ width }) => width ?? '100%'};

  table-layout: auto;
  margin: ${({ margin }) => margin ?? '0px 0px'};
  height: auto;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ fontsize }) => fontsize ?? '16px'};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight ?? theme.fontWeights.regular};
  line-height: ${({ lineheight }) => lineheight ?? '29.9px'};
  border-spacing: 0 20px;
  color: ${({ color }) => color ?? '#ffffff'};

  border-radius: 24px;

  @media screen and (max-width: 500px) {
    font-size: ${({ fontsize }) => fontsize ?? '12px'};
  }
`;
export const TableHeader = styled.th<TableProps>`
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ fontsize }) => fontsize ?? '16px'};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight ?? theme.fontWeights.regular};
  text-overflow: ellipsis;
  min-width: 100px;
  width: ${({ width }) => width};
  background: ${({ background, theme }) => background ?? theme.colors.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding-bottom: 12px;

  line-height: 23.92px;

  text-align: ${({ textalign }) => textalign ?? 'right'};
`;

export const TableColumn = styled.td<TableProps>`
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ fontsize }) => fontsize ?? '14px'};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight ?? theme.fontWeights.regular};
  text-overflow: ellipsis;

  width: ${({ width }) => width};
  padding: ${({ padding }) => padding ?? '0px 24px 0px 0px'};
  text-align: ${({ textalign }) => textalign ?? 'right'};
`;
export const TableRow = styled.tr`
  padding: 0px;
`;
export const TableColumnWrapper = styled.div<{ gap?: number; height?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap ?? '8'}px;
  height: ${({ height }) => height ?? '73px'};
  justify-content: flex-start;
  margin-top: 5px;
  align-items: flex-end;
`;
export const TableHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  justify-content: right;
`;

export default TableContains;
