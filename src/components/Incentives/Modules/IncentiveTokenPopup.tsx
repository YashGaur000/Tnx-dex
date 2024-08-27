import React, { useState, useEffect } from 'react';
import {
  ModalWrapper,
  ModalContent,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  HeaderTokenContent,
  HeaderLeftContent,
  HeaderRightContent,
  TableContainerList,
  TableList,
  TableBody,
  TableBalanceColumn,
  TableRow,
  TableData,
  ImgRightIcon,
  TableCoinPairName,
  ImgLeftIcon,
  HeaderButtonContent,
  FilterButtonContainer,
  FilterButton,
} from '../Styles/IncentiveTokenPopup.style';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Address } from 'viem';
import PoolData from '../../../constants/poolData';

interface PoolInfo {
  id: string;
  pair: string;
  icon1: string;
  icon2: string;
  stablePercentage: number;
  tvl: string;
  apr: number;
  volume: string;
  volumeDesc: string;
  volumeSubDesc: string;
  fees: string;
  feesDesc: string;
  feesSubDesc: string;
  poolBalance: string;
  balanceDesc: string;
  liquidityType: string;
}

interface TokenSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (pool: PoolInfo) => void;
  account: Address;
}

const IncentiveTokenPopup: React.FC<TokenSelectModalProps> = ({
  isOpen,
  onClose,
  onSelect,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPools, setFilteredPools] = useState<PoolInfo[]>(PoolData);
  const [filterType, setFilterType] = useState<string>('All');

  useEffect(() => {
    setFilteredPools(
      PoolData.filter(
        (pool) =>
          (filterType === 'All' || pool.liquidityType === filterType) &&
          pool.pair.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, filterType]);

  if (!isOpen) {
    return null;
  }

  const handleRowClick = (pool: PoolInfo) => {
    onSelect(pool);
    onClose();
  };

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <HeaderButtonContent>
          <FilterButtonContainer>
            <FilterButton onClick={() => setFilterType('All')}>
              All
            </FilterButton>
            <FilterButton onClick={() => setFilterType('Stable')}>
              Stable
            </FilterButton>
            <FilterButton onClick={() => setFilterType('Volatile')}>
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
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchWrapper>

        <HeaderTokenContent>
          <HeaderLeftContent>{filteredPools.length} Pools</HeaderLeftContent>
          <HeaderRightContent>Pool Balance</HeaderRightContent>
        </HeaderTokenContent>

        <TableContainerList>
          <TableList>
            <TableBody>
              <TableData>
                {filteredPools.map((pool) => (
                  <TableRow key={pool.id} onClick={() => handleRowClick(pool)}>
                    <td>
                      <ImgLeftIcon
                        src={pool.icon1}
                        alt="Icon 1"
                        width={36}
                        height={36}
                      />
                      <ImgRightIcon
                        src={pool.icon2}
                        alt="Icon 2"
                        width={36}
                        height={36}
                      />
                    </td>
                    <TableCoinPairName>{pool.pair}</TableCoinPairName>
                    <TableBalanceColumn>{pool.poolBalance}</TableBalanceColumn>
                  </TableRow>
                ))}
              </TableData>
            </TableBody>
          </TableList>
        </TableContainerList>
      </ModalContent>
    </ModalWrapper>
  );
};

export default IncentiveTokenPopup;
