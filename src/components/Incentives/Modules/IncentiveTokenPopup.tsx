import React, { useState } from 'react';
import {
  ModalWrapper,
  ModalContent,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  HeaderTokenContent,
  HeaderleftContent,
  HeaderRightContent,
  TableContainerList,
  TableList,
  TableBody,
  TableBalanceColumn,
  TableRow,
  TableData,
  TableCoinPairName,
  HeaderButtonContent,
  FilterButtonContainer,
  FilterButton,
} from '../Styles/IncentiveTokenPopup.style';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useLiquidityPoolData } from '../../../hooks/useLiquidityPoolData';
import { LiquidityPoolNewType } from '../../../graphql/types/LiquidityPoolNew';
import PageLoader from '../../common/PageLoader';
import {
  GroupImgContains,
  IMG1Contains,
  IMG2Contains,
  Imgstyle,
} from '../../Liquidity/LiquidityHomePage/styles/LiquidityTable.style';
import { getTokenLogo } from '../../../utils/getTokenLogo';

interface TokenSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (pool: LiquidityPoolNewType) => void;
  // account: Address;
}

const IncentiveTokenPopup: React.FC<TokenSelectModalProps> = ({
  isOpen,
  onClose,
  onSelect,
}) => {
  const { loading, error, data: poolData } = useLiquidityPoolData();
  const [searchQuery, setSearchQuery] = useState('');

  // const { balances } = useTokenBalances(tokenList, address ?? AddressZero);
  // const getParam = useQueryParams();
  // const poolId = getParam('pool') ?? '';

  if (error) return `Error! ${error.message}`;

  if (!isOpen) {
    return null;
  }

  const handleRowClick = (pool: LiquidityPoolNewType) => {
    onSelect(pool);
    onClose();
  };

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <HeaderButtonContent>
          <FilterButtonContainer>
            <FilterButton>All</FilterButton>
            <FilterButton>Stable</FilterButton>
            <FilterButton>Volatile</FilterButton>
          </FilterButtonContainer>
        </HeaderButtonContent>

        <SearchWrapper>
          <SearchIcon icon={faSearch} />
          <SearchInput
            type="text"
            placeholder="Search by pair"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchWrapper>

        <HeaderTokenContent>
          <HeaderleftContent>{poolData.length} Pools</HeaderleftContent>
          <HeaderRightContent>Deposited/Staked</HeaderRightContent>
        </HeaderTokenContent>
        {loading ? (
          <>
            <PageLoader />
          </>
        ) : (
          <TableContainerList>
            <TableList>
              <TableBody>
                <TableData>
                  {poolData.map((pool) =>
                    pool.reserve0 && pool.reserve1 ? (
                      <TableRow
                        key={pool.id}
                        onClick={() => handleRowClick(pool)}
                      >
                        <td>
                          <GroupImgContains>
                            <IMG1Contains top={10} left={0}>
                              <Imgstyle
                                src={getTokenLogo(pool.token0.symbol)}
                              />
                            </IMG1Contains>
                            <IMG2Contains top={10} left={25}>
                              <Imgstyle
                                src={getTokenLogo(pool.token1.symbol)}
                              />
                            </IMG2Contains>
                          </GroupImgContains>
                        </td>
                        <TableCoinPairName>{pool.name}</TableCoinPairName>
                        <TableBalanceColumn> </TableBalanceColumn>
                      </TableRow>
                    ) : undefined
                  )}
                </TableData>
              </TableBody>
            </TableList>
          </TableContainerList>
        )}
      </ModalContent>
    </ModalWrapper>
  );
};

export default IncentiveTokenPopup;
