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

const Table = styled.table<TableProps>`
  width: ${({ width }) => width ?? '100%'};
  border-collapse: collapse;
  margin: ${({ margin }) => margin ?? ' 10px 0px 10px 0px'};
  height: auto;
  font-family: Kanit;
  font-size: ${({ fontSize }) => fontSize ?? '15px'};
  font-weight: ${({ fontWeight }) => fontWeight ?? 300};
  line-height: ${({ lineHeight }) => lineHeight ?? '29.9px'};
  color: ${({ color }) => color ?? '#ffffff'};
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
  border-radius: 20px;
  td {
    padding: ${({ padding }) => padding ?? '10px 0px'};
    text-align: center;
  }

  th {
    background: ${({ background }) =>
      background ?? 'linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%)'};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    padding: ${({ padding }) => padding ?? '30px 0px'};
    text-align: ${({ textAlign }) => textAlign ?? 'center'};
  }

  @media screen and (max-width: 1000px) {
    font-size: ${({ fontSize }) => fontSize ?? '14px'};
  }

  @media screen and (max-width: 800px) {
    &,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
      font-size: ${({ fontSize }) => fontSize ?? '17px'};
      width: 100%;
      background: none;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      padding: ${({ padding }) => padding ?? '20px'};
      margin-top: 20px;
      border-radius: ${({ borderRadius }) => borderRadius ?? '10px'};
      background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
    }

    td {
      border: none;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      position: absolute;
      top: 50%;
      left: 10px;

      transform: translateY(-50%);
      content: attr(data-label);
      background: ${({ background }) =>
        background ??
        'linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%)'};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  @media screen and (max-width: 500px) {
    font-size: ${({ fontSize }) => fontSize ?? '13px'};
  }
`;

export default Table;
