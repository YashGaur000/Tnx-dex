import React, { useMemo, useState } from 'react';
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
  const [selectedTag, setSelectedTag] = useState('All');

  // Memoize the search-filtered data
  const searchFilteredData = useMemo(() => {
    if (!poolData) return [];
    return poolData.filter((pool) =>
      pool.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, poolData]);

  // Memoize the tag-filtered data
  const filterPoolData = useMemo(() => {
    switch (selectedTag) {
      case 'All':
        return searchFilteredData;
      case 'Stable':
        return searchFilteredData.filter((pool) => pool.isStable === true);
      case 'Volatile':
        return searchFilteredData.filter((pool) => pool.isStable === false);
      default:
        console.warn('Unknown filter tag:', selectedTag);
        return searchFilteredData;
    }
  }, [selectedTag, searchFilteredData]);

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

  const handleFilterData = (tag: string) => {
    setSelectedTag(tag);
  };

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <HeaderButtonContent>
          <FilterButtonContainer>
            <FilterButton onClick={() => handleFilterData('All')}>
              All
            </FilterButton>
            <FilterButton onClick={() => handleFilterData('Stable')}>
              Stable
            </FilterButton>
            <FilterButton onClick={() => handleFilterData('Volatile')}>
              Volatile
            </FilterButton>
          </FilterButtonContainer>
        </HeaderButtonContent>

        <SearchWrapper>
          <SearchIcon icon={faSearch} />
          <SearchInput
            type="text"
            placeholder="Search by pair"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </SearchWrapper>

        <HeaderTokenContent>
          <HeaderleftContent>{filterPoolData.length} Pools</HeaderleftContent>
          <HeaderRightContent>Deposited / Staked</HeaderRightContent>
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
                  {filterPoolData.map((pool) =>
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
