import Table, { TableContainerStyle } from '../../../common/TableStyled';
import PoolData from '../../../../constants/PoolData.json';
import LiquidityPoolCard from './LiquidityPoolCard.tsx';
import SortIcon from '../../../../assets/sorting.png';

const LiquidityPoolTable = () => {
  return (
    <TableContainerStyle>
      <Table
        padding="20px 30px "
        borderRadius="20px"
        textAlign="center"
        width="100%"
        margin="20px 0px"
      >
        <thead>
          <tr>
            <th>Liquidity Pool </th>
            <th>
              APR <img src={SortIcon} />
            </th>
            <th>
              Volume <img src={SortIcon} />
            </th>
            <th>
              Fees <img src={SortIcon} />
            </th>
            <th>
              Pool Balance <img src={SortIcon} />
            </th>
          </tr>
        </thead>
        <tbody>
          {PoolData.map((item, key) => (
            <LiquidityPoolCard key={key} data={item} />
          ))}
        </tbody>
      </Table>
    </TableContainerStyle>
  );
};

export default LiquidityPoolTable;
