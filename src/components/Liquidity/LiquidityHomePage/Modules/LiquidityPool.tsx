import LiquidityHeroSection from './LiquidityHeroSection';

import LiquidityPoolTable from './LiquidityPoolTable';
import { LiquidityHeaderTitle } from '../styles/Liquiditypool.style';
import { useLiquidityPoolData } from '../../../../hooks/useLiquidityPoolData';
import PageLoader from '../../../common/PageLoader';
import { LiquidityPoolNewType } from '../../../../graphql/types/LiquidityPoolNew';
import { useEffect, useState } from 'react';
import LiquidityFilter from './LiquidityFiter';
type SortableKeys = 'totalVolumeUSD' | 'reserve0' | 'totalFeesUSD';

const LiquidityPool = () => {
  const { loading, error, data: poolData } = useLiquidityPoolData();
  const [filterData, setFilterData] = useState<LiquidityPoolNewType[]>([]);
  const [sortedData, setSortedData] = useState<LiquidityPoolNewType[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [sortedColumn, setSortedColumn] =
    useState<SortableKeys>('totalVolumeUSD');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    if (poolData && !isFiltered) {
      setSortedData(poolData);
    }
  }, [poolData, isFiltered]);

  if (loading)
    return (
      <>
        <PageLoader />
      </>
    );
  if (error) return `Error! ${error.message}`;

  const handleSelectedFilterItem = (selectItem: string) => {
    if (!poolData) return;
    setIsFiltered(true);
    const newFilterData = poolData.filter((item) => {
      if (selectItem === 'All Pools') {
        return true;
      } else if (selectItem === 'Stable') {
        return item.isStable;
      } else if (selectItem === 'Volatile') {
        return !item.isStable;
      } else if (selectItem === 'Low TVL') {
        return Number(item.totalVolumeUSD) < 100;
      } else if (selectItem === 'Concentrated') {
        if (item.name.toLowerCase().includes('concentrated')) {
          return true;
        }
        return false;
      }
      return false;
    });

    if (newFilterData.length > 0) {
      setSortedData(newFilterData);
      setFilterData(newFilterData);
    } else {
      console.log('No pools match the selected filter.');
      setSortedData([]);
      setFilterData([]);
    }
  };

  const handleSearchFeatures = (item: string) => {
    setIsFiltered(true);
    const searchItem = item.toLowerCase();

    console.log(item);

    const newfilterData = filterData.filter((item) => {
      return item.name.toLowerCase().includes(searchItem);
    });

    if (newfilterData) {
      setIsFiltered(true);
      setSortedData(newfilterData);
    }
  };
  const handleSortedFeatures = (item: SortableKeys) => {
    setIsFiltered(true);
    const isAsc = item === sortedColumn && sortDirection === 'asc';
    const newDirection = isAsc ? 'desc' : 'asc';

    const sortedArray = [...sortedData].sort((a, b) => {
      if (a[item] < b[item]) return newDirection === 'asc' ? -1 : 1;
      if (a[item] > b[item]) return newDirection === 'asc' ? 1 : -1;
      return 0;
    });

    setSortedData(sortedArray);
    setSortedColumn(item);
    setSortDirection(newDirection);
  };

  return (
    <>
      <LiquidityHeaderTitle fontsize={36}>Liquidity</LiquidityHeaderTitle>
      <LiquidityHeroSection />
      <LiquidityFilter
        handleSelectedFilterItem={handleSelectedFilterItem}
        handleSearchFeatures={handleSearchFeatures}
      />
      {sortedData && (
        <LiquidityPoolTable
          handleSortedFeatures={handleSortedFeatures}
          sortedData={sortedData}
        />
      )}
    </>
  );
};

export default LiquidityPool;
