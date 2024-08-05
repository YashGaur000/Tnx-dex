import styled from 'styled-components';
import { useState } from 'react';
import Table, { TableContainerStyle } from '../../common/TableStyled';
import TenexIcon from '../../../assets/Tenex.png';
import { GradientButton } from '../../common';
import SplitScreen from './SplitScreen';
import PopupScreen from './PopupScreen';
import MergeLockScreen from './MergeLockScreen';
import Pagination from './Pagination';
import { DefaultTheme } from '../../../styles/Theme';

interface TableProps {
  data: Record<string, string | number | string[]>[];
}

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

const ButtonContain = styled.div`
  display: inline;
`;
const TableContains = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.card};
  margin-top: 20px;

  height: autopx;
  border-radius: 15px;
`;
const TableContainer: React.FC<TableProps> = ({ data }) => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [isMergeVisible, setIsMergeVisible] = useState(false);

  if (data.length === 0) return null;

  function handleButton(data: string) {
    if (data === 'Merge') {
      setPopUpVisible(true);
      setIsMergeVisible(true);
    } else {
      setPopUpVisible(true);
      setIsMergeVisible(false);
    }
  }

  const closeModal = () => {
    setPopUpVisible(false);
    setIsMergeVisible(false);
  };

  const headers = Object.keys(data[0]);
  return (
    <TableContains>
      <TableContainerStyle>
        <Table padding="20px" margin="0px 0px">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={`${rowIndex}-${colIndex}`} data-label={header}>
                    {Array.isArray(row[header]) ? (
                      row[header].map((item, index) => (
                        <ButtonContain
                          key={index}
                          onClick={() => handleButton(item)}
                        >
                          <GradientButton padding="0px 10px" fontSize="13">
                            {item}
                          </GradientButton>
                          <span> &nbsp;&nbsp;</span>
                        </ButtonContain>
                      ))
                    ) : header === 'Locked Amount ' ? (
                      <AmountWithImg key={header}>
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
      </TableContainerStyle>
      <Pagination />

      <PopupScreen isVisible={isPopUpVisible} onClose={closeModal}>
        {isMergeVisible ? <MergeLockScreen /> : <SplitScreen />}
      </PopupScreen>
    </TableContains>
  );
};

export default TableContainer;
