import LiquidityHeroSection from './LiquidityHeroSection';

import LiquidityPoolTable from './LiquidityPoolTable';
import { LiquidityHeaderTitle } from '../styles/Liquiditypool.style';
import { useLiquidityPoolData } from '../../../../hooks/useLiquidityPoolData';
import PageLoader from '../../../common/PageLoader';
import { LiquidityPoolNewType } from '../../../../graphql/types/LiquidityPoolNew';
import { useEffect, useState } from 'react';
import LiquidityFilter from './LiquidityFiter';
type SortableKeys = 'totalVolumeUSD' | 'totalFeesUSD';
type SortOrder = 'asc' | 'desc';
const ITEMS_PER_PAGE = 25;
const LiquidityPool = () => {
  const { loading, error, data: poolData } = useLiquidityPoolData();

  const [filterData, setFilterData] = useState<LiquidityPoolNewType[]>([]);
  const [sortedData, setSortedData] = useState<LiquidityPoolNewType[]>([]);
  const [sortField, setSortField] = useState<SortableKeys>('totalVolumeUSD');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!loading) {
      setSortedData([...poolData]);
      setTotalPages(Math.ceil(poolData.length / ITEMS_PER_PAGE));
    }
  }, [loading]);
  useEffect(() => {
    setTotalPages(Math.ceil(sortedData.length / ITEMS_PER_PAGE));
    setCurrentPage(1);
  }, [sortedData]);

  const handleSelectedFilterItem = (selectItem: string) => {
    if (!poolData) return;

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
    const searchItem = item.toLowerCase();

    const newfilterData = filterData.filter((item) => {
      return item.name.toLowerCase().includes(searchItem);
    });

    if (newfilterData) {
      setSortedData(newfilterData);
    }
  };
  const handleSortedFeatures = (field: SortableKeys) => {
    const isAsc = sortField === field && sortOrder === 'asc';
    setSortField(field);
    setSortOrder(isAsc ? 'desc' : 'asc');

    const sorted = [...sortedData].sort((a, b) => {
      if (a[field] < b[field]) return isAsc ? 1 : -1;
      if (a[field] > b[field]) return isAsc ? -1 : 1;
      return 0;
    });

    setSortedData(sorted);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevpage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const paginatedData = sortedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  if (loading)
    return (
      <>
        <PageLoader />
      </>
    );
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <LiquidityHeaderTitle fontSize={36}>Liquidity</LiquidityHeaderTitle>
      <LiquidityHeroSection />
      <LiquidityFilter
        handleSelectedFilterItem={handleSelectedFilterItem}
        handleSearchFeatures={handleSearchFeatures}
      />
      {sortedData && (
        <LiquidityPoolTable
          handleSortedFeatures={handleSortedFeatures}
          sortedData={paginatedData}
          handleNextPage={handleNextPage}
          handlePrevpage={handlePrevpage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default LiquidityPool;
