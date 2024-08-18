import { useState } from 'react';
import { relayData } from '../../../../constants/RelayData';
import Table, { TableContainerStyle } from '../../../common/TableStyled';

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
      <TableContainerStyle>
        <Table padding="20px" margin="0px 0px">
          <thead>
            <tr>
              <th>
                <RelayTableheader> Relay</RelayTableheader>
              </th>
              <th>Voting Power</th>
              <th>APR</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((data, key) => (
              <RelayCard key={key} Relaydata={data} />
            ))}
          </tbody>
        </Table>
      </TableContainerStyle>

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
