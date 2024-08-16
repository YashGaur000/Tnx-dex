import { relayData } from '../../../../constants/RelayData';
import Table, { TableContainerStyle } from '../../../common/TableStyled';

import {
  RelayScreenContainer,
  RelayTableheader,
} from '../../Styles/Relay.style';
import Pagination from '../Pagination';
import RelayCard from './RelayCard';

const Relay = () => {
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
            {relayData.map((data, key) => (
              <RelayCard key={key} Relaydata={data} />
            ))}
          </tbody>
        </Table>
      </TableContainerStyle>

      <div>
        <Pagination />
      </div>
    </RelayScreenContainer>
  );
};

export default Relay;
