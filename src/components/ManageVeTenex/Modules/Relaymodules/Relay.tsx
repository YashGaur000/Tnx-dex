import { useState } from 'react';
import { relayData } from '../../../../constants/RelayData';
import TableContains, {
  TableHeader,
  TableWrapper,
} from '../../../common/TableStyled';

import {
  RelayScreenContainer,
  RelayTableheader,
} from '../../Styles/Relay.style';
import Pagination from '../Pagination';
import RelayCard from './RelayCard';
const ITEMS_PER_PAGE = 5;
const Relay = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(relayData.length / ITEMS_PER_PAGE);

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
  const paginatedData = relayData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  return (
    <RelayScreenContainer>
      <TableWrapper>
        <TableContains padding="20px" margin="0px 0px">
          <thead>
            <tr>
              <TableHeader>
                <RelayTableheader> Relay</RelayTableheader>
              </TableHeader>
              <TableHeader>Voting Power</TableHeader>
              <TableHeader>APR</TableHeader>
              <TableHeader>Manage</TableHeader>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((data, key) => (
              <RelayCard key={key} Relaydata={data} />
            ))}
          </tbody>
        </TableContains>
      </TableWrapper>

      <div>
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevpage={handlePrevpage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </RelayScreenContainer>
  );
};

export default Relay;
