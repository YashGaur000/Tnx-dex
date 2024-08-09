import LiquidityHeroSection from './LiquidityHeroSection';
import FilterContainer from './FilterContainer';
import LiquidityPoolTable from './LiquidityPoolTable';
import { LiquidityHeaderTitle } from '../styles/Liquiditypool.style';
import PoolData from '../../../../constants/PoolData.json';
import { useState } from 'react';
export interface PoolDataProps {
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
type SortableKeys = keyof PoolDataProps;
const LiquidityPool = () => {
  const [sortedColumn, setSortedColumn] = useState<SortableKeys>('apr');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [filteredData, setFilteredData] = useState<PoolDataProps[]>(PoolData);

  const handleSelectedFilterItem = (selectItem: string) => {
    const newFilterData = PoolData.filter((item) => {
      return item.liquidityType === selectItem || selectItem === 'All Pools';
    });
    setFilteredData(newFilterData);
  };

  const handleSearchFeatures = (item: string) => {
    const searchItem = item.toLowerCase();
    console.log(searchItem);

    const newfilterData = PoolData.filter((item) => {
      return item.pair.toLowerCase().includes(searchItem);
    });

    setFilteredData(newfilterData);
  };

  const handleSortedFeatures = (item: SortableKeys) => {
    const isAsc = item === sortedColumn && sortDirection === 'asc';
    const newDirection = isAsc ? 'desc' : 'asc';

    const sortedArray = [...filteredData].sort((a, b) => {
      if (a[item] < b[item]) return newDirection === 'asc' ? -1 : 1;
      if (a[item] > b[item]) return newDirection === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredData(sortedArray);
    setSortedColumn(item);
    setSortDirection(newDirection);
  };

  return (
    <>
      <LiquidityHeaderTitle fontSize={36}>Liquidity</LiquidityHeaderTitle>
      <LiquidityHeroSection />
      <FilterContainer
        handleSelectedFilterItem={handleSelectedFilterItem}
        handleSearchFeatures={handleSearchFeatures}
      />
      <LiquidityPoolTable
        handleSortedFeatures={handleSortedFeatures}
        sortedData={filteredData}
      />
    </>
  );
};

export default LiquidityPool;
