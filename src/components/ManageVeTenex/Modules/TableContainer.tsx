import styled from 'styled-components';
import { useState } from 'react';
import Table, { TableContainerStyle } from '../../common/TableStyled';
import TenexIcon from '../../../assets/Tenex.png';
import { GradientButton } from '../../common';
import SplitScreen from './SplitScreen';
import PopupScreen from './PopupScreen';
import MergeLockScreen from './MergeLockScreen';
import Pagination from './Pagination';
import { ImgIconStyle, LockTableContains } from '../Styles/ManageVetenex.style';
import ShortIcon from '../../../assets/short.svg';
import { TableHeaderWrapper } from '../../Liquidity/LiquidityHomePage/styles/LiquidityTable.style';
const ITEMS_PER_PAGE = 5;
interface TableProps {
  data: Record<string, string | number | string[]>[];
}

const AmountWithImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContain = styled.div`
  display: inline;
`;

const TableContainer: React.FC<TableProps> = ({ data }) => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [isMergeVisible, setIsMergeVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  if (data.length === 0) return null;

  function handleButton(buttonname: string) {
    if (buttonname === 'Merge') {
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

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  function handlePrevpage() {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }
  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  return (
    <LockTableContains>
      <TableContainerStyle>
        <Table padding="20px" margin="0px 0px">
          <thead>
            <tr>
              <th>
                {' '}
                <TableHeaderWrapper>
                  <label>ID + Status </label>
                  <img src={ShortIcon} />
                </TableHeaderWrapper>
              </th>

              <th>
                <TableHeaderWrapper>
                  Locked Amount <img src={ShortIcon} />
                </TableHeaderWrapper>
              </th>

              <th>
                <TableHeaderWrapper>
                  {' '}
                  Voting Power <img src={ShortIcon} />
                </TableHeaderWrapper>
              </th>
              <th>
                <TableHeaderWrapper> Voting For</TableHeaderWrapper>
              </th>
              <th>
                <TableHeaderWrapper>
                  {' '}
                  Expiry Date <img src={ShortIcon} />
                </TableHeaderWrapper>
              </th>
              <th>
                <TableHeaderWrapper> Manage your Locks</TableHeaderWrapper>
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={`${rowIndex}-${colIndex}`} data-label={header}>
                    {Array.isArray(row[header]) ? (
                      row[header].map((item, index) => (
                        <ButtonContain
                          key={index}
                          onClick={() => handleButton(item)}
                        >
                          <GradientButton
                            borderRadius="6px"
                            color="#ffffff"
                            padding="0px 12px 30px 12px"
                            border="1px solid transparent"
                            fontSize="12"
                            height="22px"
                            width="80px"
                          >
                            {item}
                          </GradientButton>
                          <span> &nbsp;&nbsp;</span>
                        </ButtonContain>
                      ))
                    ) : header === 'Locked Amount' ? (
                      <AmountWithImg key={header}>
                        <label>{row[header]}</label>{' '}
                        <ImgIconStyle
                          width="15"
                          height="15"
                          margin="0px 0px 0px 10px"
                          src={TenexIcon}
                        />
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
      <Pagination
        handleNextPage={handleNextPage}
        handlePrevpage={handlePrevpage}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      <PopupScreen isVisible={isPopUpVisible} onClose={closeModal}>
        {isMergeVisible ? <MergeLockScreen /> : <SplitScreen />}
      </PopupScreen>
    </LockTableContains>
  );
};

export default TableContainer;
