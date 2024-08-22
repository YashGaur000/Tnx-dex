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
  TableCoinPairName,
  ImgLeftIcon,
  TableCoinAddress,
  TableCoinNameAddress,
  TableCoinColumn,
} from '../Styles/IncentiveTokenPopup.style';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Address } from 'viem';
import { ERC20_TEST_TOKEN_LIST } from '../../../constants/tokens'; // Ensure correct named import

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

const IncentiveTokenPopup2: React.FC<TokenSelectModalProps> = ({
  isOpen,
  onClose,
  onSelect,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPools, setFilteredPools] = useState<PoolInfo[]>([]);
  const [filterType] = useState<string>('All');

  useEffect(() => {
    // Map token data to PoolInfo format if needed
    const pools: PoolInfo[] = ERC20_TEST_TOKEN_LIST.map((token) => ({
      id: token.address,
      pair: token.symbol,
      icon1: token.logoURI ?? '',
      icon2: '', // Placeholder value or adjust as necessary
      stablePercentage: 0, // Placeholder value
      tvl: '', // Placeholder value
      apr: 0, // Placeholder value
      volume: '', // Placeholder value
      volumeDesc: '', // Placeholder value
      volumeSubDesc: '', // Placeholder value
      fees: '', // Placeholder value
      feesDesc: '', // Placeholder value
      feesSubDesc: '', // Placeholder value
      poolBalance: '', // Placeholder value
      balanceDesc: token.name, // Placeholder value
      liquidityType: 'Stable', // Example value, adjust as necessary
    }));

    // Apply filtering
    const filtered = pools.filter(
      (pool) =>
        (filterType === 'All' || pool.liquidityType === filterType) &&
        pool.pair.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredPools(filtered);
  }, [searchQuery, filterType]);

  if (!isOpen) {
    return null;
  }

  const handleRowClick = (pool: PoolInfo) => {
    console.log('Selected pool:', pool); // Debugging
    onSelect(pool); // Ensure onSelect is properly implemented
    onClose(); // Optionally close the modal after selection
  };

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
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
          <HeaderLeftContent>{filteredPools.length} Tokens</HeaderLeftContent>
          <HeaderRightContent>Balance</HeaderRightContent>
        </HeaderTokenContent>

        <TableContainerList>
          <TableList>
            <TableBody>
              {filteredPools.map((pool) => (
                <TableRow key={pool.id} onClick={() => handleRowClick(pool)}>
                  <TableCoinColumn>
                    <ImgLeftIcon
                      src={pool.icon1}
                      alt="Icon 1"
                      width={36}
                      height={36}
                    />
                    <TableCoinNameAddress>
                      <TableCoinPairName>{pool.balanceDesc}</TableCoinPairName>
                      <TableCoinAddress>
                        {pool.id?.slice(0, 4) + '...' + pool.id?.slice(-4)}
                      </TableCoinAddress>
                    </TableCoinNameAddress>
                  </TableCoinColumn>
                  <TableBalanceColumn>{}</TableBalanceColumn>
                </TableRow>
              ))}
            </TableBody>
          </TableList>
        </TableContainerList>
      </ModalContent>
    </ModalWrapper>
  );
};

export default IncentiveTokenPopup2;
