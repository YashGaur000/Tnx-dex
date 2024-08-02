import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';
import Table from '../../common/TableStyled';
import TenexIcon from '../../../assets/Tenex.png';
interface TableProps {
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

const Img = styled.img`
  width: 1.125em;
  height: 1.125em;
  margin-left: 20px;
`;

const AmountWithImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TableContainer: React.FC<TableProps> = ({ data }) => {
  if (data.length === 0) return null;

  const headers = Object.keys(data[0]);
  return (
    <Section>
      <Table padding="20px">
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
                  {Array.isArray(row[header]) ? (
                    row[header].map((item, index) => (
                      <Button key={index}>{item}</Button>
                    ))
                  ) : header == 'Locked Amount ' ? (
                    <AmountWithImg>
                      <label>{row[header]}</label> <Img src={TenexIcon} />
                    </AmountWithImg>
                  ) : (
                    row[header]
                  )}
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
