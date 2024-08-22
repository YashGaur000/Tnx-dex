import { useState } from 'react';
import TableContains, {
  TableColumn,
  TableHeader,
  TableWrapper,
} from '../../common/TableStyled';
import TenexIcon from '../../../assets/Tenex.png';
import { GradientButton } from '../../common';
import SplitScreen from './SplitScreen';
import PopupScreen from './PopupScreen';
import MergeLockScreen from './MergeLockScreen';
import Pagination from '../../common/Pagination';
import {
  ImageContainer,
  LockTableContains,
} from '../Styles/ManageVetenex.style';
import ShortIcon from '../../../assets/short.svg';
import { TableHeaderWrapper } from '../../Liquidity/LiquidityHomePage/styles/LiquidityTable.style';
import {
  AmountWithImg,
  ButtonContain,
  LockButtonWrapper,
} from '../Styles/VeTenexTable.style';
const ITEMS_PER_PAGE = 5;
interface TableProps {
  data: Record<string, string | number | string[]>[];
}

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
      <TableWrapper>
        <TableContains padding="20px" margin="0px 0px">
          <thead>
            <tr>
              <TableHeader>
                <TableHeaderWrapper>
                  <label>ID + Status </label>
                  <img src={ShortIcon} />
                </TableHeaderWrapper>
              </TableHeader>

              <TableHeader>
                <TableHeaderWrapper>
                  Locked Amount <img src={ShortIcon} />
                </TableHeaderWrapper>
              </TableHeader>

              <TableHeader>
                <TableHeaderWrapper>
                  {' '}
                  Voting Power <img src={ShortIcon} />
                </TableHeaderWrapper>
              </TableHeader>
              <TableHeader>
                <TableHeaderWrapper> Voting For</TableHeaderWrapper>
              </TableHeader>
              <TableHeader>
                <TableHeaderWrapper>
                  {' '}
                  Expiry Date <img src={ShortIcon} />
                </TableHeaderWrapper>
              </TableHeader>
              <TableHeader>
                <TableHeaderWrapper> Manage your Locks</TableHeaderWrapper>
              </TableHeader>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <TableColumn
                    key={`${rowIndex}-${colIndex}`}
                    data-label={header}
                  >
                    {Array.isArray(row[header]) ? (
                      <LockButtonWrapper>
                        {row[header].map((item, index) => (
                          <ButtonContain
                            key={index}
                            onClick={() => handleButton(item)}
                          >
                            <GradientButton
                              borderRadius="6px"
                              color="#ffffff"
                              padding="0px 12px 30px 12px"
                              border="1px solid transparent"
                              fontSize="12px"
                              height="22px"
                              width="80px"
                            >
                              {item}
                            </GradientButton>
                            <span>&nbsp;&nbsp;</span>
                          </ButtonContain>
                        ))}
                      </LockButtonWrapper>
                    ) : header === 'Locked Amount' ? (
                      <AmountWithImg key={header}>
                        <label>{row[header]}</label>{' '}
                        <ImageContainer
                          width="15"
                          height="15"
                          margin="0px 0px 0px 10px"
                          src={TenexIcon}
                        />
                      </AmountWithImg>
                    ) : (
                      row[header]
                    )}
                  </TableColumn>
                ))}
              </tr>
            ))}
          </tbody>
        </TableContains>
      </TableWrapper>
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
