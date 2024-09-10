import { useState } from 'react';
import TableContains, {
  TableColumn,
  TableHeader,
  TableHeaderWrapper,
  TableRow,
  TableWrapper,
} from '../../common/TableStyled';
import TenexIcon from '../../../assets/Tenex.png';
import { GradientButton } from '../../common';
import SplitScreen from './SplitScreen';
import PopupScreen from '../../common/PopupScreen';
import MergeLockScreen from './MergeLockScreen';
import Pagination from '../../common/Pagination';
import {
  ImageContainer,
  LockHeaderTitle,
  LockTableContains,
} from '../Styles/ManageVetenex.style';
import ShortIcon from '../../../assets/short.svg';

import {
  AmountWithImg,
  ButtonContain,
  LockButtonWrapper,
} from '../Styles/VeTenexTable.style';
const ITEMS_PER_PAGE = 5;
import LockData from '../../../constants/LockData.json';

const VeTenexTable: React.FC = () => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [isMergeVisible, setIsMergeVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  if (LockData.length === 0) return null;

  function handleMergeSplitButton(buttonname: string) {
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

  const totalPages = Math.ceil(LockData.length / ITEMS_PER_PAGE);

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
  const paginatedData = LockData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  return (
    <LockTableContains>
      <TableWrapper padding="0px" background="none">
        <TableContains margin="0px 0px">
          <thead>
            <TableRow>
              <TableHeader textAlign="left">
                <LockHeaderTitle fontSize={16}>ID + Status </LockHeaderTitle>
                <ImageContainer width="16px" height="16px" src={ShortIcon} />
              </TableHeader>

              <TableHeader>
                <TableHeaderWrapper>
                  <LockHeaderTitle fontSize={16}>Locked Amount</LockHeaderTitle>
                  <ImageContainer width="16px" height="16px" src={ShortIcon} />
                </TableHeaderWrapper>
              </TableHeader>

              <TableHeader>
                <TableHeaderWrapper>
                  Voting Power
                  <ImageContainer width="16px" height="16px" src={ShortIcon} />
                </TableHeaderWrapper>
              </TableHeader>
              <TableHeader>
                <TableHeaderWrapper> Voting For</TableHeaderWrapper>
              </TableHeader>
              <TableHeader>
                <TableHeaderWrapper>
                  <TableHeaderWrapper>
                    Expiry Date
                    <ImageContainer
                      width="16px"
                      height="16px"
                      src={ShortIcon}
                    />
                  </TableHeaderWrapper>
                </TableHeaderWrapper>
              </TableHeader>
              <TableHeader>
                <TableHeaderWrapper>Manage your Locks</TableHeaderWrapper>
              </TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {paginatedData.map((item, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableColumn textAlign="left">{item.ID}</TableColumn>
                <TableColumn>
                  <AmountWithImg>
                    <LockHeaderTitle fontSize={14}>
                      {item.LockedAmount}
                    </LockHeaderTitle>
                    <ImageContainer
                      width="18px"
                      height="18px"
                      src={TenexIcon}
                    />
                  </AmountWithImg>
                </TableColumn>
                <TableColumn>{item.VotingPower}</TableColumn>
                <TableColumn padding="0px">{item.VotingFor}</TableColumn>
                <TableColumn>{item.ExpiryDate}</TableColumn>
                <TableColumn padding="0px">
                  <LockButtonWrapper>
                    <ButtonContain
                      onClick={() => handleMergeSplitButton('Merge')}
                    >
                      <GradientButton
                        borderRadius="6px"
                        color="#ffffff"
                        padding="4px 12px"
                        border="1px solid transparent"
                        fontSize="12px"
                        height="22px"
                        lineheight="0px"
                        width="60px"
                        smFontSize={12}
                        smMargin="0px"
                      >
                        {item.button[0]}
                      </GradientButton>
                    </ButtonContain>
                    <ButtonContain
                      onClick={() => handleMergeSplitButton('Split')}
                    >
                      <GradientButton
                        borderRadius="6px"
                        color="#ffffff"
                        padding="4px 12px"
                        border="1px solid transparent"
                        fontSize="12px"
                        height="22px"
                        lineheight="0px"
                        width="60px"
                        smFontSize={12}
                        smMargin="0px"
                      >
                        {item.button[1]}
                      </GradientButton>
                    </ButtonContain>
                  </LockButtonWrapper>
                </TableColumn>
              </TableRow>
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

      <PopupScreen
        isVisible={isPopUpVisible}
        onClose={closeModal}
        width="550px"
        height="550px"
      >
        {isMergeVisible ? <MergeLockScreen /> : <SplitScreen />}
      </PopupScreen>
    </LockTableContains>
  );
};

export default VeTenexTable;
