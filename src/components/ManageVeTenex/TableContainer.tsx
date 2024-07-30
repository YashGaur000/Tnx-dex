import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';

interface ReusableTableProps {
  data: Record<string, string | number | string[]>[];
}

const Section = styled.section<{ theme: DefaultTheme }>`
  display: flex;

  background: ${({ theme }) => theme.colors.card};
  margin-top: 40px;
  border-radius: 5px;
  @media screen and (max-width: 800px) {
    background: none;
  }
`;
const Table = styled.table<{ theme: DefaultTheme }>`
  width: 90%;
  border-collapse: collapse;
  margin-left: 10px;

  font-family: Kanit;
  font-size: 15px;
  font-weight: 300;
  line-height: 29.9px;
  color: #ffffff;

  td {
    padding: 10px 0px;
    text-align: right;
  }

  th {
    background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: right;

    padding: 30px 0px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 14px;
  }
  @media screen and (max-width: 800px) {
    &,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
      font-size: 17px;
      width: 100%;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      padding: 20px;
      margin-top: 20px;
      border-radius: 10px;
      background: ${({ theme }) => theme.colors.card};
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
      background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;
const Button = styled.button`
  background: linear-gradient(180deg, #273762 0%, #2a3e75 100%);
  height: 24px;
  border: 1px solid;

  border-image-source: linear-gradient(
    209.3deg,
    rgba(22, 192, 98, 0.5) 7.44%,
    rgba(62, 172, 252, 0.5) 86.34%
  );

  color: #ffffff;
  margin-right: 10px;
  padding: 5px 15px;
  border-radius: 5px;
`;

const TableContainer: React.FC<ReusableTableProps> = ({ data }) => {
  if (data.length === 0) return null;

  const headers = Object.keys(data[0]);
  return (
    <Section>
      <Table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header) => (
                <td key={header} data-label={header}>
                  {Array.isArray(row[header])
                    ? row[header].map((item, index) => (
                        <Button key={index}>{item}</Button>
                      ))
                    : row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Section>
  );
};

export default TableContainer;
